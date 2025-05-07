"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DocumentModal from "@/components/documents/shared/document-modal";
import { ArrowUpRight, Receipt, LucideIcon, FileText } from "lucide-react";
import { useReceiptStore } from "@/lib/store";
import { Badge } from "@/components/ui/badge";
import { Template } from "@/lib/types";

interface TemplateSelectorProps {
  templates: Template[];
}

export default function TemplateSelector({ templates }: TemplateSelectorProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );

  const handleCardClick = (template: Template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (selectedTemplate) {
      const currentImageUrl = useReceiptStore.getState().receiptImageUrl;
      if (currentImageUrl) {
        try {
          URL.revokeObjectURL(currentImageUrl);
        } catch (error) {
          console.error("Error revoking URL:", error);
        }
      }

      useReceiptStore.setState({
        receiptImageUrl: null,
        generationError: null,
        isGenerating: false,
      });
    }

    setIsModalOpen(false);
    setSelectedTemplate(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <div
            key={template.id}
            className="group relative cursor-pointer"
            onClick={() => handleCardClick(template)}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/[0.03] to-transparent rounded-lg"></div>

            <Card className="relative z-10 h-full overflow-hidden border-border/40 transition-all duration-300 flex flex-col group-hover:border-brand-purple/70 group-hover:shadow-[0_0_30px_rgba(116,77,228,0.05)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-purple/70 transition-all duration-300 group-hover:bg-brand-purple group-hover:shadow-[0_0_8px_rgba(116,77,228,0.5)]"></div>

              <CardHeader className="relative py-5 px-4 border-b border-border/30 flex flex-row items-center justify-between">
                <div className="z-10">
                  <div className="flex items-center space-x-2">
                    <div className="relative h-6 w-12">
                      <Image
                        src={`/app${template.logoUrl}`}
                        alt={`${template.name} Logo`}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <CardTitle className="text-base font-medium group-hover:text-brand-purple transition-colors duration-300">
                      {template.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xs mt-1">
                    {template.description}
                  </CardDescription>
                  <div className="flex space-x-2 mt-2">
                    {template.receipts.length > 0 && (
                      <Badge
                        variant="outline"
                        className="text-xs flex items-center gap-1 border-brand-purple/30 text-brand-purple"
                      >
                        <Receipt size={12} />
                        Receipt
                      </Badge>
                    )}
                    {template.invoices.length > 0 && (
                      <Badge
                        variant="outline"
                        className="text-xs flex items-center gap-1 border-brand-purple/30 text-brand-purple"
                      >
                        <FileText size={12} />
                        Invoice
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0 flex-grow">
                {template.previewImageUrl && (
                  <div className="relative min-h-80 aspect-[3/5] overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-background/20 to-transparent z-10"></div>

                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={`/app${template.previewImageUrl}`}
                        alt={`${template.name} Preview`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        className="transition-all duration-500 transform group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/90 to-transparent"></div>

                    <div className="absolute bottom-4 left-0 right-0 px-4 flex items-center justify-between z-10">
                      <span className="text-xs text-white/90 uppercase tracking-wide font-medium transition-all duration-300 group-hover:text-white">
                        Open Brand Documents
                      </span>
                      <div className="bg-brand-purple rounded-full p-1.5 transform transition-all duration-300 shadow-sm group-hover:shadow-[0_0_10px_rgba(116,77,228,0.3)] group-hover:scale-110">
                        <ArrowUpRight size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {selectedTemplate && (
        <DocumentModal
          isOpen={isModalOpen}
          onClose={closeModal}
          template={selectedTemplate}
        />
      )}
    </>
  );
}
