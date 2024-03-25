import { ICreateProperty } from '@/services/d';
import { useState } from 'react';

export type TAmenities = {
  pool: boolean;
  gym: boolean;
  generators: boolean;
  furnished: boolean;
};
export type TInputs = {
  title: string;
  rentAmount: string;
  numOfBedrooms: number;
  numOfBathrooms: number;
  floorArea: number;
  description: string;
  advancePayment: string;
  securityDeposit: string;
  productCategory: number;
  status: number;
  contactNumber: string;
  contactPerson: string;
};

type TLocation = {
  id: number | string;
  name: string;
};

export function useInputs() {
  const [amenities, setAmanitues] = useState<TAmenities>({
    pool: false,
    gym: false,
    generators: false,
    furnished: false
  });
  const [inputs, setInputs] = useState<TInputs>({
    title: '',
    rentAmount: '',
    numOfBedrooms: 0,
    numOfBathrooms: 0,
    floorArea: 0,
    description: '',
    advancePayment: '',
    securityDeposit: '',
    productCategory: 0,
    status: 0,
    contactNumber: '',
    contactPerson: ''
  });

  const [location, setLocation] = useState<TLocation>({} as TLocation);

  // handling input changes
  const handleInput = (name: string, value: string | number) => {
    console.log(name, value);
    setInputs((prevInputs: TInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  // handling checkbox changes
  const handleCheckBoxes = (key: string, change: boolean) => {
    setAmanitues((prevAmenities) => ({
      ...prevAmenities,
      [key]: change
    }));
  };

  return {
    inputs,
    handleInput,
    handleCheckBoxes,
    amenities,
    setLocation,
    location
  };
}
