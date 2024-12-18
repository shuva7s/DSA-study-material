"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "../ui/button";

const CodeBox = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-accent text-foreground">
      <pre
        className="p-4 overflow-auto break-words whitespace-pre-wrap"
        style={{
          fontFamily: "monospace",
        }}
      >
        {code}
      </pre>
      <Button
        onClick={handleCopy}
        size={"icon"}
        variant={"secondary"}
        disabled={copied}
        className="absolute top-4 right-4 z-10"
      >
        {copied ? <Check /> : <Copy />}
      </Button>
    </div>
  );
};

export default CodeBox;
