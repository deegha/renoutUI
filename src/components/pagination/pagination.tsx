'use client';

import styles from './pagination.module.scss';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

interface PaginationProps {
  totalPages: number;
  selectedPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  selectedPage,
}) => {
  const path = useSearchParams();

  return (
    <Suspense>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => {
            const queryParams = new URLSearchParams(path);
            queryParams.set('page', String(pageNumber));
            const queryString = queryParams.toString();

            return (
              <Link
                key={pageNumber}
                href={`search/?${queryString}`}
                passHref
                className={
                  selectedPage === pageNumber
                    ? styles.paginationItemActive
                    : styles.paginationItem
                }
              >
                {pageNumber}
              </Link>
            );
          },
        )}
      </div>
    </Suspense>
  );
};
