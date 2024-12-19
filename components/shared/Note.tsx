import { ReactNode } from "react";

const Note = ({ note }: { note: ReactNode }) => {
  return (
    <div className="p-6 bg-green-200 dark:bg-green-800 text-foreground border border-green-500 rounded-xl">
      {note}
    </div>
  );
};

export default Note;
