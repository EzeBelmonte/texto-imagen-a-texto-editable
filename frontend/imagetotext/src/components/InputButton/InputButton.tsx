import type { ReactNode } from "react"
import "./InputButton.css"

interface InputButtonProps {
  children: ReactNode,
}

export const InputButton = ({ children }: InputButtonProps) => {
  return (
    <div className="input-button">
      {children}
    </div>
  )
}
