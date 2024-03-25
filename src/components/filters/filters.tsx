'use client';

import { AutoComplete, Button, CheckBox } from '@/components';
import styles from './styles.module.scss';
import { IOption } from '@/components/autoComplete/autoComplete';
import { bedrooms, priceRange } from '@/services/filterOptions';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFilter } from './useFilter';
import { useInitialFilterOptions } from './useInitialFilterOptions';
import { locations } from '@/services/locations';
import { useMobileFilterState } from './useMobileFilterState';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

interface IProps {
  alwayOpen?: boolean;
}

export function Filters({ alwayOpen }: IProps) {
  const searchParams = useSearchParams();
  const mobileFilterState = useMobileFilterState(alwayOpen);
  const initialFilterOptions = useInitialFilterOptions(searchParams);
  const {
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
  } = useFilter({
    selectedRegionState: initialFilterOptions.selectedRegion,
    selectedPriceRangeState: initialFilterOptions.selectedPriceRangeState,
    furnishedState: initialFilterOptions.furnishedState,
    gymState: initialFilterOptions.gymState,
    selectedNumberOfBedroomsState:
      initialFilterOptions.selectedNumberOfBedroomsState,
  });

  function handleSubmit() {
    handleSearch();
    mobileFilterState.closeModal();
  }

  return (
    <Suspense>
      <div className={styles.outerContainer}>
        <div className={styles.filterClose}>
          {!alwayOpen && (
            <Button
              variant="info"
              title={
                mobileFilterState.isFilterOpen ? 'Hide Filters' : 'Show Filters'
              }
              onClick={mobileFilterState.toggleFilter}
            />
          )}
        </div>
        <div
          className={
            mobileFilterState.isFilterOpen
              ? styles.container
              : styles.mobileFilterClose
          }
        >
          <div className={styles.row}>
            <div>
              <AutoComplete
                label="Location"
                placeholder="Type a city name"
                options={locations}
                setSelected={(option: IOption) => setSelectedRegion(option)}
                selectedOption={selectedRegion}
              />
            </div>
            <div>
              <AutoComplete
                label="Rent amount Range"
                placeholder="Eg : 100,000"
                options={priceRange}
                setSelected={(option: IOption) => setSelectedPriceRange(option)}
                selectedOption={selectedPriceRange}
              />
            </div>
            <div>
              <AutoComplete
                label="Bedrooms"
                placeholder="Select number of bedrooms"
                options={bedrooms}
                setSelected={(option: IOption) =>
                  setSelectedSelectedNumberOfBedrooms(option)
                }
                selectedOption={selectedNumberOfBedrooms}
              />
            </div>
          </div>

          <div className={styles.row}>
            <CheckBox
              label="Fully furnished"
              isChecked={furnished}
              name="furnished"
              onChange={(name: string, isChecked: boolean) =>
                setFurnished(isChecked)
              }
            />
            <CheckBox
              label="Gym included"
              isChecked={gym}
              name="furnished"
              onChange={(name: string, isChecked: boolean) => setGym(isChecked)}
            />
          </div>
          <div className={styles.row}>
            <Button
              title="Let's find your Apartment"
              onClick={handleSubmit}
              variant="primary"
              icon={
                <FontAwesomeIcon
                  className={styles.selectedCheck}
                  icon={faSearch}
                  width={12}
                />
              }
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
