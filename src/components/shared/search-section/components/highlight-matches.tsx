import React from 'react';

const highlightMatches = (text: string, query: string): React.ReactNode[] => {
  if (!query) return [text];

  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className="font-bold">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

export const HighlightMatches = ({ text, query }: { text: string; query: string }) => (
  <>{highlightMatches(text, query)}</>
);
