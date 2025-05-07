"use client";

import { useEffect } from "react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Download } from "lucide-react";
import { useReceiptStore } from "@/lib/store";
import GucciLondonReceiptForm from "./forms/gucci-receipt-form";
import GucciNycReceiptForm from "./forms/gucci-nyc-receipt-form";
import SephoraReceiptForm from "./forms/sephora-receipt-form";
import AppleReceiptForm from "./forms/apple-receipt-form";
import DysonReceiptForm from "./forms/dyson-receipt-form";
import FlightClubReceiptForm from "./forms/flight_club-receipt-form";
import FlannelsReceiptForm from "./forms/flannels-receipt-form";
import StussyReceiptForm from "./forms/stussy-receipt-form";
import LVReceiptForm from "./forms/lv-receipt-form";
import BalenciagaReceiptForm from "./forms/balenciaga-receipt-form";
import SamsungReceiptForm from "./forms/samsung-receipt-form";
import AdidasReceiptForm from "./forms/adidas-receipt-form";
import FootLockerReceiptForm from "./forms/foot_locker-receipt-form";
import ThreeUkReceiptForm from "./forms/three_uk-receipt-form";
import GoyardReceiptForm from "./forms/goyard-receipt-form";
import { templates } from "@/lib/templates";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ReceiptFormProps {
  templateId: string;
}

type ReceiptFormComponent = () => React.ReactElement;
type ReceiptFormMapping = Record<string, ReceiptFormComponent>;

const RECEIPT_FORM_COMPONENTS: ReceiptFormMapping = {
  gucci: GucciLondonReceiptForm,
  gucci_nyc: GucciNycReceiptForm,
  sephora: SephoraReceiptForm,
  apple: AppleReceiptForm,
  dyson: DysonReceiptForm,
  flight_club: FlightClubReceiptForm,
  flannels: FlannelsReceiptForm,
  stussy: StussyReceiptForm,
  lv: LVReceiptForm,
  balenciaga: BalenciagaReceiptForm,
  samsung: SamsungReceiptForm,
  adidas: AdidasReceiptForm,
  foot_locker: FootLockerReceiptForm,
  three_uk: ThreeUkReceiptForm,
  goyard: GoyardReceiptForm,
};

export default function ReceiptForm({ templateId }: ReceiptFormProps) {
  const {
    selectTemplate,
    selectReceiptType,
    selectedTemplate,
    selectedReceiptType,
    generateReceiptImage,
    isGenerating,
  } = useReceiptStore();

  useEffect(() => {
    if (templateId) {
      selectTemplate(templateId);

      // Set default receipt type if available
      const template = templates[templateId];
      if (template?.receipts?.length > 0) {
        selectReceiptType(template.receipts[0].id);
      }
    }
  }, [templateId, selectTemplate, selectReceiptType]);

  const handleReceiptTypeChange = (value: string) => {
    selectReceiptType(value);
    // Don't automatically generate image when switching receipt type
    // Image will be generated when user clicks the "Update Preview" button
  };

  const handleUpdatePreview = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    generateReceiptImage();
  };

  const handleDownloadImage = async () => {
    const { receiptImageUrl, selectedReceiptType } = useReceiptStore.getState();
    const url = receiptImageUrl || `/app/receipts-previews/${templateId}.png`;
    const downloadFileName = selectedReceiptType || templateId;

    try {
      if (!url.startsWith("blob:")) {
        const response = await fetch(url, { method: "HEAD" });
        if (!response.ok) {
          alert("Receipt preview is not available for download.");
          return;
        }
      }

      const link = document.createElement("a");
      link.href = url;
      link.download = `${downloadFileName}-receipt.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      alert("An error occurred while downloading the receipt.");
    }
  };

  // Get current template's available receipt types
  const receiptOptions = templates[selectedTemplate]?.receipts || [];
  const hasMultipleReceiptOptions = receiptOptions.length > 1;

  // Determine which form to render based on receipt type or template
  const receiptKey = selectedReceiptType || selectedTemplate;
  const ReceiptFormComponent = RECEIPT_FORM_COMPONENTS[receiptKey];

  return (
    <Card className="w-full mx-auto relative">
      <CardHeader>
        <CardTitle>
          {templateId.charAt(0).toUpperCase() + templateId.slice(1)} Receipt
          Details
        </CardTitle>
        <CardDescription>
          Enter the information for your receipt
        </CardDescription>
      </CardHeader>

      {hasMultipleReceiptOptions && (
        <div className="px-6 pt-0 pb-6 mb-2">
          <div className="flex flex-col items-start gap-2">
            <div className="text-sm font-medium text-muted-foreground">
              Select Receipt Region:
            </div>
            <div style={{ width: "240px" }}>
              <Select
                value={selectedReceiptType}
                onValueChange={handleReceiptTypeChange}
              >
                <SelectTrigger className="bg-muted/40">
                  <SelectValue placeholder="Select receipt type" />
                </SelectTrigger>
                <SelectContent>
                  {receiptOptions.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      <CardContent className="relative">
        <form
          id="receipt-form-id"
          onSubmit={handleUpdatePreview}
          className="space-y-4 w-full"
        >
          {ReceiptFormComponent && <ReceiptFormComponent />}

          <div className="sticky bottom-4 right-4 float-right mt-6">
            <Button
              type="submit"
              disabled={isGenerating}
              className="rounded-md shadow-lg flex items-center gap-2 bg-brand-purple hover:bg-brand-purple/90 py-2"
            >
              <RefreshCw
                className={`h-4 w-4 ${isGenerating ? "animate-spin" : ""}`}
              />
              <span>{isGenerating ? "Updating..." : "Update Preview"}</span>
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleDownloadImage}
          className="w-full"
          variant="outline"
        >
          <Download className="h-4 w-4 mr-2" />
          Download Receipt Image
        </Button>
      </CardFooter>
    </Card>
  );
}
