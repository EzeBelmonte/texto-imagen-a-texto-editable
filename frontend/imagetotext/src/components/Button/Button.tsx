import css from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  toastMessage?: string; // opcional, solo si queremos toast
  showToast?: (msg: string) => void; // inyectamos el hook desde afuera
}

export const Button = ({ label, onClick, toastMessage, showToast }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e); // ejecuta la función principal

    // si recibimos toastMessage y showToast, mostramos el toast
    if (toastMessage && showToast) {
      showToast(toastMessage);
    }
  };

  return <button className={css.button} onClick={handleClick}>{label}</button>;
};
