import { uploadImage } from "@/services/imageUpload";
import { IImage } from "@/components/imageUpload/imageUpload";
import { useState } from "react";
import { ICreateProperty } from "@/services/d";
import { createProperty } from "@/services/propertyService";
import { TInputs, TAmenities } from "./useInputs";
import { useAuth } from "@/context/authContenxt";

type TErrors = {
  title?: string;
  rentAmount?: string;
  numberOfBedrooms?: string;
  numberOfBathrooms?: string;
  contactNumber?: string;
  contactPerson?: string;
  location?: string;
};

function validateInput(inputs: TInputs, locationId: number) {
  const errors: TErrors = {};

  if (inputs.title === "") {
    errors.title = "Title should not be empty";
  }

  if (inputs.rentAmount === "") {
    errors.rentAmount = "Rent amount cannot be empty";
  }

  if (inputs.numOfBedrooms === 0) {
    errors.numberOfBedrooms = "Number of bedrooms cannot be empty";
  }

  if (inputs.numOfBathrooms === 0) {
    errors.title = "Number of bathrooms should not be empty";
  }

  if (inputs.contactNumber === "") {
    errors.title = "Contact number should not be empty";
  }

  if (inputs.contactPerson === "") {
    errors.title = "Contact person should not be empty";
  }

  if (locationId === 0) {
    errors.title = "Location should not be empty";
  }

  return errors;
}

export function useCreateForm() {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [formErrors, setFormErrors] = useState<TErrors>();

  // handling form submit
  const handleCreateProperty = async (
    inputs: TInputs,
    amenities: TAmenities,
    images: Array<IImage>,
    description: string,
    locationId: number
  ) => {
    setLoading(true);

    const errors = validateInput(inputs, locationId);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const uploadPromises = images.map((image) =>
      uploadImage(image.file as File)
    );
    const urls = await Promise.all(uploadPromises);
    const data: ICreateProperty = {
      ...inputs,
      ...amenities,
      productCategory: 2,
      status: 1,
      images: urls,
      locationId: locationId,
      description: description,
      SeparateElectricity: true,
      furnishedStatus: amenities.furnished,
      rentAmount: parseInt(inputs.rentAmount.replace(/,/g, ""), 10),
      advancePayment: parseInt(inputs.advancePayment.replace(/,/g, ""), 10),
      securityDeposit: parseInt(inputs.securityDeposit.replace(/,/g, ""), 10),
      propertyType: 1,
      createdBy: user?.id as number,
    };

    createProperty(data)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return {
    handleCreateProperty,
    loading,
    formErrors,
  };
}
