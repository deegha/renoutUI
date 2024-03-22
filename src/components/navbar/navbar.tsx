import Link from "next/link";
import styles from "./styles.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.navBar}>
        <Link href={"/"}>Rentouts.lk</Link>
        <Link href={"/dashboard"}>Add your property</Link>
      </nav>
    </div>
  );
};
