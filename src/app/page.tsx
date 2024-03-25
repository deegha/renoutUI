'use server';
import styles from './page.module.scss';
import { Filters, UserLayout } from '@/components';

export default async function Home() {
  return (
    <main className={styles.main}>
      <UserLayout>
        <div className={styles.filterContainer}>
          <h1>Let&apos;s find your Apartment</h1>
          <Filters alwayOpen />
        </div>
      </UserLayout>
    </main>
  );
}
