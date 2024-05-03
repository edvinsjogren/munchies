import React from 'react';

interface TextTitleProps {
  children: React.ReactNode;
}

function TextTitle({ children }: TextTitleProps) {
  return (
    <h3 className="text-title font-title leading-title tracking-title">
      {children}
    </h3>
  );
}

export default TextTitle;
