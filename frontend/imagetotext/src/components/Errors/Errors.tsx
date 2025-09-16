interface InputErrorProps {
  message?: string;
}

export const InputError: React.FC<InputErrorProps> = ({ message }) => {
  if (!message) return null;

  return (
    <span className="input-error">
      {message}
    </span>
  );
};
