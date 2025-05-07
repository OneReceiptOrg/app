import { Browser, Page } from "puppeteer";
import { Buffer } from "node:buffer";
import {
  trackPage,
  releasePage,
} from "@/lib/generator/receipt/puppeteerManager";

export async function generatePdfWithPuppeteer(
  htmlContent: string,
  selector: string,
  browser: Browser,
  template?: string
): Promise<Buffer> {
  let page: Page | null = null;
  console.time("PDF Generation Inside Puppeteer");
  try {
    page = await browser.newPage();
    await trackPage(page);

    // For CP Company, use a large viewport
    if (template === "cpcompany") {
      await page.setViewport({ width: 1200, height: 6000 });
    }

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

    console.time("Set Page Content");
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });
    console.timeEnd("Set Page Content");

    // Special handling for CP Company template
    if (template === "cpcompany") {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.time("Generate PDF Buffer");
      const pdfBuffer = await page.pdf({
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
      console.timeEnd("Generate PDF Buffer");
      console.log(`Generated CP Company PDF, size: ${pdfBuffer.length} bytes`);
      return Buffer.from(pdfBuffer);
    }

    // Get Element Dimensions for non-CP templates
    console.time("Get Element Dimensions");
    const elementHandle = await page.$(selector);
    if (!elementHandle) {
      throw new Error(`Element with selector "${selector}" not found`);
    }

    const boundingBox = await elementHandle.boundingBox();
    if (!boundingBox) {
      throw new Error(`Could not get bounding box for selector "${selector}"`);
    }
    console.timeEnd("Get Element Dimensions");

    console.time("Generate PDF Buffer");

    // Default handling for other templates
    const pdfBuffer = await page.pdf({
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
    console.timeEnd("Generate PDF Buffer");
    console.log(`Generated PDF buffer size: ${pdfBuffer.length} bytes`);

    return Buffer.from(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF with Puppeteer:", error);
    throw new Error("Puppeteer PDF generation failed");
  } finally {
    if (page) {
      console.time("Release Page");
      await releasePage(page);
      console.timeEnd("Release Page");
    }

    // Force garbage collection if available
    if (global.gc) {
      try {
        global.gc();
      } catch (gcError) {
        console.error("Error triggering garbage collection:", gcError);
      }
    }

    console.timeEnd("PDF Generation Inside Puppeteer");
  }
}
