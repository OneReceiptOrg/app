import puppeteer, { Browser, Page } from "puppeteer";

let browserInstance: Browser | null = null;
let browserLaunchPromise: Promise<Browser> | null = null;
const MAX_CONCURRENT_PAGES = 3;
const activePages = new Set<Page>();

export async function getManagedBrowser(): Promise<Browser> {
  if (browserInstance && browserInstance.connected) {
    const pages = await browserInstance.pages();
    const activePagesCount = activePages.size;

    if (activePagesCount >= MAX_CONCURRENT_PAGES) {
      console.log(
        `Too many active pages (${activePagesCount}/${MAX_CONCURRENT_PAGES}). Waiting for a page to be released...`
      );
      await waitForAvailablePage();
    }

    console.log(
      `Reusing existing browser instance. Active pages: ${activePagesCount}/${MAX_CONCURRENT_PAGES}`
    );
    return browserInstance;
  }

  if (browserLaunchPromise) {
    console.log("Waiting for ongoing browser launch...");
    return browserLaunchPromise;
  }

  console.log("Launching NEW browser instance...");
  browserLaunchPromise = puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-web-security",
      "--allow-file-access-from-files",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--single-process",
      "--disable-gpu",
    ],
  });

  try {
    browserInstance = await browserLaunchPromise;
    console.log("NEW browser instance launched successfully.");

    browserInstance.on("disconnected", () => {
      console.error("Browser instance disconnected unexpectedly.");
      browserInstance = null;
      browserLaunchPromise = null;
      activePages.clear();
    });

    return browserInstance;
  } catch (error) {
    console.error("Failed to launch browser:", error);
    browserLaunchPromise = null;
    throw error;
  } finally {
    browserLaunchPromise = null;
  }
}

export async function closeBrowserInstance() {
  if (browserInstance) {
    console.log("Closing managed browser instance...");
    try {
      await browserInstance.close();
      browserInstance = null;
      activePages.clear();
      console.log("Managed browser instance closed.");
    } catch (closeError) {
      console.error("Error closing browser instance:", closeError);
    }
  }
}

export async function trackPage(page: Page) {
  activePages.add(page);
  page.once("close", () => {
    activePages.delete(page);
    console.log(
      `Page closed. Active pages: ${activePages.size}/${MAX_CONCURRENT_PAGES}`
    );
  });
}

export async function releasePage(page: Page) {
  if (page && !page.isClosed()) {
    try {
      await page.close();
      activePages.delete(page);
      console.log(
        `Page released. Active pages: ${activePages.size}/${MAX_CONCURRENT_PAGES}`
      );
    } catch (error) {
      console.error("Error closing page:", error);
      activePages.delete(page);
    }
  }
}

async function waitForAvailablePage(timeout = 30000): Promise<void> {
  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    const checkInterval = setInterval(() => {
      if (activePages.size < MAX_CONCURRENT_PAGES) {
        clearInterval(checkInterval);
        clearTimeout(timeoutId);
        resolve();
      }

      if (Date.now() - startTime > timeout) {
        clearInterval(checkInterval);
        reject(new Error("Timeout waiting for an available page"));
      }
    }, 500);

    const timeoutId = setTimeout(() => {
      clearInterval(checkInterval);
      reject(new Error("Timeout waiting for an available page"));
    }, timeout);
  });
}

process.on("SIGTERM", async () => {
  console.log("SIGTERM signal received.");
  await closeBrowserInstance();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("SIGINT signal received.");
  await closeBrowserInstance();
  process.exit(0);
});
