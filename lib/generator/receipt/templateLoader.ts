import fs from "fs/promises";
import path from "path";
import { templates } from "@/lib/templates";

interface ReceiptTemplateConfig {
  id: string;
  name: string;
  selector?: string;
  assetsInline?: boolean;
  filename: string;
}

export function getTemplateConfig(
  template: string,
  templateId: string
): ReceiptTemplateConfig | undefined {
  const config = templates[template].receipts.find(
    (receipt) => receipt.id === templateId
  );
  if (!config) {
    console.warn(`No configuration found for template: ${template}`);
  }
  return config;  
}

export async function loadTemplateHtml(
  template: string,
  config: ReceiptTemplateConfig
): Promise<string> {
  if (!config.filename) {
    throw new Error(`Template '${template}' is configured without a filename.`);
  }

  const templateDir = template;
  const templatePath = path.join(
    process.cwd(),
    "templates",
    "receipts",
    templateDir,
    config.filename
  );

  console.log(`Attempting to read template: ${templatePath}`);
  try {
    const htmlContent = await fs.readFile(templatePath, "utf-8");
    console.log(`Successfully read template: ${templatePath}`);
    return htmlContent;
  } catch (error) {
    console.error(`Error reading template file ${templatePath}:`, error);
    throw new Error(
      `Could not load template file for '${template}'. Ensure the file exists at the specified path.`
    );
  }
}
