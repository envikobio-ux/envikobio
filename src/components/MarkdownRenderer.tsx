'use client';

import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeaders: string[] = [];
  let key = 0;

  const processInline = (text: string): React.ReactNode => {
    // Bold
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      // Links
      const linkParts = part.split(/(\[.*?\]\(.*?\))/g);
      return linkParts.map((lp, j) => {
        const linkMatch = lp.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          return <a key={j} href={linkMatch[2]} className="text-[#A1BA80] hover:text-[#4A90C2] underline transition-colors">{linkMatch[1]}</a>;
        }
        return lp;
      });
    });
  };

  const renderTable = (headers: string[], rows: string[][]) => {
    if (headers.length === 0) return null;
    return (
      <div key={key++} className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-gray-200 text-sm">
          <thead>
            <tr className="bg-[#F5F7FA]">
              {headers.map((h, i) => (
                <th key={i} className="border border-gray-200 px-4 py-3 text-left font-bold text-[#A1BA80]">{processInline(h)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 1 ? 'bg-[#F5F7FA]' : ''}>
                {row.map((cell, ci) => (
                  <td key={ci} className="border border-gray-200 px-4 py-3">{processInline(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip metadata lines
    if (line.startsWith('**Meta Description:') || line.startsWith('**Target Keywords:')) continue;

    // Horizontal rule
    if (line.trim() === '---') {
      if (inTable) {
        elements.push(renderTable(tableHeaders, tableRows));
        inTable = false;
        tableHeaders = [];
        tableRows = [];
      }
      elements.push(<hr key={key++} className="my-8 border-gray-200" />);
      continue;
    }

    // Table row
    if (line.trim().startsWith('|')) {
      const cells = line.trim().split('|').filter(c => c.trim() !== '').map(c => c.trim());
      
      // Check if this is a separator row (|---|---|---|)
      if (cells.length > 0 && cells.every(c => /^:?-{3,}:?$/.test(c.trim()))) {
        continue; // Skip separator
      }

      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
        tableRows = [];
      } else {
        tableRows.push(cells);
      }
      continue;
    } else {
      if (inTable) {
        elements.push(renderTable(tableHeaders, tableRows));
        inTable = false;
        tableHeaders = [];
        tableRows = [];
      }
    }

    // Empty line
    if (line.trim() === '') {
      continue;
    }

    // Heading 2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-[#A1BA80] mt-8 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {processInline(line.slice(3))}
        </h2>
      );
      continue;
    }

    // Heading 3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-[#333333] mt-6 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {processInline(line.slice(4))}
        </h3>
      );
      continue;
    }

    // List item
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      elements.push(
        <li key={key++} className="text-[#666666] leading-relaxed mb-1 ml-6 list-disc">
          {processInline(line.trim().slice(2))}
        </li>
      );
      continue;
    }

    // Numbered list
    const numMatch = line.trim().match(/^\d+\.\s+(.+)/);
    if (numMatch) {
      elements.push(
        <li key={key++} className="text-[#666666] leading-relaxed mb-1 ml-6 list-decimal">
          {processInline(numMatch[1])}
        </li>
      );
      continue;
    }

    // Paragraph
    elements.push(
      <p key={key++} className="text-[#666666] leading-relaxed mb-4">
        {processInline(line)}
      </p>
    );
  }

  // Flush remaining table
  if (inTable) {
    elements.push(renderTable(tableHeaders, tableRows));
  }

  return (
    <div className="space-y-2">
      {elements}
    </div>
  );
}