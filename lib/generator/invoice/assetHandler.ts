import path from "path";
import fs from "fs/promises";

export async function inlineAssets(template: string, htmlContent: string): Promise<string> {
    console.log(`Invoice asset handler called for template: ${template}. Currently no specific inlining is performed.`);
    return htmlContent;
} 