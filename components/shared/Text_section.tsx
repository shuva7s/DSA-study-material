import { ReactNode } from "react";

const Text_section = ({
  head_text,
  body_text,
}: {
  head_text: string;
  body_text: ReactNode;
}) => {
  return (
    <section className="flex flex-col gap-2">
      <h2>{head_text}</h2>
      {body_text}
    </section>
  );
};

export default Text_section;
