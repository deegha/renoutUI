import React, { Suspense } from 'react';
import styles from './styles.module.scss';
import { ImagesRenderer } from './image';
import Link from 'next/link';

interface CardProps {
  id: string;
  title: string;
  items: string[];
  rentAmount: number;
  advanceAmount: number;
  securityDeposit: number;
}

export const Card: React.FC<CardProps> = async ({
  title,
  rentAmount,
  items,
  id,
  advanceAmount,
  securityDeposit
}) => {
  return (
    <Link className={styles.cardContainer} href={`/${id}`}>
      <div className={styles.cardImage}>
        <Suspense fallback={<div>Image loading</div>}>
          <ImagesRenderer id={id} />
        </Suspense>
      </div>
      <div className={styles.cardDescription}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.pricing}>
          <span>Price per month : {rentAmount.toLocaleString('en-US')}</span>
          {advanceAmount > 1 && (
            <span>
              Advance amount : {advanceAmount.toLocaleString('en-US')}
            </span>
          )}

          {securityDeposit > 1 && (
            <span>
              Security deposite : {securityDeposit.toLocaleString('en-US')}
            </span>
          )}
        </div>
        <ul className={styles.itemContainer}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
