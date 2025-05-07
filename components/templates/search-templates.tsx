"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Template } from "@/lib/types";
import TemplateSelector from "./template-selector";

interface SearchTemplatesProps {
  templates: Record<string, Template>;
}

export default function SearchTemplates({ templates }: SearchTemplatesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTemplates, setFilteredTemplates] = useState<Record<string, Template>>(templates);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredTemplates(templates);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = Object.values(templates).filter(
      (template) =>
        template.name.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query)
    );

    const filteredRecord: Record<string, Template> = {};
    filtered.forEach(template => {
      filteredRecord[template.id] = template;
    });

    setFilteredTemplates(filteredRecord);
  }, [searchQuery, templates]);

  return (
    <>
      <div className="relative mb-10 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search templates..."
          className="pl-10 bg-card/50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="relative">
        <div className="absolute inset-0 -z-10 pattern-dots pattern-slate-500 pattern-bg-transparent pattern-opacity-5 pattern-size-2"></div>

        {Object.values(filteredTemplates).length > 0 ? (
          <TemplateSelector templates={Object.values(filteredTemplates)} />
        ) : (
          <div className="text-center py-16 border border-dashed rounded-lg">
            <p className="text-muted-foreground mb-2">
              No templates match your search.
            </p>
            <p className="text-sm text-muted-foreground">
              Want new templates?{" "}
              <a
                href="https://discord.gg/4zPGFUjHCw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple hover:underline"
              >
                Contact us on Discord
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </>
  );
}
