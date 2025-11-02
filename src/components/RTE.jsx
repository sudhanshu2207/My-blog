import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="inline-block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:border-blue-500 focus-within:shadow-md transition-all duration-200">
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              id={name}
              apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
              initialValue={defaultValue}
              init={{
                height: 450,
                menubar: true,
                branding: false,
                skin: "oxide",
                content_css: "default",
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image link | removeformat | code fullscreen | help",
                content_style:
                  "body { font-family:Inter,Helvetica,Arial,sans-serif; font-size:15px; color:#333; background-color:#fff; padding:10px; }",
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  );
}
