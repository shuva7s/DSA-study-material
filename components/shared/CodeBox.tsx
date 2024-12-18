"use client";

import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "../ui/button";

const CodeBox = ({ code }: { code: string }) => {
  const { theme } = useTheme();
  const [syntaxStyle, setSyntaxStyle] = useState(oneLight); // Default to light theme
  const [copied, setCopied] = useState(false);

  // Dynamically determine the theme
  useEffect(() => {
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setSyntaxStyle(atomDark);
    } else {
      setSyntaxStyle(oneLight);
    }
  }, [theme]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative w-full">
      <SyntaxHighlighter
        language="cpp"
        style={syntaxStyle}
        customStyle={{
          borderRadius: "8px",
          padding: "10px",
          overflowX: "auto",
        }}
      >
        {code}
      </SyntaxHighlighter>
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
