import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logoImage from "../../images/Orange and Dark Blue Basketball Match Result Instagram Post.png";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <nav className={styles.navMenu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Acerca de
        </NavLink>
      </nav>
      <div className={styles.logo}>
        <h1 className={styles.logo}>
          <NavLink className={styles.logotext} to="/">
            WeatherApp
          </NavLink>
        </h1>
        <img src={logoImage} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
