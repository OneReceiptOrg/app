import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { protectApiRoute } from "@/lib/auth/api-auth";
import {
  getTemplateConfig,
  loadTemplateHtml,
} from "@/lib/generator/invoice/templateLoader";
import { injectData } from "@/lib/generator/invoice/dataInjector";
import { inlineAssets } from "@/lib/generator/invoice/assetHandler";
import { getCluster, RenderTaskData } from "@/lib/utils/cluster-service";

export async function POST(request: NextRequest) {
  const requestStartTime = performance.now();
  console.log({
    rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`,
  });

  const cookieStore = await cookies();
  const authResult = await protectApiRoute(cookieStore);

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  try {
    console.time("Request Handling Total");

    console.time("Parse Request Body");
    let parsedBody: any;
    try {
      parsedBody = await request.json();
    } catch (jsonError) {
      console.error("Failed to parse request body as JSON:", jsonError);
      try {
        const rawBody = await request.text();
        console.error(
          "Raw request body received:",
          rawBody.substring(0, 500) + "..."
        );
      } catch (textError) {
        console.error("Failed to read request body as text either:", textError);
      }
      return NextResponse.json(
        { error: "Invalid JSON received in request body" },
        { status: 400 }
      );
    }
    const { template = "default", templateId, ...templateData } = parsedBody;
    console.log(`\n--- New Invoice Request (${template} Template) ---`);
    console.timeEnd("Parse Request Body");

    console.time("Get Template Config");
    const templateConfig = getTemplateConfig(template, templateId);
    if (!templateConfig) {
      console.error(`Invalid template name received: ${template}`);
      return NextResponse.json(
        {
          error: "Invalid template specified",
          details: `Template '${template}' is not supported.`,
        },
        { status: 400 }
      );
    }
    console.timeEnd("Get Template Config");

    console.time("Load HTML Template");
    let htmlContent = await loadTemplateHtml(template, templateConfig);
    console.timeEnd("Load HTML Template");

    console.time("Inject Data");
    htmlContent = injectData(templateId || template, htmlContent, templateData);
    console.timeEnd("Inject Data");

    console.time("Inline Assets");
    htmlContent = await inlineAssets(template, htmlContent);
    console.timeEnd("Inline Assets");

    console.time("Get Cluster");
    const cluster = await getCluster();
    console.timeEnd("Get Cluster");

    console.time("Generate PDF");
    const taskData: RenderTaskData = {
      html: htmlContent,
      selector: templateConfig.selector || "",
      template: templateId || template,
      type: "pdf",
    };

    const pdfBuffer = await cluster.execute(taskData);
    console.timeEnd("Generate PDF");

    console.time("Construct Response");
    const response = new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
    console.timeEnd("Construct Response");

    const requestEndTime = performance.now();
    console.log(
      `Request processed successfully in ${(
        requestEndTime - requestStartTime
      ).toFixed(2)} ms`
    );
    console.timeEnd("Request Handling Total");
    console.log({
      rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`,
    });
    console.log("--- Request Complete ---");
    return response;
  } catch (error) {
    const requestEndTime = performance.now();
    console.error("Error during PDF generation route:", error);
    console.log(
      `Request FAILED after ${(requestEndTime - requestStartTime).toFixed(
        2
      )} ms`
    );
    console.log({
      rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`,
    });
    console.log("--- Request Failed ---");
    return NextResponse.json(
      {
        error: "Failed to generate PDF",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
