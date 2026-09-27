"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { TextField } from "@/components/ui/text-field";

export function PasswordField({
  name,
  placeholder,
  autoComplete = "new-password",
}: {
  name: string;
  placeholder: string;
  autoComplete?: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      name={name}
      type={visible ? "text" : "password"}
      placeholder={placeholder}
      autoComplete={autoComplete}
      trailing={
        <button
          type="button"
          onClick={() => setVisible((shown) => !shown)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="text-ash-400 hover:text-ash-100 shrink-0 transition-colors"
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      }
    />
  );
}
