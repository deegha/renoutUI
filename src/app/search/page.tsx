'use server';
import styles from './styles.module.scss';
import { ProductsList, Navbar, UserLayout } from '@/components';
import { Suspense } from 'react';

interface IProps {
  searchParams?: { [key: string]: string };
}

export default async function Home({ searchParams }: IProps) {
  return (
    <main className={styles.main}>
      <UserLayout>
        <Suspense fallback={<div>Loading</div>}>
          <ProductsList
            page={searchParams?.page || ''}
            rentAmount={searchParams?.rentAmount || ''}
            region={searchParams?.region || ''}
            bedrooms={searchParams?.bedrooms || ''}
            furnished={searchParams?.furnished || ''}
            gym={searchParams?.gym || ''}
          />
        </Suspense>
      </UserLayout>
    </main>
  );
}
