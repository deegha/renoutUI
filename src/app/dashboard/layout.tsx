"use client";

import { getUser } from "@/services/authenticationService";
import { useEffect, useState } from "react";
import { User } from "@/services/d";
import { DashBoardNav } from "@/components";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    getUser()
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((e) => {
        setUser(undefined);
        console.log(e.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>loading</div>;

  if (!loading && user?.success === false) return router.push("/login");

  return (
    <div className={styles.container}>
      <DashBoardNav />
      <div className={styles.dashboard}>{children}</div>
    </div>
  );
}
