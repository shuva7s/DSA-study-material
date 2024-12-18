"use client";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "../ui/button";

const CodeBox = ({ code }: { code: string }) => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const syntaxStyle =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? atomDark
      : oneLight;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="overflow-x-auto relative">
      <SyntaxHighlighter language="cpp" style={syntaxStyle}>
        {code}
      </SyntaxHighlighter>
      <Button
        onClick={handleCopy}
        size={"icon"}
        variant={"secondary"}
        disabled={copied}
        className="absolute top-4 right-2 z-10"
      >
        {copied ? <Check /> : <Copy />}
      </Button>
    </div>
  );
};

export default CodeBox;
