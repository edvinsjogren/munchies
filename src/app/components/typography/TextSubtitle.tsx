import React from 'react';

interface TextSubtitleProps {
  children: React.ReactNode;
}

function TextSubtitle({ children }: TextSubtitleProps) {
  return (
    <h4
      className={
        'text-subtitle font-subtitle uppercase leading-subtitle tracking-subtitle text-black text-opacity-40'
      }
    >
      {children}
    </h4>
  );
}

export default TextSubtitle;
