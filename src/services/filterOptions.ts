export const bedrooms = [
  { name: '1 bedroom', id: '1' },
  { name: '2 bedrooms', id: '2' },
  { name: '3 bedrooms', id: '3' },
  { name: '4 bedrooms', id: '4' },
  { name: '5 bedrooms', id: '5' },
  { name: 'Any', id: '' }
];

export const priceRange = [
  { name: 'below 50,000', id: '50000' },
  { name: 'below 100,000', id: '100000' },
  { name: 'below 150,000', id: '150000' },
  { name: 'Below 200,000', id: '200000' },
  { name: 'Below 250,000', id: '250000' },
  { name: 'Below 300,000', id: '300000' },
  { name: 'Any', id: '' }
];

export function getBedroomOption(id: string) {
  return bedrooms.find((bedroom) => bedroom.id === id);
}

export function getPriceRangeOption(id: string) {
  return priceRange.find((price) => price.id === id);
}
