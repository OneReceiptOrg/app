import fs from "fs/promises";
import path from "path";
import { templates } from "@/lib/templates";

interface InvoiceTemplateConfig {
  id: string;
  name: string;
  selector?: string;
  assetsInline?: boolean;
  filename: string;
}

export function getTemplateConfig(
  template: string,
  templateId: string
): InvoiceTemplateConfig | undefined {
  const config = templates[template].invoices.find(
    (invoice) => invoice.id === templateId
  );
  if (!config) {
    console.warn(`No configuration found for invoice template: ${template}`);
  }
  return config;
}

export async function loadTemplateHtml(
  template: string,
  config: InvoiceTemplateConfig
): Promise<string> {
  if (!config.filename) {
    throw new Error(
      `Invoice template '${template}' is configured without a filename.`
    );
  }

  const templateDir = template;
  const templatePath = path.join(
    process.cwd(),
    "templates",
    "invoices",
    templateDir,
    config.filename
  );

  console.log(`Attempting to read invoice template: ${templatePath}`);
  try {
    const htmlContent = await fs.readFile(templatePath, "utf-8");
    console.log(`Successfully read invoice template: ${templatePath}`);
    return htmlContent;
  } catch (error) {
    console.error(
      `Error reading invoice template file ${templatePath}:`,
      error
    );
    throw new Error(
      `Could not load invoice template file for '${template}'. Ensure the file exists at the specified path.`
    );
  }
}
