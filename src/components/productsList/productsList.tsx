'use server';
import { fetchProperties } from '@/services/propertyService';
import { Card, Filters, Pagination } from '@/components';
import styles from './styles.module.scss';
import { FetchProductsResponse } from '@/services/d';

interface IProps {
  page?: string;
  region?: string;
  rentAmount?: string;
  bedrooms?: string;
  furnished?: string;
  gym?: string;
}

export async function ProductsList({
  page,
  rentAmount,
  region,
  bedrooms,
  furnished,
  gym
}: IProps) {
  let productResponse: FetchProductsResponse;

  let pageError = false;
  try {
    productResponse = await fetchProperties({
      page: page || '',
      maxRent: rentAmount || '',
      beds: bedrooms || '',
      furnished: furnished ? 1 : '',
      region: region,
      gym: gym
    });
  } catch (error) {
    productResponse = {
      products: [],
      numberOfPages: 0
    };
    pageError = true;
  }

  if (pageError) {
    return (
      <div>
        There was an error fetching the products; Check your internet connection
      </div>
    );
  }

  return (
    <section className={styles.listContainer}>
      <Filters />
      {productResponse.products.map((product) => {
        const perks: Array<string> = [];
        perks.push(
          product.numOfBedrooms + ' Bedrooms',
          product.numOfBathrooms + ' Bathrooms',
          product.furnishedStatus ? 'Furnished' : 'Not Furnished',
          product.gym ? 'Gym' : '',
          product.pool ? 'Pool' : ''
        );
        return (
          <Card
            advanceAmount={product.advancePayment}
            id={product.id}
            key={product.id}
            title={product.title}
            items={perks}
            rentAmount={product.rentAmount}
            securityDeposit={product.securityDeposit}
          />
        );
      })}
      {productResponse.numberOfPages > 1 && (
        <Pagination
          totalPages={productResponse.numberOfPages}
          selectedPage={page ? parseInt(page) : 1}
        />
      )}
    </section>
  );
}
