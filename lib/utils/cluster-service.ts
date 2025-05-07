import { Cluster } from "puppeteer-cluster";
import os from "os";

// We'll use a singleton pattern to ensure one cluster across the app
let clusterInstance: Cluster | null = null;

// Type for our task data
export type RenderTaskData = {
  html: string;
  selector: string;
  template?: string;
  type: "image" | "pdf";
};

/**
 * Get or initialize the cluster
 */
export async function getCluster() {
  if (clusterInstance) {
    return clusterInstance;
  }

  console.log("Initializing new Puppeteer cluster...");
  clusterInstance = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: Math.max(1, os.cpus().length - 1),
    timeout: 30000,
    puppeteerOptions: {
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-web-security",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--disable-gpu",
      ],
    },
    monitor: true,
    retryLimit: 1,
    retryDelay: 1000,
  });

  // Define tasks
  await clusterInstance.task(
    async ({ page, data }: { page: any; data: RenderTaskData }) => {
      const { html, selector, type, template } = data;

      // Handle special case for gucci_nyc
      let modifiedSelector = selector;
      let specialClip = null;
      if (selector === "#capture_here:gucci_nyc") {
        modifiedSelector = "#capture_here";
        specialClip = {
          x: 180,
          y: 30,
          width: 270,
          height: 725,
        };
        console.log("Using special clip settings for Gucci NYC receipt");
      }

      console.time("Set Viewport");
      await page.setViewport({
        width: 800,
        height: 1600,
        deviceScaleFactor: type === "image" ? 3.125 : 1,
      });
      console.timeEnd("Set Viewport");

      // Add common page event handlers
      page.on("console", (msg: any) => {
        const type = msg.type().toUpperCase();
        if (type === "ERROR" || type === "WARNING") {
          console.error(`CLUSTER PAGE [${type}]: ${msg.text()}`);
        }
      });

      page.on("pageerror", (error: Error) => {
        console.error(`CLUSTER PAGE ERROR: ${error.message}`);
      });

      page.on("requestfailed", (request: any) => {
        console.error(
          `CLUSTER REQUEST FAILED: ${request.url()} - ${
            request.failure()?.errorText || "unknown error"
          }`
        );
      });

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

      await page.setContent(html, {
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

      if (type === "image") {
        console.time("Find Element");
        const elementHandle = await page.$(modifiedSelector);
        if (!elementHandle) {
          let debugHtml = "";
          try {
            debugHtml = await page.content();
          } catch (error) {
            debugHtml = "Failed to get page content for debugging";
          }
          console.error(
            "Failed to find element with selector:",
            modifiedSelector
          );
          console.error(
            "Rendered HTML content:\n",
            debugHtml.substring(0, 2000) + "..."
          );
          throw new Error(
            `Could not find ${modifiedSelector} element in the rendered HTML`
          );
        }
        console.timeEnd("Find Element");

        console.time("Take Screenshot");
        const padding = 40;

        const isDocumentRootElement = await page.evaluate(
          (selector: string) => {
            const element = document.querySelector(selector);
            return (
              element === document.body || element === document.documentElement
            );
          },
          modifiedSelector
        );

        // Special case for Gucci NYC with specific clip dimensions
        if (specialClip) {
          console.log("Applying special clip dimensions for screenshot");
          return page.screenshot({
            type: "jpeg",
            quality: 100,
            clip: specialClip,
          });
        } else if (isDocumentRootElement) {
          await page.evaluate((paddingValue: number) => {
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
              console.warn(
                "Document body not found when trying to apply styles."
              );
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
            return page.screenshot({
              type: "jpeg",
              quality: 100,
            });
          } else {
            return page.screenshot({
              type: "jpeg",
              quality: 100,
              clip: {
                x: bodyBoundingBox.x,
                y: bodyBoundingBox.y,
                width: bodyBoundingBox.width,
                height: bodyBoundingBox.height,
              },
            });
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
            const screenshot = await directElementHandle.screenshot({
              type: "jpeg",
              quality: 100,
            });
            await directElementHandle.dispose();
            return screenshot;
          } else {
            const elementExists = await page.evaluate((selector: string) => {
              return document.querySelector(selector) !== null;
            }, modifiedSelector);

            if (!elementExists) {
              throw new Error(
                `Element with selector '${modifiedSelector}' not found for screenshot.`
              );
            }

            await page.evaluate(
              (selector: string, paddingValue: number) => {
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
                  console.warn(
                    "Selected element has no parentNode. Cannot wrap."
                  );
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
              const screenshot = await directElementHandle.screenshot({
                type: "jpeg",
                quality: 100,
              });
              await directElementHandle.dispose();
              return screenshot;
            } else {
              const screenshot = await wrapperHandle.screenshot({
                type: "jpeg",
                quality: 100,
              });
              await wrapperHandle.dispose();
              return screenshot;
            }
          }
        }
        console.timeEnd("Take Screenshot");
      } else if (type === "pdf") {
        // For CP Company PDFs with specific settings
        if (template === "cpcompany") {
          return page.pdf({
            width: "1200px",
            height: "1800px",
            printBackground: true,
            margin: {
              top: "10mm",
              right: "10mm",
              bottom: "10mm",
              left: "10mm",
            },
            scale: 0.8,
          });
        }

        // Default PDF settings for other templates
        return page.pdf({
          format: "A4",
          printBackground: true,
          margin: {
            top: "20px",
            right: "20px",
            bottom: "20px",
            left: "20px",
          },
          pageRanges: "1",
        });
      }
    }
  );

  // Handle process exit - clean shutdown
  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, async () => {
      console.log(`${signal} received, closing cluster...`);
      await closeCluster();
      process.exit(0);
    });
  }

  return clusterInstance;
}

export async function closeCluster() {
  if (clusterInstance) {
    console.log("Closing puppeteer cluster...");
    await clusterInstance.close();
    clusterInstance = null;
  }
}
