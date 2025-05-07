type TemplateData = Record<string, any>;

function injectGenericData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Generic Invoice Data");
  let injectedHtml = htmlContent;
  for (const key in templateData) {
    const placeholder = `{{${key}}}`;
    const regex = new RegExp(
      placeholder.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
      "g"
    );
    const replacementValue = String(templateData[key] ?? "");
    // console.log(`Injecting ${key} with value: ${replacementValue}`);
    injectedHtml = injectedHtml.replace(regex, replacementValue);
  }
  const remainingPlaceholders = injectedHtml.match(/{{[A-Z0-9_]+}}/g);
  if (remainingPlaceholders) {
    console.warn(
      "Unreplaced placeholders found in invoice template:",
      remainingPlaceholders
    );
  }
  console.timeEnd("Inject Generic Invoice Data");
  return injectedHtml;
}

function injectAppleData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Apple Invoice Data");
  let injectedHtml = htmlContent;

  // First, find any remaining placeholders to check if they have corresponding values
  const allPlaceholders = htmlContent.match(/{{[A-Z0-9_]+}}/g) || [];
  const placeholderSet = new Set(
    allPlaceholders.map((p) => p.substring(2, p.length - 2))
  );

  // Log all placeholders found in the template
  console.log("All placeholders in template:", Array.from(placeholderSet));

  // Check which placeholders don't have values in templateData
  const missingPlaceholders = Array.from(placeholderSet).filter(
    (p) => !(p in templateData)
  );
  if (missingPlaceholders.length > 0) {
    console.warn("Placeholders without values:", missingPlaceholders);
  }

  // Handle all placeholders with careful error handling
  for (const key in templateData) {
    const placeholder = `{{${key}}}`;
    const regex = new RegExp(
      placeholder.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
      "g"
    );
    const replacementValue = String(templateData[key] ?? "");

    // Log important information about each placeholder
    if (key.includes("_1") || key.includes("_2") || key.includes("_3")) {
      // console.log(
      //   `Injecting split value ${key} with value: "${replacementValue}"`
      // );
    }

    // Replace the placeholder with its value
    injectedHtml = injectedHtml.replace(regex, replacementValue);
  }

  // Check for any remaining placeholders after injection
  const remainingPlaceholders = injectedHtml.match(/{{[A-Z0-9_]+}}/g);
  if (remainingPlaceholders) {
    console.warn(
      "Unreplaced placeholders found in Apple template:",
      remainingPlaceholders
    );
  }

  console.timeEnd("Inject Apple Invoice Data");
  return injectedHtml;
}

export function injectData(
  template: string,
  htmlContent: string,
  templateData: TemplateData
): string {
  // Use template-specific injector if available
  if (template === "apple") {
    return injectAppleData(htmlContent, templateData);
  }

  // Fall back to generic injector
  return injectGenericData(htmlContent, templateData);
}
