import { getLocation } from "@/services/locations";
import { useSearchParams } from "next/navigation";
import {
  getBedroomOption,
  getPriceRangeOption,
} from "@/services/filterOptions";

export function useInitialFilterOptions() {
  const searchParams = useSearchParams();

  const region = searchParams.get("region");
  const rentAmount = searchParams.get("rentAmount");
  const bedrooms = searchParams.get("bedrooms");
  const furnished = searchParams.get("furnished");
  const gym = searchParams.get("gym");

  let selectedRegionOption;
  if (region) {
    selectedRegionOption = getLocation(parseInt(region as string));
  }

  let selectedPriceRangeOption;
  if (rentAmount) {
    selectedPriceRangeOption = getPriceRangeOption(rentAmount);
  }

  let selectedNumberOfBedroomsOption;
  if (bedrooms) {
    selectedNumberOfBedroomsOption = getBedroomOption(bedrooms);
  }

  return {
    selectedRegion: selectedRegionOption,
    selectedPriceRangeState: selectedPriceRangeOption,
    furnishedState: furnished === "true" ? true : false,
    gymState: gym === "true" ? true : false,
    selectedNumberOfBedroomsState: selectedNumberOfBedroomsOption,
  };
}
