/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link as LinkIcon,
  Image as ImageIcon,
  Heading1,
  Heading2,
  Undo,
  Redo,
} from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import * as React from "react";

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export function Editor({ content, onChange, placeholder }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image,
      Placeholder.configure({
        placeholder: placeholder || "Write something...",
      }),
    ],
    content: content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Update editor content when props change (e.g. switching doc types)
  React.useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col w-full border border-slate-200 rounded-[1.5rem] overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#F9253B]/10 transition-all">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-100 shadow-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={cn(
              "size-9 rounded-lg",
              editor.isActive("bold") && "bg-slate-100 text-[#F9253B]",
            )}
          >
            <Bold className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={cn(
              "size-9 rounded-lg",
              editor.isActive("italic") && "bg-slate-100 text-[#F9253B]",
            )}
          >
            <Italic className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={cn(
              "size-9 rounded-lg",
              editor.isActive("underline") && "bg-slate-100 text-[#F9253B]",
            )}
          >
            <UnderlineIcon className="size-4" />
          </Button>
        </div>

        <div className="h-6 w-px bg-slate-200 mx-1" />

        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-100 shadow-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={cn(
              "size-9 rounded-lg",
              editor.isActive("heading", { level: 1 }) &&
                "bg-slate-100 text-[#F9253B]",
            )}
          >
            <Heading1 className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={cn(
              "size-9 rounded-lg",
              editor.isActive("heading", { level: 2 }) &&
                "bg-slate-100 text-[#F9253B]",
            )}
          >
            <Heading2 className="size-4" />
          </Button>
        </div>

        <div className="h-6 w-px bg-slate-200 mx-1" />

        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-100 shadow-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={cn(
              "size-9 rounded-lg",
              editor.isActive({ textAlign: "left" }) &&
                "bg-slate-100 text-[#F9253B]",
            )}
          >
            <AlignLeft className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={cn(
              "size-9 rounded-lg",
              editor.isActive({ textAlign: "center" }) &&
                "bg-slate-100 text-[#F9253B]",
            )}
          >
            <AlignCenter className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={cn(
              "size-9 rounded-lg",
              editor.isActive({ textAlign: "right" }) &&
                "bg-slate-100 text-[#F9253B]",
            )}
          >
            <AlignRight className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            className={cn(
              "size-9 rounded-lg",
              editor.isActive({ textAlign: "justify" }) &&
                "bg-slate-100 text-[#F9253B]",
            )}
          >
            <AlignJustify className="size-4" />
          </Button>
        </div>

        <div className="h-6 w-px bg-slate-200 mx-1" />

        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-100 shadow-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={cn(
              "size-9 rounded-lg",
              editor.isActive("bulletList") && "bg-slate-100 text-[#F9253B]",
            )}
          >
            <List className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={cn(
              "size-9 rounded-lg",
              editor.isActive("orderedList") && "bg-slate-100 text-[#F9253B]",
            )}
          >
            <ListOrdered className="size-4" />
          </Button>
        </div>

        <div className="h-6 w-px bg-slate-200 mx-1" />

        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-100 shadow-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            className="size-9 rounded-lg"
          >
            <Undo className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            className="size-9 rounded-lg"
          >
            <Redo className="size-4" />
          </Button>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 min-h-100 p-6 cursor-text">
        <EditorContent
          editor={editor}
          className="prose prose-slate max-w-none focus:outline-none min-h-100 text-slate-600 text-lg font-medium leading-relaxed"
        />
      </div>

      <style jsx global>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror:focus {
          outline: none;
        }
        .prose ul {
          list-style-type: disc;
          padding-left: 1.5rem;
        }
        .prose ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
        }
      `}</style>
    </div>
  );
}
