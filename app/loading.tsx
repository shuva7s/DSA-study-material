import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <main className="w-full flex-1 flex items-center justify-center">
      <Loader2 className="w-10 h-10 animate-spin text-border dark:text-accent" />
    </main>
  );
};

export default Loader;
