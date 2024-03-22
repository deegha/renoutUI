"use server";
import styles from "./page.module.scss";
import { Filters, UserLayout } from "@/components";
import { cookies } from "next/headers";
import Image from "next/image";

interface IProps {
  searchParams?: { [key: string]: string };
}

export default async function Home({ searchParams }: IProps) {
  const cookieStore = cookies();
  console.log(cookieStore.get("jwt"));
  return (
    <main className={styles.main}>
      <UserLayout>
        <div className={styles.filterContainer}>
          <h1>Let&apos;s find your Apartment</h1>
          <Filters />
        </div>
      </UserLayout>
    </main>
  );
}
