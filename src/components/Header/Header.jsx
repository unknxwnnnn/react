import s from "./Header.module.css";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.header_text}>
        <h1>My-app</h1>
      </div>
      <div className={s.header_icon}>
        <h1>X</h1>
      </div>
    </div>
  );
}
export default Header;
