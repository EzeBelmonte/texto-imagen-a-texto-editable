import React from "react";
import css from "./Textarea.module.css"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = (props: TextareaProps) => {
  return <textarea className={css.textarea} {...props} />;
}