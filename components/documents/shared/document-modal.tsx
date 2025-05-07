"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReceiptText, FileText } from "lucide-react";
import ReceiptForm from "../receipt/receipt-form";
import ReceiptPreview from "../receipt/receipt-preview";
import InvoiceForm from "@/components/documents/invoice/invoice-form";
import InvoicePreview from "@/components/documents/invoice/invoice-preview";
import Image from "next/image";
import { Template } from "@/lib/types";

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: Template;
}

export default function DocumentModal({
  isOpen,
  onClose,
  template,
}: DocumentModalProps) {
  const hasReceipt = template.receipts.length > 0;
  const hasInvoice = template.invoices.length > 0;

  // Default to the first available tab
  const initialTab = hasReceipt
    ? "receipt"
    : hasInvoice
    ? "invoice"
    : "receipt";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Update active tab if availability changes
  useEffect(() => {
    if (!hasReceipt && activeTab === "receipt") {
      if (hasInvoice) setActiveTab("invoice");
    }
    if (!hasInvoice && activeTab === "invoice") {
      if (hasReceipt) setActiveTab("receipt");
    }
  }, [hasReceipt, hasInvoice, activeTab]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] overflow-hidden flex flex-col">
        <DialogHeader className="pb-2 mb-1">
          <DialogTitle className="flex items-center gap-2">
            <Image
              src={`/app${template.logoUrl}`}
              alt={template.name}
              className="h-5 w-auto object-contain"
              width={20}
              height={20}
            />
            <span>{template.name}</span>
          </DialogTitle>
          <DialogDescription>
            Generate {hasReceipt ? "receipts" : ""}
            {hasReceipt && hasInvoice ? " and " : ""}
            {hasInvoice ? "invoices" : ""} for {template.name}
          </DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue={initialTab}
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-grow flex flex-col overflow-hidden"
        >
          <TabsList
            className={`mx-1 mb-4 ${
              hasReceipt && hasInvoice ? "grid grid-cols-2" : ""
            } bg-muted/50`}
          >
            {hasReceipt && (
              <TabsTrigger
                value="receipt"
                onClick={() => setActiveTab("receipt")}
                className="flex items-center justify-center gap-1.5"
              >
                <ReceiptText className="h-4 w-4" />
                <span>Receipt</span>
              </TabsTrigger>
            )}
            {hasInvoice && (
              <TabsTrigger
                value="invoice"
                onClick={() => setActiveTab("invoice")}
                className="flex items-center justify-center gap-1.5"
              >
                <FileText className="h-4 w-4" />
                <span>Invoice</span>
              </TabsTrigger>
            )}
          </TabsList>

          {hasReceipt && (
            <TabsContent
              value="receipt"
              className="flex-grow data-[state=active]:flex flex-col"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 flex-grow min-h-0">
                <div className="overflow-y-auto pr-2 md:col-span-3 max-h-[calc(90vh-12rem)]">
                  <ReceiptForm templateId={template.id} />
                </div>

                <div className="md:col-span-2 bg-slate-50 rounded-lg shadow-inner max-h-[calc(90vh-12rem)] overflow-y-auto">
                  <div className="p-4 flex justify-center">
                    <ReceiptPreview
                      templateId={template.id}
                      initialImageUrl={`/app/receipts-previews/${template.id}.png`}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          )}

          {hasInvoice && (
            <TabsContent
              value="invoice"
              className="flex-grow data-[state=active]:flex flex-col"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow min-h-0">
                <div className="overflow-y-auto pr-2 max-h-[calc(90vh-12rem)]">
                  <InvoiceForm brandId={template.id} />
                </div>
                <div className="bg-slate-50 rounded-lg shadow-inner max-h-[calc(90vh-12rem)] overflow-hidden">
                  <div className="h-full">
                    <InvoicePreview brandId={template.id} />
                  </div>
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
