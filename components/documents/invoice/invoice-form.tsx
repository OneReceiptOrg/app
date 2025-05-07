"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInvoiceStore } from "@/lib/store";
import { useEffect, useState } from "react";
import type { Item } from "@/lib/store";
import GucciInvoiceFields from "./forms/gucci-form";
import FarfetchInvoiceFields from "./forms/farfetch-form";
import { Download, RefreshCw } from "lucide-react";
import CPInvoiceFields from "./forms/cp-form";
import { templates } from "@/lib/templates";
import AppleInvoiceForm from "./forms/apple-form";
import SaintLaurentInvoiceForm from "./forms/saint_laurent-form";

interface InvoiceFormProps {
  brandId?: string;
}

export default function InvoiceForm({ brandId }: InvoiceFormProps) {
  const {
    // addInvoiceItem,
    // updateInvoiceItem,
    // removeInvoiceItem,
    // invoiceItems,
    updateInvoicePreview,
    generatedInvoicePreviewUrl,
    isGeneratingPreview,
    calculateTotals,
  } = useInvoiceStore();

  // Get the default templateId for this brand
  const [templateId, setTemplateId] = useState<string | undefined>();

  useEffect(() => {
    if (brandId) {
      calculateTotals(brandId);

      // Find the first available template for this brand
      const brandTemplate = templates[brandId];
      if (brandTemplate && brandTemplate.invoices.length > 0) {
        setTemplateId(brandTemplate.invoices[0].id);
      } else {
        setTemplateId(undefined);
      }
    }
  }, [brandId, calculateTotals]);

  // const handleAddItem = () => {
  //   addInvoiceItem({});
  // };

  const handleUpdatePreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    calculateTotals(brandId);
    updateInvoicePreview(brandId, templateId);
  };

  const handleDownloadExistingPdf = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (generatedInvoicePreviewUrl) {
      const link = document.createElement("a");
      link.href = generatedInvoicePreviewUrl;
      link.download = `${brandId || "invoice"}-invoice.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // const handleItemChange = (index: number, updatedItem: Partial<Item>) => {
  //   const currentItem = invoiceItems[index];
  //   const mergedItem = { ...currentItem, ...updatedItem } as Item;

  //   if (
  //     updatedItem.price !== undefined ||
  //     updatedItem.quantity !== undefined ||
  //     updatedItem.vatRate !== undefined ||
  //     updatedItem.discountAmount !== undefined
  //   ) {
  //     const price = mergedItem.price || 0;
  //     const quantity = mergedItem.quantity || 1;
  //     const vatRate = mergedItem.vatRate || 0;
  //     mergedItem.lineTotal = price * quantity; // lineTotal is Excl. VAT
  //     mergedItem.totalPriceInclVat = mergedItem.lineTotal * (1 + vatRate / 100);
  //   }

  //   // updateInvoiceItem(index, mergedItem);
  //   calculateTotals(brandId);
  // };

  return (
    <Card className="w-full mx-auto relative">
      <CardHeader>
        <CardTitle>
          {brandId ? brandId.charAt(0).toUpperCase() + brandId.slice(1) : ""}{" "}
          Invoice Details
        </CardTitle>
        <CardDescription>
          Fill in the details for the {brandId} invoice.
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <form id="invoice-form-id" className="space-y-4 w-full">
          {/* Conditional Rendering for Brand Specific Fields */}
          {brandId === "gucci" && <GucciInvoiceFields />}
          {brandId === "farfetch" && <FarfetchInvoiceFields />}
          {brandId === "cpcompany" && <CPInvoiceFields />}
          {brandId === "apple" && <AppleInvoiceForm />}
          {brandId === "saint_laurent" && <SaintLaurentInvoiceForm />}
          <div className="sticky bottom-4 right-4 float-right mt-6 z-10">
            <Button
              type="button"
              onClick={handleUpdatePreview}
              disabled={isGeneratingPreview}
              className="rounded-md shadow-lg flex items-center gap-2 bg-brand-purple hover:bg-brand-purple/90 py-2"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  isGeneratingPreview ? "animate-spin" : ""
                }`}
              />
              <span>
                {isGeneratingPreview ? "Updating..." : "Update Preview"}
              </span>
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="button"
          onClick={handleDownloadExistingPdf}
          disabled={!generatedInvoicePreviewUrl || isGeneratingPreview}
          className="w-full"
          variant="outline"
        >
          <Download className="h-4 w-4 mr-2" />
          Download Invoice (PDF)
        </Button>
      </CardFooter>
    </Card>
  );
}
