'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styes.module.scss';
import { Button } from '@/components';
import { register, login } from '@/services/authenticationService';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  const handleRegister = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setStatus('Registering...');
      const response = await register({
        email,
        name: `${firstName} ${lastName}`,
        password
      });

      if (response) {
        setStatus('Login in...');
        const response = await login(email, password);

        if (!response) {
          setStatus('');
          setError('Login failed');
          clearError();

          return;
        }

        setStatus('Redirecting...');
        router.push('/dashboard');
      }
    } catch (e: any) {
      setStatus('');
      setError(e.message);
      clearError();
    }
  };

  function clearError() {
    setTimeout(() => {
      setError('');
    }, 3000);
  }

  return (
    <div className={styles['register-container']}>
      <h2>Register</h2>
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
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles['form-control']}
          />
        </div>
        <div className={styles['form-group']}>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
          onClick={handleRegister}
          loading={status === 'Registering...' || status === 'Login in...'}
          title={status === '' ? 'Register' : status}
        />
      </form>

      <div className={styles['links-container']}>
        <Link href="/login">Go to Login</Link>
        <Link href="/">Go to Home</Link>
      </div>

      {error && <p className={styles['error']}>{error}</p>}
    </div>
  );
};

export default Register;
