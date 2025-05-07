import fs from "fs/promises";
import path from "path";
import { escapeRegex } from "./utils";

async function inlineGucciAssets(htmlContent: string): Promise<string> {
    console.time("Handle Assets for gucci Template");
    const assetsDir = path.join(process.cwd(), "templates", "receipts", "gucci"); 
    let updatedHtml = htmlContent;

    try {
        const fontPath = path.join(assetsDir, "fonts", "yuditjb.ttf");
        const fontBuffer = await fs.readFile(fontPath);
        const fontBase64 = fontBuffer.toString("base64");
        const fontDataUri = `data:font/ttf;base64,${fontBase64}`;

        const gucciImagePath = path.join(assetsDir, "images", "gucci.png");
        const gucciImageBuffer = await fs.readFile(gucciImagePath);
        const gucciImageBase64 = gucciImageBuffer.toString("base64");
        const gucciImageDataUri = `data:image/png;base64,${gucciImageBase64}`;

        const endingImagePath = path.join(assetsDir, "images", "ending.png");
        const endingImageBuffer = await fs.readFile(endingImagePath);
        const endingImageBase64 = endingImageBuffer.toString("base64");
        const endingImageDataUri = `data:image/png;base64,${endingImageBase64}`;

        const oldFontUrlRelative = "./fonts/yuditjb.ttf";
        const fontRegexRelative = new RegExp(escapeRegex(oldFontUrlRelative), "g");
        updatedHtml = updatedHtml.replace(fontRegexRelative, fontDataUri);

        const oldGucciImageUrlAbs = "https://receiptly.cc/static/receipts/gucci/gucci/static/images/brand_icons/gucci.png";
        const gucciImageRegexAbs = new RegExp(escapeRegex(oldGucciImageUrlAbs), "g");
        updatedHtml = updatedHtml.replace(gucciImageRegexAbs, gucciImageDataUri);
        const oldGucciImageUrlRel = "./images/gucci.png";
        const gucciImageRegexRel = new RegExp(escapeRegex(oldGucciImageUrlRel), "g");
        updatedHtml = updatedHtml.replace(gucciImageRegexRel, gucciImageDataUri);


        const oldEndingImageUrlAbs = "https://receiptly.cc/static/receipts/gucci/gucci/static/images/brand_icons/ending.png";
        const endingImageRegexAbs = new RegExp(escapeRegex(oldEndingImageUrlAbs), "g");
        updatedHtml = updatedHtml.replace(endingImageRegexAbs, endingImageDataUri);
        const oldEndingImageUrlRel = "./images/ending.png";
        const endingImageRegexRel = new RegExp(escapeRegex(oldEndingImageUrlRel), "g");
        updatedHtml = updatedHtml.replace(endingImageRegexRel, endingImageDataUri);


        console.log("Gucci assets inlined successfully");
    } catch (assetError) {
        console.error("Error reading or encoding Gucci assets:", assetError);
        throw new Error(`Failed to process assets for Gucci template: ${assetError instanceof Error ? assetError.message : String(assetError)}`);
    }
    console.timeEnd("Handle Assets for gucci Template");
    return updatedHtml;
}

