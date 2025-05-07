"use client";

import { AlertTriangle, Loader } from "lucide-react";
import { useInvoiceStore } from "@/lib/store";
import { useEffect, useState, useRef } from "react";

interface InvoicePreviewProps {
  brandId?: string;
}

export default function InvoicePreview({ brandId }: InvoicePreviewProps) {
  const {
    generatedInvoicePreviewUrl,
    currentPreviewBrand,
    isGeneratingPreview,
    resetGeneratedInvoiceUrl,
  } = useInvoiceStore();

  const [defaultPreviewUrl, setDefaultPreviewUrl] = useState(() => {
    if (brandId) {
      return `/app/invoice-previews/${brandId}.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=175`;
    }
    return "";
  });

  const generatedUrlRef = useRef(generatedInvoicePreviewUrl);
  const brandIdRef = useRef(brandId);

  useEffect(() => {
    if (brandId !== brandIdRef.current) {
      const cacheBuster = Date.now();
      setDefaultPreviewUrl(
        `/app/invoice-previews/${brandId}.pdf?t=${cacheBuster}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=175`
      );
      brandIdRef.current = brandId;
    }
  }, [brandId]);

  useEffect(() => {
    generatedUrlRef.current = generatedInvoicePreviewUrl;
  }, [generatedInvoicePreviewUrl]);

  useEffect(() => {
    if (currentPreviewBrand && currentPreviewBrand !== brandId) {
      resetGeneratedInvoiceUrl();
    }

    return () => {
      if (brandId === currentPreviewBrand) {
        resetGeneratedInvoiceUrl();
      }
    };
  }, [brandId, currentPreviewBrand, resetGeneratedInvoiceUrl]);

  const shouldShowGenerated =
    generatedInvoicePreviewUrl && currentPreviewBrand === brandId;

  const getDisplayUrl = () => {
    if (shouldShowGenerated && generatedInvoicePreviewUrl) {
      return `${generatedInvoicePreviewUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=175`;
    }

    if (brandId) {
      return defaultPreviewUrl;
    }

    return null;
  };

  const displayUrl = getDisplayUrl();

  const iframeKey = shouldShowGenerated
    ? `generated-${currentPreviewBrand}`
    : `default-${brandId}`;

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="bg-white rounded-lg border shadow-lg w-full h-[92vh] max-w-5xl relative overflow-hidden select-none">
        {isGeneratingPreview && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
            <Loader className="h-8 w-8 text-gray-700 animate-spin" />
            <span className="ml-3 text-md text-gray-700 font-medium">
              Generating preview...
            </span>
          </div>
        )}

        {displayUrl ? (
          <iframe
            key={iframeKey}
            src={displayUrl}
            title={`${brandId || "Invoice"} Preview`}
            className="w-full h-full border-0"
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          />
        ) : (
          !isGeneratingPreview && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
              <AlertTriangle className="h-8 w-8 text-orange-400 mb-2" />
              <span className="text-sm text-gray-600 text-center px-4">
                No preview generated yet.
                <br />
                Click 'Update Preview' to generate one.
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
