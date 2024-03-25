import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      {/* <Image
        src="https://res.cloudinary.com/duqpgdc9v/image/upload/w_100/v1711173424/rentouts/Rentouts.lk.png"
        width={30}
        height={30}
        alt="Rentouts.lk"
      /> */}
      <nav className={styles.navBar}>
        <Link href={"/"}>Rentouts.lk</Link>
        <Link href={"/dashboard"}>Add your property</Link>
      </nav>
    </div>
  );
};
