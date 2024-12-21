// "use client";
// import { useState } from "react";
// import { Copy, Check } from "lucide-react";
// import { Button } from "../ui/button";

// const CodeBox = ({ code }: { code: string }) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(code).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   return (
//     <div className="relative overflow-hidden rounded-lg bg-accent text-foreground">
//       <pre
//         className="p-4 overflow-auto break-words whitespace-pre-wrap"
//         style={{
//           fontFamily: "monospace",
//         }}
//       >
//         {code}
//       </pre>
//       <Button
//         onClick={handleCopy}
//         size={"icon"}
//         variant={"secondary"}
//         disabled={copied}
//         className="absolute top-4 right-4 z-10"
//       >
//         {copied ? <Check /> : <Copy />}
//       </Button>
//     </div>
//   );
// };

// export default CodeBox;

"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
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
    <div className="w-full relative overflow-hidden">
      <SyntaxHighlighter
        language="cpp"
        style={atomDark}
        customStyle={{
          borderRadius: "8px",
          fontSize: "1.1rem",
          padding: "20px",
          overflowX: "auto",
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
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
