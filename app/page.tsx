"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, ReceiptText } from "lucide-react";
import SearchTemplates from "@/components/templates/search-templates";
import { templates } from "@/lib/templates";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import * as React from "react";

interface HomePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function Home({ searchParams }: HomePageProps) {
  const [activeTab, setActiveTab] = useState("templates");

  const resolvedSearchParams = React.use(searchParams);

  const error = resolvedSearchParams?.error;
  const loggedOut = resolvedSearchParams?.logged_out;

  let message: {
    type: "error" | "success";
    title: string;
    description: string;
  } | null = null;
  if (error) {
    switch (error) {
      case "oauth_failed":
        message = {
          type: "error",
          title: "Login Failed",
          description: "Could not authenticate with Discord. Please try again.",
        };
        break;
      case "unauthorized":
        message = {
          type: "error",
          title: "Unauthorized",
          description:
            "You do not have the required role or guild membership to access this application.",
        };
        break;
      case "invalid_grant":
        message = {
          type: "error",
          title: "Login Expired",
          description:
            "The login attempt timed out or was invalid. Please try again.",
        };
        break;
      case "config_error":
        message = {
          type: "error",
          title: "Configuration Error",
          description:
            "There was an issue with the application configuration. Please contact an administrator.",
        };
        break;
      default:
        message = {
          type: "error",
          title: "Login Error",
          description: "An unknown error occurred during login.",
        };
    }
  }
  if (loggedOut === "true") {
    message = {
      type: "success",
      title: "Logged Out",
      description: "You have been successfully logged out.",
    };
  }

  const totalTemplateOptions = Object.values(templates).reduce(
    (count, template) =>
      count + template.receipts.length + template.invoices.length,
    0
  );

  return (
    <div className="max-w-7xl mx-auto">
      {message && (
        <Alert
          variant={message.type === "error" ? "destructive" : "default"}
          className="mb-8 shadow-sm"
        >
          <Terminal className="h-4 w-4" />
          <AlertTitle>{message.title}</AlertTitle>
          <AlertDescription>{message.description}</AlertDescription>
        </Alert>
      )}

      <Tabs
        defaultValue="templates"
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="flex items-center justify-between mb-8">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="templates" className="relative px-5 py-1.5">
              <ReceiptText className="h-4 w-4 mr-2" />
              Templates
            </TabsTrigger>
          </TabsList>
          <Badge variant="secondary" className="text-sm font-medium">
            {`${totalTemplateOptions} Templates`}
          </Badge>
        </div>

        <div className="space-y-2 max-w-2xl mb-8">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple">
            <ReceiptText className="h-3 w-3 mr-1" />
            Premium Brand Templates
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Select a Brand</h1>
          <p className="text-muted-foreground">
            Create authentic-looking receipts and invoices from premium brand
            templates. Each template is designed to match the real thing.
          </p>
        </div>

        <TabsContent value="templates" className="mt-0">
          <SearchTemplates templates={templates} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
