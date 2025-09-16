import React from "react";
import "./Textarea.css"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = (props: TextareaProps) => {
  return <textarea className="textarea" {...props} />;
}