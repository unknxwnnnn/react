import s from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <ul className={s.sb_ul}>
        <li className={s.sidebar_li}>
          <a href="#" className={s.sidebar_a}>
            Home
          </a>
        </li>
        <li className={s.sidebar_li}>
          <a href="#" className={s.sidebar_a}>
            Home
          </a>
        </li>
        <li className={s.sidebar_li}>
          <a href="#" className={s.sidebar_a}>
            Home
          </a>
        </li>
        <li className={s.sidebar_li}>
          <a href="#" className={s.sidebar_a}>
            Home
          </a>
        </li>
        <li className={s.sidebar_li}>
          <a href="#" className={s.sidebar_a}>
            Home
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
