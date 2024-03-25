'use client';

import { DashBoardNav } from '@/components';
import styles from './styles.module.scss';

import { AuthProvider, useAuth } from '@/context/authContenxt';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <DashBoard>{children}</DashBoard>
    </AuthProvider>
  );
}

function DashBoard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { loading, user } = useAuth();

  if (loading) return <div>loading</div>;

  if (!loading && user === null)
    return (
      <div>
        You need to login First <a href="/login">Redirect to login</a>
      </div>
    );

  return (
    <>
      <ToastContainer />
      <div className={styles.container}>
        <DashBoardNav />
        <div className={styles.dashboard}>{children}</div>
      </div>
    </>
  );
}
