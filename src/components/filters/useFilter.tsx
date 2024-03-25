import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IOption } from '@/components/autoComplete/autoComplete';

type TFilterProps = {
  selectedRegionState: IOption | undefined;
  selectedPriceRangeState: IOption | undefined;
  furnishedState: boolean;
  gymState: boolean;
  selectedNumberOfBedroomsState: IOption | undefined;
};

export const useFilter = ({
  selectedRegionState,
  selectedPriceRangeState,
  furnishedState,
  gymState,
  selectedNumberOfBedroomsState,
}: TFilterProps) => {
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState<IOption | undefined>(
    selectedRegionState,
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    IOption | undefined
  >(selectedPriceRangeState);
  const [selectedNumberOfBedrooms, setSelectedSelectedNumberOfBedrooms] =
    useState<IOption | undefined>(selectedNumberOfBedroomsState);
  const [furnished, setFurnished] = useState<boolean>(
    furnishedState ? furnishedState : false,
  );
  const [gym, setGym] = useState<boolean>(gymState ? gymState : false);

  function handleSearch() {
    let query = '';
    if (selectedRegion) {
      query += `region=${selectedRegion.id}`;
    }
    if (selectedPriceRange) {
      query += `&rentAmount=${selectedPriceRange.id}`;
    }
    if (selectedNumberOfBedrooms) {
      query += `&bedrooms=${selectedNumberOfBedrooms.id}`;
    }
    if (furnished) {
      query += `&furnished=${furnished}`;
    }
    if (gym) {
      query += `&gym=${gym}`;
    }

    router.push(`/search?${query}`);
  }

  return {
    selectedRegion,
    setSelectedRegion,
    setSelectedPriceRange,
    selectedPriceRange,
    furnished,
    setFurnished,
    gym,
    setGym,
    setSelectedSelectedNumberOfBedrooms,
    selectedNumberOfBedrooms,
    handleSearch,
  };
};
