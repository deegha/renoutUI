import { uploadImage } from "@/services/imageUpload";
import { IImage } from "@/components/imageUpload/imageUpload";
import { useState } from "react";
import { EditorState } from "draft-js";
import { ICreateProperty } from "@/services/d";
import { createProperty } from "@/services/propertyService";
import { TInputs, TAmenities } from "./useInputs";

export function useCreateForm() {
  const [loading, setLoading] = useState(false);

  // handling form submit
  const handleCreateProperty = async (
    inputs: TInputs,
    amenities: TAmenities,
    images: Array<IImage>,
    description: string,
    locationId: number
  ) => {
    setLoading(true);
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
      propertyType: 1,
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
  };
}
