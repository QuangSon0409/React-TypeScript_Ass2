import IProduct from "../interface/product";
import { instance } from "./instance";

export const getAllProducts = () => {
  return instance.get("/products");
};
export const deleteProduct = (id: string | number) => {
  return instance.delete(`/products/${id}`, {
    headers: {
      Authorization: "Bearer ",
    },
  });
};
export const addProduct = (product: IProduct) => {
  return instance.post("/products/", product, {
    headers: {
      Authorization: "Bearer ",
    },
  });
};

export const putProduct = (product: IProduct, id: number | string) => {
  return instance.post(`/products/${id}`, product, {
    headers: {
      Authorization: "Bearer ",
    },
  });
};
