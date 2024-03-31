'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { fetchUserProperties } from '@/services/propertyService';
import { TProduct } from '@/services/d';

export default function MyAddsPage() {
  const [myads, setMyAds] = useState<TProduct[]>([]);

  useEffect(() => {
    fetchAdds();
  }, []);

  async function fetchAdds() {
    try {
      const response = await fetchUserProperties();
      console.log(response, 'response');
      setMyAds(response.products);
    } catch (error) {
      console.log(error, 'error');
    }
  }

  console.log('local', window.localStorage.getItem('jwt'));
  return (
    <div className={styles.innerContainer}>
      <h1>My Adds</h1>
      <ul>
        {myads.map((ad) => {
          const perks: string[] = [];
          perks.push(
            ad.numOfBedrooms + ' Bedrooms',
            ad.numOfBathrooms + ' Bathrooms',
            ad.furnishedStatus ? 'Furnished' : 'Not Furnished',
            ad.gym ? 'Gym' : '',
            ad.pool ? 'Pool' : '',
          );
          return <div key={ad.id}>{ad.title}</div>;
        })}
      </ul>
    </div>
  );
}
