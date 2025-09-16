import "./LabelButton.css"

interface LabelButtonProps {
  htmlFor: string,
  children: string,
}

export const LabelButton = ({ htmlFor, children }: LabelButtonProps) => {
  return (
    <label className="label-button" htmlFor={htmlFor}>{children}</label>
  )
}
