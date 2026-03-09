"use client";

interface MarkdownContentProps {
  content: string | null;
}

/**
 * Renders lesson tutorial markdown content.
 * 
 * For v1, this uses a simple HTML-safe markdown renderer.
 * For v2, install react-markdown + remark-gfm + rehype-highlight:
 *   npm install react-markdown remark-gfm rehype-highlight
 * 
 * Then replace the body with:
 *   import ReactMarkdown from 'react-markdown';
 *   import remarkGfm from 'remark-gfm';
 *   import rehypeHighlight from 'rehype-highlight';
 *   <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
 *     {content}
 *   </ReactMarkdown>
 */
export function MarkdownContent({ content }: MarkdownContentProps) {
  if (!content) return null;

  // Simple markdown-to-HTML conversion for v1
  // Handles: headers, bold, italic, code blocks, inline code, links, lists, paragraphs
  const html = simpleMarkdown(content);

  return (
    <div
      className="prose prose-invert prose-sm max-w-none
        prose-headings:font-display prose-headings:tracking-tight
        prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-3
        prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2
        prose-p:text-text-secondary prose-p:leading-[1.8]
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-code:text-accent prose-code:bg-[rgba(129,140,248,0.1)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[13px]
        prose-pre:bg-[rgba(0,0,0,0.4)] prose-pre:border prose-pre:border-border prose-pre:rounded-xl
        prose-strong:text-text prose-strong:font-semibold
        prose-li:text-text-secondary
        prose-blockquote:border-accent/30 prose-blockquote:text-text-muted
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function simpleMarkdown(md: string): string {
  let html = md;

  // Code blocks (``` ... ```)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const escaped = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `<pre><code class="language-${lang || "text"}">${escaped}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Headers
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>(\n|$))+/g, (match) => `<ul>${match}</ul>`);

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, "<blockquote><p>$1</p></blockquote>");

  // Horizontal rules
  html = html.replace(/^---$/gm, "<hr />");

  // Paragraphs (lines not already wrapped in tags)
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;
      return `<p>${trimmed}</p>`;
    })
    .join("\n");

  return html;
}
