export type TProduct = {
  id: string;
  title: string;
  description: string;
  propertyType: number;
  numOfBedrooms: number;
  numOfBathrooms: number;
  furnishedStatus: boolean;
  advancePayment: number;
  securityDeposit: number;
  rentAmount: number;
  pool: boolean;
  gym: boolean;
  contactPerson: string;
  contactNumber: string;
  locationId: number;
  floorArea: number;
};

export type TFilter = {
  propertyType?: string;
  beds?: string;
  baths?: string;
  furnished?: number | string;
  maxRent?: string;
  minRent?: string;
  page?: string;
  region?: string;
  gym?: number | string;
};

export type TMethod = 'GET' | 'POST' | 'PUT';

export type TOptions = {
  headers: Record<string, string>;
  method: TMethod;
  body?: BodyInit | null;
  cache?: RequestCache;
  credentials: RequestCredentials | undefined;
};

export type RegisterProps = {
  email: string;
  name: string;
  password: string;
};

export interface RegisterResponse {
  data: {
    id: number;
    name: string;
    email: string;
    userType: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  message: string;
  success: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  userType: number;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  message: string;
  success: boolean;
  data: User;
}

export interface FetchProductsResponse {
  products: TProduct[];
  numberOfPages: number;
}

export interface ICreateProperty {
  title: string;
  rentAmount: number;
  numOfBedrooms: number;
  numOfBathrooms: number;
  floorArea: number;
  description: string;
  images: IImage[];
  furnishedStatus: boolean;
  advancePayment: number;
  securityDeposit: number;
  pool: boolean;
  gym: boolean;
  propertyType: number;
  generators: boolean;
  SeparateElectricity: boolean;
  productCategory: number;
  status: number;
  contactNumber: string;
  contactPerson: string;
  locationId: number;
  createdBy: number;
}

export type IImage = {
  url: string;
};