async function inlineAppleAssets(htmlContent: string): Promise<string> {
    console.time("Handle Assets for apple Template");
    const assetsDir = path.join(process.cwd(), "templates", "receipts", "apple"); 
    let updatedHtml = htmlContent;

    try {
        const biryaniPath = path.join(assetsDir, "fonts", "Biryani-Regular.ttf");
        let biryaniDataUri = "";
        try {
            const biryaniBuffer = await fs.readFile(biryaniPath);
            const biryaniBase64 = biryaniBuffer.toString("base64");
            biryaniDataUri = `data:font/ttf;base64,${biryaniBase64}`;
            updatedHtml = updatedHtml.replace(/https:\/\/fonts\.googleapis\.com\/css\?family=Biryani:200,300,regular/g, biryaniDataUri);
        } catch (fontError) {
            console.warn(`Could not read Biryani font file for Apple: ${fontError}`);
        }

        const imageFiles = ["sloi_1.png", "sloi_2.jpg", "sloi_3.jpg", "sloi_4.jpg", "sloi_5.jpg", "sloi_6.jpg", "sloi_7.jpg"];
        for (const imageFile of imageFiles) {
            try {
                const imagePath = path.join(assetsDir, "images", imageFile);
                const imageBuffer = await fs.readFile(imagePath);
                const imageBase64 = imageBuffer.toString("base64");
                const mimeType = imageFile.endsWith(".png") ? "image/png" : "image/jpeg";
                const imageDataUri = `data:${mimeType};base64,${imageBase64}`;

                const imageRegexAbs = new RegExp(escapeRegex(`/static/receipts/apple/images/${imageFile}`), "g");
                updatedHtml = updatedHtml.replace(imageRegexAbs, imageDataUri);
                const imageRegexRel = new RegExp(escapeRegex(`./images/${imageFile}`), "g");
                updatedHtml = updatedHtml.replace(imageRegexRel, imageDataUri);

            } catch (imgError) {
                console.warn(`Could not read image file ${imageFile} for Apple: ${imgError}`);
            }
        }

        updatedHtml = updatedHtml.replace(/<base href=["'].*?["']>/, "");

        console.log("Apple assets inlined successfully");
    } catch (assetError) {
        console.error("Error inlining Apple assets:", assetError);
        throw new Error(`Failed to process Apple assets: ${assetError instanceof Error ? assetError.message : String(assetError)}`);
    }
    console.timeEnd("Handle Assets for apple Template");
    return updatedHtml;
}

async function inlineDysonAssets(htmlContent: string): Promise<string> {
    console.time("Handle Assets for dyson Template");
    const assetsDir = path.join(process.cwd(), "templates", "receipts", "dyson"); 
    let updatedHtml = htmlContent;

    try {
        try {
            const fontPath = path.join(assetsDir, "fonts", "ascender.ttf");
            const fontBuffer = await fs.readFile(fontPath);
            const fontBase64 = fontBuffer.toString("base64");
            const fontDataUri = `data:font/ttf;base64,${fontBase64}`;
            updatedHtml = updatedHtml.replace(/url\(['"]?.*?ascender\.ttf['"]?\)/g, `url('${fontDataUri}')`);
        } catch (fontError) {
            console.warn(`Could not read Dyson font file: ${fontError}`);
        }

        try {
            const dysonLogoPath = path.join(assetsDir, "images", "brand_icons", "dyson.png");
            const dysonLogoBuffer = await fs.readFile(dysonLogoPath);
            const dysonLogoBase64 = dysonLogoBuffer.toString("base64");
            const dysonLogoDataUri = `data:image/png;base64,${dysonLogoBase64}`;
            updatedHtml = updatedHtml.replace(/src=["'].*?dyson\.png["']/g, `src="${dysonLogoDataUri}"`);
        } catch (logoError) {
            console.warn(`Could not read Dyson logo file: ${logoError}`);
        }

        try {
            const cssPath = path.join(assetsDir, "static", "css", "style.css");
            const cssBuffer = await fs.readFile(cssPath);
            const cssBase64 = cssBuffer.toString("base64");
            const cssDataUri = `data:text/css;base64,${cssBase64}`;
            updatedHtml = updatedHtml.replace(/href=["'].*?style\.css["']/g, `href="${cssDataUri}"`);
        } catch (cssError) {
            console.warn(`Could not read Dyson CSS file: ${cssError}`);
        }

        updatedHtml = updatedHtml.replace(/<base href=["'].*?["']>/, "");

        console.log("Dyson assets inlined successfully");
    } catch (assetError) {
        console.error("Error inlining Dyson assets:", assetError);
        throw new Error(`Failed to process Dyson assets: ${assetError instanceof Error ? assetError.message : String(assetError)}`);
    }
    console.timeEnd("Handle Assets for dyson Template");
    return updatedHtml;
}

async function inlineFlightClubAssets(htmlContent: string): Promise<string> {
    console.time("Handle Assets for flight_club Template");
    const assetsDir = path.join(process.cwd(), "templates", "receipts", "flight_club"); 
    let updatedHtml = htmlContent;

    try {
        try {
            const logoImagePath = path.join(assetsDir, "images", "sloi_1.png");
            const logoImageBuffer = await fs.readFile(logoImagePath);
            const logoImageBase64 = logoImageBuffer.toString("base64");
            const logoImageDataUri = `data:image/png;base64,${logoImageBase64}`;
            updatedHtml = updatedHtml.replace(/src=["'].*?sloi_1\.png["']/g, `src="${logoImageDataUri}"`);
        } catch (logoError) {
            console.warn(`Could not read Flight Club logo file: ${logoError}`);
        }

        try {
            const backgroundImagePath = path.join(assetsDir, "images", "background.jpg");
            const backgroundImageBuffer = await fs.readFile(backgroundImagePath);
            const backgroundImageBase64 = backgroundImageBuffer.toString("base64");
            const backgroundImageDataUri = `data:image/jpeg;base64,${backgroundImageBase64}`;
            updatedHtml = updatedHtml.replace(/url\(['"]?.*?background\.jpg['"]?\)/g, `url(${backgroundImageDataUri})`);
        } catch (bgError) {
            console.warn(`Could not read Flight Club background image: ${bgError}`);
        }

        updatedHtml = updatedHtml.replace(/<base href=["'].*?["']>/, "");

        console.log("Flight Club assets inlined successfully");
    } catch (assetError) {
        console.error("Error inlining Flight Club assets:", assetError);
        throw new Error(`Failed to process Flight Club assets: ${assetError instanceof Error ? assetError.message : String(assetError)}`);
    }
    console.timeEnd("Handle Assets for flight_club Template");
    return updatedHtml;
}

async function inlineFlannelsAssets(htmlContent: string): Promise<string> {
    console.time("Handle Assets for flannels Template");
    const assetsDir = path.join(process.cwd(), "templates", "receipts", "flannels"); 
    let updatedHtml = htmlContent;

    try {
        try {
            const fontPath = path.join(assetsDir, "fonts", "MazinDEMO-Medium.otf");
            const fontBuffer = await fs.readFile(fontPath);
            const fontBase64 = fontBuffer.toString("base64");
            const fontDataUri = `data:font/otf;base64,${fontBase64}`;
            updatedHtml = updatedHtml.replace(/url\(['"]?.*?MazinDEMO-Medium\.otf['"]?\)/g, `url('${fontDataUri}')`);
        } catch (fontError) {
            console.warn(`Could not read Flannels font file: ${fontError}`);
        }

        const imageMap: Record<string, string> = {
            "flannels.png": "flannelsLogoDataUri",
            "ending.png": "endingImageDataUri",
            "qr.png": "qrImageDataUri"
        };

        for (const [filename, _varName] of Object.entries(imageMap)) {
            try {
                const imagePath = path.join(assetsDir, "images", filename);
                const imageBuffer = await fs.readFile(imagePath);
                const imageBase64 = imageBuffer.toString("base64");
                const imageDataUri = `data:image/png;base64,${imageBase64}`;
                const imageRegex = new RegExp(`src=["'].*?${escapeRegex(filename)}["']`, "g");
                updatedHtml = updatedHtml.replace(imageRegex, `src="${imageDataUri}"`);
            } catch (imgError) {
                console.warn(`Could not read Flannels image file ${filename}: ${imgError}`);
            }
        }

        updatedHtml = updatedHtml.replace(/<base href=["'].*?["']>/, "");

        console.log("Flannels assets inlined successfully");
    } catch (assetError) {
        console.error("Error inlining Flannels assets:", assetError);
        throw new Error(`Failed to process Flannels assets: ${assetError instanceof Error ? assetError.message : String(assetError)}`);
    }
    console.timeEnd("Handle Assets for flannels Template");
    return updatedHtml;
}

async function inlineStussyAssets(htmlContent: string): Promise<string> {
    console.time("Handle Assets for stussy Template");
    const assetsDir = path.join(process.cwd(), "templates", "receipts", "stussy"); 
    let updatedHtml = htmlContent;

    try {
        try {
            const fontPath = path.join(assetsDir, "fonts", "Vazir.ttf");
            const fontBuffer = await fs.readFile(fontPath);
            const fontBase64 = fontBuffer.toString("base64");
            const fontDataUri = `data:font/ttf;base64,${fontBase64}`;
             updatedHtml = updatedHtml.replace(/url\(['"]?.*?Vazir\.ttf['"]?\)/g, `url('${fontDataUri}')`);
        } catch (fontError) {
             console.warn(`Could not read Stussy font file: ${fontError}`);
        }

        const imageMap: Record<string, string> = {
            "stussy.png": "stussyLogoDataUri",
            "seperator.png": "separatorImageDataUri", 
            "qr.png": "qrImageDataUri"
        };

        for (const [filename, _varName] of Object.entries(imageMap)) {
            try {
                const imagePath = path.join(assetsDir, "images", filename);
                const imageBuffer = await fs.readFile(imagePath);
                const imageBase64 = imageBuffer.toString("base64");
                const imageDataUri = `data:image/png;base64,${imageBase64}`;
                const imageRegex = new RegExp(`src=["'].*?${escapeRegex(filename)}["']`, "g");
                updatedHtml = updatedHtml.replace(imageRegex, `src="${imageDataUri}"`);
            } catch (imgError) {
                console.warn(`Could not read Stussy image file ${filename}: ${imgError}`);
            }
        }

        updatedHtml = updatedHtml.replace(/<base href=["'].*?["']>/, "");

        console.log("Stussy assets inlined successfully");
    } catch (assetError) {
        console.error("Error inlining Stussy assets:", assetError);
        throw new Error(`Failed to process Stussy assets: ${assetError instanceof Error ? assetError.message : String(assetError)}`);
    }
    console.timeEnd("Handle Assets for stussy Template");
    return updatedHtml;
}

async function inlineBalenciagaAssets(htmlContent: string): Promise<string> {
    console.time("Handle Assets for balenciaga Template");
    const assetsDir = path.join(process.cwd(), "templates", "receipts", "balenciaga");
    let updatedHtml = htmlContent;

    try {
        const fontPath = path.join(assetsDir, "fonts", "yuditjb.ttf");
        const fontBuffer = await fs.readFile(fontPath);
        const fontBase64 = fontBuffer.toString("base64");
        const fontDataUri = `data:font/ttf;base64,${fontBase64}`;

        const balenciagaImagePath = path.join(assetsDir, "brand_icons", "balenciaga.png");
        const balenciagaImageBuffer = await fs.readFile(balenciagaImagePath);
        const balenciagaImageBase64 = balenciagaImageBuffer.toString("base64");
        const balenciagaImageDataUri = `data:image/png;base64,${balenciagaImageBase64}`;

        const endingImagePath = path.join(assetsDir, "brand_icons", "ending.png");
        const endingImageBuffer = await fs.readFile(endingImagePath);
        const endingImageBase64 = endingImageBuffer.toString("base64");
        const endingImageDataUri = `data:image/png;base64,${endingImageBase64}`;

        const oldFontUrlRelative = "./fonts/yuditjb.ttf";
        const fontRegexRelative = new RegExp(escapeRegex(oldFontUrlRelative), "g");
        updatedHtml = updatedHtml.replace(fontRegexRelative, fontDataUri);

        const oldFontUrlAbs = "https://receiptly.cc/static/receipts/balenciaga/balenciaga/static/fonts/yuditjb.ttf";
        const fontRegexAbs = new RegExp(escapeRegex(oldFontUrlAbs), "g");
        updatedHtml = updatedHtml.replace(fontRegexAbs, fontDataUri);

        const oldBalenciagaImageUrlExact = "https://receiptly.cc/static/receipts/balenciaga/balenciaga/static/images/brand_icons/balenciaga.png";
        const balenciagaImageRegexExact = new RegExp(escapeRegex(oldBalenciagaImageUrlExact), "g");
        updatedHtml = updatedHtml.replace(balenciagaImageRegexExact, balenciagaImageDataUri);
        
        const balenciagaImageRegexGeneric = /src=["'].*?balenciaga\.png["']/g;
        updatedHtml = updatedHtml.replace(balenciagaImageRegexGeneric, `src="${balenciagaImageDataUri}"`);

        const oldEndingImageUrlExact = "https://receiptly.cc/static/receipts/balenciaga/balenciaga/static/images/brand_icons/ending.png";
        const endingImageRegexExact = new RegExp(escapeRegex(oldEndingImageUrlExact), "g");
        updatedHtml = updatedHtml.replace(endingImageRegexExact, endingImageDataUri);
        
        const endingImageRegexGeneric = /src=["'].*?ending\.png["']/g;
        updatedHtml = updatedHtml.replace(endingImageRegexGeneric, `src="${endingImageDataUri}"`);

        const cssUrlAbs = "https://receiptly.cc/static/receipts/balenciaga/balenciaga/static/css/style.css";
        const cssRegexAbs = new RegExp(escapeRegex(cssUrlAbs), "g");
        
        try {
            const cssPath = path.join(assetsDir, "css", "style.css");
            const cssBuffer = await fs.readFile(cssPath);
            const cssBase64 = cssBuffer.toString("base64");
            const cssDataUri = `data:text/css;base64,${cssBase64}`;
            updatedHtml = updatedHtml.replace(cssRegexAbs, cssDataUri);
        } catch (cssError) {
            console.warn(`Could not read Balenciaga CSS file: ${cssError}`);
        }
        
        updatedHtml = updatedHtml.replace(/<base href=["'].*?["']>/, "");

        console.log("Balenciaga assets inlined successfully");
    } catch (assetError) {
        console.error("Error reading or encoding Balenciaga assets:", assetError);
        throw new Error(`Failed to process assets for Balenciaga template: ${assetError instanceof Error ? assetError.message : String(assetError)}`);
    }
    console.timeEnd("Handle Assets for balenciaga Template");
    return updatedHtml;
}

export async function inlineAssets(template: string, htmlContent: string): Promise<string> {
    console.time(`Inline Assets Total for ${template}`);
    try {
        switch (template) {
            case "gucci":
                return await inlineGucciAssets(htmlContent);
            case "sephora":
                 console.log("Sephora template - skipping asset inlining.");
                 return htmlContent;
            case "apple":
                return await inlineAppleAssets(htmlContent);
            case "dyson":
                return await inlineDysonAssets(htmlContent);
            case "flight_club":
                return await inlineFlightClubAssets(htmlContent);
            case "flannels":
                return await inlineFlannelsAssets(htmlContent);
            case "stussy":
                 return await inlineStussyAssets(htmlContent);
            case "balenciaga":
                return await inlineBalenciagaAssets(htmlContent);
            case "lv":
                console.log("Louis Vuitton template - skipping asset inlining.");
                return htmlContent;
            default:
                console.warn(`No asset inlining logic defined for template: ${template}`);
                return htmlContent;
        }
    } catch (error) {
         console.error(`Asset inlining failed for template ${template}:`, error);
         return htmlContent;
    } finally {
        console.timeEnd(`Inline Assets Total for ${template}`);
    }
} 