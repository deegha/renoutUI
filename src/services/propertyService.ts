import {
  TProduct,
  TFilter,
  FetchProductsResponse,
  ICreateProperty,
  IImage,
} from '../services/d';
import { handleCall } from './backendClient';

export const createProperty = (data: ICreateProperty) =>
  handleCall('products', 'POST', data, undefined, true);

export const fetchProperties = async (
  filters: TFilter,
): Promise<FetchProductsResponse> => {
  //create a query string from the filters
  const queryString = Object.keys(filters)
    .map((key) => `${key}=${filters[key as keyof TFilter]}`)
    .join('&');

  const response = await handleCall(
    `products?${queryString}`,
    'GET',
    undefined,
    'no-cache',
  );
  console.log(response, 'response');

  if (!response.data) {
    return {
      products: [] as TProduct[],
      numberOfPages: 0,
    };
  }

  const products = response.data.List;
  if (!products || !products.length) {
    throw new Error('No products found');
  }
  console.log(response.data, 'TotalPages');
  return {
    products: products as TProduct[],
    numberOfPages: response.data.TotalPages,
  };
};

export const fetchImages = async (id: string): Promise<IImage[]> => {
  const response = await handleCall(`products/${id}/images`, 'GET');
  if (!response.data) {
    return [];
  }
  return response.data;
};

export const fetchProperty = async (id: string): Promise<TProduct> => {
  const response = await handleCall(
    `products/${id}`,
    'GET',
    undefined,
    'no-cache',
  );

  return response.data;
};

export const fetchUserProperties = async (): Promise<FetchProductsResponse> => {
  const response = await handleCall(
    'products/user',
    'GET',
    undefined,
    'no-cache',
    true,
  );
  return {
    products: response.data.List as TProduct[],
    numberOfPages: response.data.TotalPages,
  };
};
