import React, { useEffect, createContext, useState } from "react";
import getApiProduct from "../api/getAPI";
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categoriesProduct, setCategoriesProduct] = useState([]);

  useEffect(() => {
    const filterProduct = async () => {
      const response = await getApiProduct.getProduct();
      setProducts(response);
    };
    filterProduct();
  }, []);

  useEffect(() => {
    const filterCategories = async () => {
      const response = await getApiProduct.getCategoryProduct();
      setCategoriesProduct(response);
    };
    filterCategories();
  }, []);

  return (
    <ProductContext.Provider value={{ products, categoriesProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
