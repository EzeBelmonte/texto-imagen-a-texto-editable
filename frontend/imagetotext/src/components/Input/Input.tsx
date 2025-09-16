import React from "react";
import { InputError } from "../Errors/Errors";
import "./Input.css"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input: React.FC<InputProps> = ({
  error,
  id,
  className,
  ...rest
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      <input id={inputId} className={`input ${className || ""}`} {...rest} />
      <InputError message={error} />
    </>
  )
}
