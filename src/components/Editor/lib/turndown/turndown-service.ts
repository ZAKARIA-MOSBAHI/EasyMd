// turndown.service.ts - Separate service file
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import { checkboxItem, codeBlock } from './custom-rules';

// Create the service once
export const createMarkdownService = () => {
  const service = new TurndownService({
    codeBlockStyle: 'fenced',
    headingStyle: 'atx',
    emDelimiter: '*',
    strongDelimiter: '**',
    bulletListMarker: '-',
    hr: '---',
    linkStyle: 'inlined',
  });
  
  //GFM plugin
  service.use(gfm);
  
  //custom rules
  checkboxItem(service);
  codeBlock(service);
  
  return service;
};

// Export a singleton instance
export const markdownService = createMarkdownService();

// Helper function to clean HTML entities
export const cleanHtmlEntities = (html: string): string => {
  const entityMap: Record<string, string> = {
    '&nbsp;': ' ',
    '&#39;': "'",
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#34;': '"',
    '&#x27;': "'",
  };
  
  return html.replace(
    /&(?:nbsp|amp|lt|gt|quot|#39|#34|#x27);/g,
    (entity) => entityMap[entity] || entity
  );
};