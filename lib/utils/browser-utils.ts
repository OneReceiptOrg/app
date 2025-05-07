import { closeBrowserInstance } from "@/lib/generator/receipt/puppeteerManager";

let requestCount = 0;
const MAX_REQUESTS_PER_BROWSER = 10;

export function logMemoryUsage() {
  const { rss, heapTotal, heapUsed, external } = process.memoryUsage();
  console.log({
    rss: `${Math.round(rss / 1024 / 1024)} MB`,
    heapTotal: `${Math.round(heapTotal / 1024 / 1024)} MB`,
    heapUsed: `${Math.round(heapUsed / 1024 / 1024)} MB`,
    external: `${Math.round(external / 1024 / 1024)} MB`,
    requestCount: `${requestCount}/${MAX_REQUESTS_PER_BROWSER}`,
  });
}

export async function checkAndManageBrowserLifecycle() {
  requestCount++;

  if (requestCount >= MAX_REQUESTS_PER_BROWSER) {
    console.log(`Restarting browser after ${requestCount} requests`);
    await closeBrowserInstance();
    requestCount = 0;
  }

  return requestCount;
}
