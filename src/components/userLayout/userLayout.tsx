import { Navbar } from "@/components";
import styles from "./styles.module.scss";

type UserLayoutProps = {
  children: React.ReactNode;
};

export const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className={styles.navBarContianer}>
      <div className={styles.navBarWrapper}>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};
