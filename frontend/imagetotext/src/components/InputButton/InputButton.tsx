import type { ReactNode } from "react"
import css from "./InputButton.module.css"

interface InputButtonProps {
  children: ReactNode,
}

export const InputButton = ({ children }: InputButtonProps) => {
  return (
    <div className={css.input_button}>
      {children}
    </div>
  )
}
