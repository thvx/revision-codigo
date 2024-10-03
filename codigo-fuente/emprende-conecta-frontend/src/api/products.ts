import { AxiosError } from "axios";
import { productInstance } from './axiosInstances';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image?: string;
    created_at: string;
    updated_at: string;
    product_category: {name: string},
    product_tags: [{id: number, name: string}];
  }
  
  interface ApiResponse<T> {
    success: boolean;
    data: T;
  }
  
  interface ErrorResponse {
    message: string;
  }
  
  
  const handleAxiosError = (error: AxiosError<ErrorResponse>): string => {
    return error.response?.data?.message || error.message;
  };

export const getProductsRequest = async (): Promise<Product[]> => {
    try {
      const response = await productInstance.get<ApiResponse<Product[]>>('/');
      return response.data.data;
    } catch (error) {
      throw new Error(handleAxiosError(error as AxiosError<ErrorResponse>));
    }
  };
  
  export const getProductsByIdRequest = async (id: string): Promise<Product> => {
    try {
      const response = await productInstance.get<ApiResponse<Product>>(`/${id}`);
      return response.data.data;
    } catch (error) {
      throw new Error(handleAxiosError(error as AxiosError<ErrorResponse>));
    }
  };