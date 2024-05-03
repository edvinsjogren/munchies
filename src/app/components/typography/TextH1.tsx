import React from 'react';

interface TextH1Props {
  children: React.ReactNode;
}

function TextH1({ children }: TextH1Props) {
  return <h2 className="text-h1 font-h1 leading-h1 tracking-h1">{children}</h2>;
}

export default TextH1;
