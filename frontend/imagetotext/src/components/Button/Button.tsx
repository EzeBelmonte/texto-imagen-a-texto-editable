import { useToast } from "../../hooks/index"; // Hooks personalizados
import "./Button.css"

interface ButtonProps {
  label: string,
  onClick: () => void,
  toastMessage?: string
}

export const Button = ({ label, onClick, toastMessage }: ButtonProps) => {
  const { showToast } = useToast();

  const handleClick = () => {
    onClick();
    if (toastMessage) showToast(toastMessage)
  };

  return (
    <button className="button" onClick={handleClick}>
      {label}
    </button>
  )
}
