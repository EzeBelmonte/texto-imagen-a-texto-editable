import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.header_h1}>Conversor de imagen a PDF</h1>
      <h2 className={css.header_h2}>Transformá el texto de una imagen a texto editable</h2>
      <h2 className={css.header_h2}>y descargalo como PDF</h2>
    </header>
  );
}