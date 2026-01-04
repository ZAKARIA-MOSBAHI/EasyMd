import { useMarkdown } from "../hooks/useMarkdown";

export default function Preview() {
  const { markdown } = useMarkdown();
  return (
    <div
      className="markdown_preview"
      style={{
        padding: "1rem",
        whiteSpace: "pre-wrap",
        textAlign: "left",
        wordBreak: "break-word",
      }}
    >
      {markdown}
    </div>
  );
}
