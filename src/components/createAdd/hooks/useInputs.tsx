import { ICreateProperty } from "@/services/d";
import { useState } from "react";

export type TAmenities = {
  pool: boolean;
  gym: boolean;
  generators: boolean;
  furnished: boolean;
};
export type TInputs = {
  title: string;
  rentAmount: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  floorArea: number;
  description: string;
  advancePayment: string;
  securityDeposit: number;
  productCategory: number;
  status: number;
  contactNumber: string;
  contactPerson: string;
  locationId: number;
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
    furnished: false,
  });
  const [inputs, setInputs] = useState<TInputs>({
    title: "",
    rentAmount: "",
    numberOfBedrooms: 0,
    numberOfBathrooms: 0,
    floorArea: 0,
    description: "",
    advancePayment: "",
    securityDeposit: 0,
    productCategory: 0,
    status: 0,
    contactNumber: "",
    contactPerson: "",
    locationId: 0,
  });

  const [location, setLocation] = useState<TLocation>({} as TLocation);

  // handling input changes
  const handleInput = (name: string, value: string | number) => {
    setInputs((prevInputs: TInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // handling checkbox changes
  const handleCheckBoxes = (key: string, change: boolean) => {
    setAmanitues((prevAmenities) => ({
      ...prevAmenities,
      [key]: change,
    }));
  };

  console.log(inputs, "inputs");
  return {
    inputs,
    handleInput,
    handleCheckBoxes,
    amenities,
    setLocation,
    location,
  };
}
