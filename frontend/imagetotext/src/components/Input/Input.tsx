import React from "react";
import { InputError } from "../Errors/Errors";
import css from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string,
  hidden?: boolean
}

export const Input: React.FC<InputProps> = ({
  error,
  id,
  className,
  hidden,
  ...rest
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <>
      <input id={inputId} className={`${css.input} ${className || ""}`} style={{ display: hidden ? "none" : undefined }} {...rest} />
      <InputError message={error} />
    </>
  )
}
