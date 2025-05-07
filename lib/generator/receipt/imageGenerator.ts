import { Browser, Page } from "puppeteer";
import { Buffer } from "buffer";
import sharp from "sharp";
import { trackPage, releasePage } from "./puppeteerManager";

export async function generateImageWithPuppeteer(
  htmlContent: string,
  receiptSelector: string,
  browser: Browser
): Promise<Buffer> {
  let page: Page | null = null;
  console.log("Receipt selector:", receiptSelector);

  // Handle special case for gucci_nyc
  let modifiedSelector = receiptSelector;
  let specialClip = null;
  if (receiptSelector === "#capture_here:gucci_nyc") {
    modifiedSelector = "#capture_here";
    specialClip = {
      x: 180,
      y: 30,
      width: 270,
      height: 725,
    };
    console.log("Using special clip settings for Gucci NYC receipt");
  }

  try {
    console.time("Create New Page");
    page = await browser.newPage();
    await trackPage(page);

    page.on("console", (msg) => {
      const type = msg.type().toUpperCase();
      if (type === "ERROR" || type === "WARNING") {
        console.error(`PUPPETEER PAGE [${type}]: ${msg.text()}`);
      }
    });
    page.on("pageerror", (error) => {
      console.error(`PUPPETEER PAGE ERROR: ${error.message}`);
    });
    page.on("requestfailed", (request) => {
      console.error(
        `PUPPETEER REQUEST FAILED: ${request.url()} - ${
          request.failure()?.errorText
        }`
      );
    });
    console.timeEnd("Create New Page");

    console.time("Set Viewport");
    await page.setViewport({
      width: 800,
      height: 1600,
      deviceScaleFactor: 3.125,
    });
    console.timeEnd("Set Viewport");

    console.time("Set Page Content");
    await page.addStyleTag({
      content: `
        body {
          margin: 8px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }
        * { box-sizing: border-box; }
      `,
    });

    await page.setContent(htmlContent, {
      waitUntil: "load",
      timeout: 15000,
    });
    console.timeEnd("Set Page Content");

    console.time("Wait For Fonts");
    try {
      await page.evaluateHandle("document.fonts.ready");
    } catch (fontError) {
      console.warn("Error waiting for fonts (continuing anyway):", fontError);
    }
    console.timeEnd("Wait For Fonts");

    console.time("Find Receipt Element");
    const receiptElementHandle = await page.$(modifiedSelector);
    if (!receiptElementHandle) {
      let debugHtml = "";
      try {
        debugHtml = await page.content();
      } catch (error) {
        debugHtml = "Failed to get page content for debugging";
      }
      console.error("Failed to find element with selector:", modifiedSelector);
      console.error(
        "Rendered HTML content:\n",
        debugHtml.substring(0, 2000) + "..."
      );
      throw new Error(
        `Could not find ${modifiedSelector} element in the rendered HTML`
      );
    }
    console.timeEnd("Find Receipt Element");

    console.time("Take Screenshot");
    const padding = 40;

    const isDocumentRootElement = await page.evaluate((selector) => {
      const element = document.querySelector(selector);
      return element === document.body || element === document.documentElement;
    }, modifiedSelector);

    let rawImageBuffer: Buffer;

    // Special case for Gucci NYC with specific clip dimensions
    if (specialClip) {
      console.log("Applying special clip dimensions for screenshot");
      rawImageBuffer = (await page.screenshot({
        type: "jpeg",
        quality: 100,
        clip: specialClip,
      })) as Buffer;
    } else if (isDocumentRootElement) {
      await page.evaluate((paddingValue) => {
        if (document.body) {
          document.documentElement.style.height = "auto";
          document.documentElement.style.overflow = "auto";
          document.body.style.height = "auto";
          document.body.style.margin = "0";
          document.body.style.overflow = "visible";
          document.body.style.display = "inline-block";

          document.body.style.padding = `${paddingValue}px`;
          document.body.style.background = "#ffffff";
          document.body.style.boxSizing = "border-box";
        } else {
          console.warn("Document body not found when trying to apply styles.");
        }
      }, padding);

      const bodyBoundingBox = await page.evaluate(() => {
        if (!document.body) return null;
        const rect = document.body.getBoundingClientRect();
        return {
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        };
      });

      if (
        !bodyBoundingBox ||
        bodyBoundingBox.width <= 0 ||
        bodyBoundingBox.height <= 0
      ) {
        console.warn(
          "Could not get valid body bounding box. Falling back to viewport screenshot."
        );
        rawImageBuffer = (await page.screenshot({
          type: "jpeg",
          quality: 100,
        })) as Buffer;
      } else {
        rawImageBuffer = (await page.screenshot({
          type: "jpeg",
          quality: 100,
          clip: {
            x: bodyBoundingBox.x,
            y: bodyBoundingBox.y,
            width: bodyBoundingBox.width,
            height: bodyBoundingBox.height,
          },
        })) as Buffer;
      }
    } else {
      if (modifiedSelector === ".pc.pc1.w0.h0.opened") {
        console.log("Applying direct screenshot logic for LV selector.");
        const directElementHandle = await page.$(modifiedSelector);
        if (!directElementHandle) {
          throw new Error(
            `Could not find element ${modifiedSelector} for direct screenshot.`
          );
        }
        rawImageBuffer = (await directElementHandle.screenshot({
          type: "jpeg",
          quality: 100,
        })) as Buffer;
        await directElementHandle.dispose();
      } else {
        const elementExists = await page.evaluate((selector) => {
          return document.querySelector(selector) !== null;
        }, modifiedSelector);

        if (!elementExists) {
          throw new Error(
            `Element with selector '${modifiedSelector}' not found for screenshot.`
          );
        }

        await page.evaluate(
          (selector, paddingValue) => {
            const element = document.querySelector(selector);
            if (
              element &&
              element.parentNode &&
              element !== document.documentElement
            ) {
              const wrapper = document.createElement("div");
              wrapper.id = "screenshot-wrapper";
              wrapper.style.padding = `${paddingValue}px`;
              wrapper.style.display = "inline-block";
              wrapper.style.background = "#ffffff";
              if (
                element.parentNode.nodeType === Node.ELEMENT_NODE ||
                element.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
              ) {
                element.parentNode.insertBefore(wrapper, element);
                wrapper.appendChild(element);
              } else {
                console.error(
                  "Cannot insert wrapper before element because parent node is not suitable:",
                  element.parentNode
                );
              }
            } else if (element && !element.parentNode) {
              console.warn("Selected element has no parentNode. Cannot wrap.");
            } else if (element === document.documentElement) {
              console.warn(
                "Attempted to wrap documentElement in non-root path."
              );
            }
          },
          modifiedSelector,
          padding
        );

        const wrapperHandle = await page.$("#screenshot-wrapper");
        if (!wrapperHandle) {
          console.warn(
            "Screenshot wrapper could not be created/found. Attempting direct element screenshot."
          );
          const directElementHandle = await page.$(modifiedSelector);
          if (!directElementHandle) {
            throw new Error(
              `Could not find element ${modifiedSelector} for direct screenshot fallback.`
            );
          }
          rawImageBuffer = (await directElementHandle.screenshot({
            type: "jpeg",
            quality: 100,
          })) as Buffer;
          await directElementHandle.dispose();
        } else {
          rawImageBuffer = (await wrapperHandle.screenshot({
            type: "jpeg",
            quality: 100,
          })) as Buffer;
          await wrapperHandle.dispose();
        }
      }
    }

    console.timeEnd("Take Screenshot");

    console.time("Process Image");
    let processedImageBuffer: Buffer = rawImageBuffer;

    // Apply compression to reduce memory usage
    try {
      processedImageBuffer = await sharp(rawImageBuffer)
        .jpeg({ quality: 85, progressive: true, mozjpeg: true })
        .toBuffer();
      console.log(
        `Image compression: ${rawImageBuffer.length} bytes → ${
          processedImageBuffer.length
        } bytes (${(
          (processedImageBuffer.length / rawImageBuffer.length) *
          100
        ).toFixed(1)}%)`
      );
    } catch (sharpError) {
      console.error("Error during image processing with Sharp:", sharpError);
      processedImageBuffer = rawImageBuffer;
    }
    console.timeEnd("Process Image");

    return processedImageBuffer;
  } catch (error) {
    console.error("Error during image generation with Puppeteer:", error);
    throw error;
  } finally {
    if (page) {
      try {
        console.time("Release Page");
        await releasePage(page);
        console.timeEnd("Release Page");
      } catch (closeError) {
        console.error("Error while releasing page:", closeError);
      }
    }

    // Force garbage collection if available
    if (global.gc) {
      try {
        global.gc();
      } catch (gcError) {
        console.error("Error triggering garbage collection:", gcError);
      }
    }
  }
}
