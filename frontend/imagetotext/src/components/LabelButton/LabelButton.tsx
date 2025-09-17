import css from "./LabelButton.module.css"

interface LabelButtonProps {
  htmlFor: string,
  children: string,
}

export const LabelButton = ({ htmlFor, children }: LabelButtonProps) => {
  return (
    <label className={css.label_button} htmlFor={htmlFor}>{children}</label>
  )
}
