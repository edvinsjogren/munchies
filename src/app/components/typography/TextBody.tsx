import React from 'react';

interface TextBodyProps {
  children: React.ReactNode;
}

function TextBody({ children }: TextBodyProps) {
  return (
    <p className="text-body font-body leading-body tracking-body">{children}</p>
  );
}

export default TextBody;
