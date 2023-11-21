import styles from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 Mi WeatherApp. waldemar stegierski.</p>
    </footer>
  );
};

export default Footer;
