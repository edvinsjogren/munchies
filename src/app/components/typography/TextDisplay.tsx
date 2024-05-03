import React from 'react';

interface TextDisplayProps {
  children: React.ReactNode;
}

function TextDisplay({ children }: TextDisplayProps) {
  return (
    <h1 className="text-[1.25rem] font-display leading-display tracking-display lg:text-display">
      {children}
    </h1>
  );
}

export default TextDisplay;
