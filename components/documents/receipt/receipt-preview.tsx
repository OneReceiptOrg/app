"use client";

import { useEffect, useRef, useState } from "react";
import { useReceiptStore } from "@/lib/store";
import { AlertTriangle, Loader } from "lucide-react";
import Link from "next/link";

interface ReceiptPreviewProps {
  templateId: string;
  initialImageUrl: string;
}

export default function ReceiptPreview({
  templateId,
  initialImageUrl,
}: ReceiptPreviewProps) {
  const {
    receiptImageUrl,
    isGenerating,
    generationError,
    generateReceiptImage,
    selectedReceiptType,
    selectedTemplate,
  } = useReceiptStore();

  const [validatedUrl, setValidatedUrl] = useState<string | null>(
    initialImageUrl
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  const generationCount = useRef(0);
  const lastReceiptType = useRef(selectedReceiptType);

  const [isInitialLoading, setIsInitialLoading] = useState(!!initialImageUrl);

  // Reset to initialImageUrl when component mounts or templateId changes
  useEffect(() => {
    setValidatedUrl(initialImageUrl);
    setImageLoaded(false);
    setIsInitialLoading(true);
    generationCount.current = 0;
  }, [templateId, initialImageUrl]);

  // Monitor receipt type changes and show default image
  useEffect(() => {
    // If receipt type changed, revert to default preview
    if (selectedReceiptType !== lastReceiptType.current) {
      // Build appropriate default preview URL based on receipt type or template
      const previewKey = selectedReceiptType || selectedTemplate;
      const defaultUrl = `/app/receipts-previews/${previewKey}.png`;

      setValidatedUrl(defaultUrl);
      setImageLoaded(false);
      setIsInitialLoading(true);

      lastReceiptType.current = selectedReceiptType;
    }
  }, [selectedReceiptType, selectedTemplate]);

  useEffect(() => {
    if (isGenerating) {
      if (generationCount.current > 0) {
        generationCount.current++;
      }
    }
  }, [isGenerating]);

  useEffect(() => {
    if (receiptImageUrl && !isGenerating) {
      setValidatedUrl(receiptImageUrl);
    } else if (!receiptImageUrl && !isGenerating && !validatedUrl) {
      // If no receipt image URL and not generating, show default image
      const previewKey = selectedReceiptType || selectedTemplate;
      const defaultUrl = `/app/receipts-previews/${previewKey}.png`;
      setValidatedUrl(defaultUrl);
    }
  }, [
    receiptImageUrl,
    isGenerating,
    selectedReceiptType,
    selectedTemplate,
    validatedUrl,
  ]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setIsInitialLoading(false);
  };

  const handleImageError = () => {
    console.error("Failed to load image from URL:", validatedUrl);

    // If specific receipt type image fails, try to load the base template image
    if (selectedReceiptType && validatedUrl?.includes(selectedReceiptType)) {
      const fallbackUrl = `/app/receipts-previews/${selectedTemplate}.png`;
      console.log("Trying fallback image:", fallbackUrl);
      setValidatedUrl(fallbackUrl);
    } else {
      setImageLoaded(false);
      setIsInitialLoading(false);
      setValidatedUrl(null);
    }
  };

  return (
    <div className="w-full">
      {/* Rate Limit Error - Show this at the top */}
      {generationError &&
        !isGenerating &&
        typeof generationError === "string" &&
        (generationError.includes("rate limit") ||
          generationError.includes("maximum limit")) && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 mx-auto max-w-2xl">
            <div className="flex items-center gap-2 mb-2 text-red-600">
              <AlertTriangle className="w-5 h-5" />
              <p className="font-medium">Receipt Generation Limited</p>
            </div>
            <p className="text-sm text-gray-700">{generationError}</p>
            {/* <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Link 
              href="https://discord.gg/receiptly" 
              target="_blank"
              className="text-sm px-4 py-2 bg-brand-purple text-white rounded-md hover:bg-brand-purple/90"
            >
              Join Discord for Premium Access
            </Link>
          </div> */}
          </div>
        )}

      {validatedUrl && (
        <div className="w-full flex justify-center relative">
          <div className="bg-white inline-block">
            <img
              src={validatedUrl}
              alt="Receipt Preview"
              className={`transition-opacity duration-300 ${
                isGenerating ? "opacity-40" : "opacity-100"
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </div>

          {isGenerating && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow">
                <Loader className="h-4 w-4 text-gray-700 animate-spin" />
                <span className="text-sm text-gray-700 font-medium">
                  {generationCount.current > 1
                    ? "Updating..."
                    : "Generating..."}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {isInitialLoading && !imageLoaded && !generationError && (
        <div className="flex items-center justify-center gap-2 text-gray-500 min-h-[200px] py-12">
          <Loader className="w-4 h-4 animate-spin" />
          <p className="text-sm">Loading Preview...</p>
        </div>
      )}

      {/* General Error - Only show if it's not a rate limit error */}
      {(generationError ||
        (!validatedUrl && !isInitialLoading && !isGenerating)) &&
        !isGenerating &&
        (typeof generationError !== "string" ||
          (!generationError.includes("rate limit") &&
            !generationError.includes("maximum limit"))) && (
          <div className="text-center min-h-[200px] py-12 flex flex-col items-center justify-center mx-auto max-w-2xl">
            <div className="flex items-center gap-2 mb-2 text-red-600">
              <AlertTriangle className="w-5 h-5" />
              <p className="font-medium">Failed to generate receipt preview</p>
            </div>
            <p className="text-sm text-gray-600 mb-4 max-w-md">
              {generationError
                ? typeof generationError === "string"
                  ? generationError
                  : "An unknown error occurred during generation."
                : "Could not load the receipt preview image."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => generateReceiptImage()}
                className="text-sm px-4 py-2 bg-brand-purple text-white rounded-md hover:bg-brand-purple/90"
              >
                Try Again
              </button>
              <Link
                href="https://discord.gg/receiptly"
                target="_blank"
                className="text-sm px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Get Help on Discord
              </Link>
            </div>
          </div>
        )}
    </div>
  );
}
