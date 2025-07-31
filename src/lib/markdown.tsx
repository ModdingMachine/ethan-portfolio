import React from 'react';

// Simple markdown parser for chat messages (supports bold only for now)
export function parseMarkdown(text: string): React.ReactNode {
  if (!text) return null;

  return text.split('\n').map((line, lineIndex) => {
    // Split line by **bold** markdown pattern, retaining delimiters
    const parts = line.split(/(\*\*[^*]+\*\*)/g);

    return (
      <span key={lineIndex}>
        {parts.map((part, partIndex) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const boldText = part.slice(2, -2); // remove '**'
            return (
              <strong key={partIndex} className="font-semibold">
                {boldText}
              </strong>
            );
          }
          return <React.Fragment key={partIndex}>{part}</React.Fragment>;
        })}
        {/* Add <br /> between lines, but not after the last line */}
        {lineIndex < text.split('\n').length - 1 && <br />}
      </span>
    );
  });
}
