'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styes.module.scss';
import { Button } from '@/components';
import { login } from '@/services/authenticationService';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStatus('Login in...');
    const response = await login(email, password);

    if (!response.success) {
      setStatus('');
      setError(response.message);
      clearError();
      return;
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('token', response.token);
    }

    setStatus('Redirecting...');
    router.push('/dashboard');
  };

  function clearError() {
    setTimeout(() => {
      setError('');
    }, 3000);
  }

  return (
    <div className={styles['register-container']}>
      <h2>Login</h2>
      <form className={styles['register-form']}>
        <div className={styles['form-group']}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles['form-control']}
          />
        </div>
        <div className={styles['form-group']}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles['form-control']}
          />
        </div>
        <Button
          variant="primary"
          onClick={handleLogin}
          loading={status === 'Login in...'}
          title={status === '' ? 'Log in' : status}
        />
      </form>

      <div className={styles['links-container']}>
        <Link href="/register">Create an account</Link>
        <Link href="/">Go to Home</Link>
      </div>

      {error && <span className={styles['error']}>{error}</span>}
    </div>
  );
};

export default Login;
