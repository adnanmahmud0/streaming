"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SaveIcon } from "lucide-react";
import { toast } from "sonner";
import { Editor } from "@/components/ui/editor";

const initialDocs = {
  terms:
    "<h1>Terms and Conditions</h1><p>Welcome to our streaming platform. By using our service, you agree to these terms...</p>",
  privacy:
    "<h1>Privacy Policy</h1><p>We value your privacy. This policy explains how we collect and use your data...</p>",
  refund:
    "<h1>Refund Policy</h1><p>Our refund policy ensures fair treatment for all subscribers...</p>",
  about:
    "<h1>About Us</h1><p>We are a leading streaming service provider dedicated to bringing you the best content...</p>",
};

export default function LegalPage() {
  const [docType, setDocType] = React.useState("terms");
  const [docs, setDocs] = React.useState(initialDocs);
  const [content, setContent] = React.useState(initialDocs.terms);

  // Update local content state when document type changes
  React.useEffect(() => {
    setContent(docs[docType as keyof typeof docs]);
  }, [docType, docs]);

  const handleSave = () => {
    setDocs((prev) => ({
      ...prev,
      [docType]: content,
    }));
    toast.success(
      `${docType.replace(/^\w/, (c) => c.toUpperCase())} updated successfully`,
    );
  };

  return (
    <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-10">
      {/* Header */}
      <div className="px-4 lg:px-6">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
          Legal Documents
        </h1>
        <p className="text-slate-500 font-medium">
          Manage privacy policies, terms, and other legal documents
        </p>
      </div>

      <div className="px-4 lg:px-6 flex flex-col gap-6">
        <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
          <div className="flex flex-col gap-8">
            {/* Document Type Selection */}
            <div className="flex flex-col gap-3">
              <Label
                htmlFor="doc-type"
                className="text-sm font-bold text-slate-700 uppercase tracking-wider"
              >
                Document Type
              </Label>
              <Select value={docType} onValueChange={setDocType}>
                <SelectTrigger
                  id="doc-type"
                  className="w-full h-14 bg-slate-50 border-none rounded-xl text-lg font-medium text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20"
                >
                  <SelectValue placeholder="Select Document Type" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl border-slate-100">
                  <SelectItem value="terms">Term & Condition</SelectItem>
                  <SelectItem value="privacy">Privacy Policy</SelectItem>
                  <SelectItem value="refund">Refund Policy</SelectItem>
                  <SelectItem value="about">About Us</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Content Editor */}
            <div className="flex flex-col gap-3">
              <Label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                Content
              </Label>
              <Editor
                content={content}
                onChange={setContent}
                placeholder="Start typing your legal document here..."
              />
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex items-center justify-end">
          <Button
            onClick={handleSave}
            className="w-full md:w-auto h-14 px-12 bg-[#F9253B] hover:bg-red-600 text-white font-black text-lg rounded-xl shadow-xl shadow-red-500/20 gap-3 transition-all hover:scale-105 active:scale-95"
          >
            <SaveIcon className="size-5" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
