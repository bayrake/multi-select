import React, { ReactElement } from 'react';

interface Props {
  text: string,
  strongText: string,
}

function getStrongText(text: string, strongText: string) {
  // Split text on higlight term, include term itself into parts, ignore case
  const parts = text.split(new RegExp(`(${strongText})`, "gi"));
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === strongText.toLowerCase() ? (
        <strong>{part}</strong>
      ) : (
        part
      )}
    </React.Fragment>
  ));
}

export default function StrongText({ text, strongText }: Props): ReactElement {
  return <>{ getStrongText(text, strongText) }</>; 
}