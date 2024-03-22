"use client";

import { AutoComplete, Button, CheckBox } from "@/components";
import styles from "./styles.module.scss";
import { IOption } from "@/components/autoComplete/autoComplete";
import { bedrooms, priceRange } from "@/services/filterOptions";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFilter } from "./useFilter";
import { useInitialFilterOptions } from "./useInitialFilterOptions";

const regions = [
  { name: "Colombo", id: "1" },
  { name: "Nugegoda", id: "2" },
  { name: "Nawala", id: "3" },
  { name: "Piliyandala", id: "4" },
  { name: "Colombo 5", id: "5" },
  { name: "Rajagiriya", id: "6" },
  { name: "Havelock", id: "7" },
  { name: "Bambalapitiya", id: "8" },
  { name: "Wallawatta", id: "9" },
];

export function Filters() {
  const initialFilterOptions = useInitialFilterOptions();
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
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div>
          <AutoComplete
            label="Location"
            placeholder="Type a city name"
            options={regions}
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

      <div className={styles.container}>
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
        <Button
          title="Let's find your Apartment"
          onClick={handleSearch}
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
  );
}
