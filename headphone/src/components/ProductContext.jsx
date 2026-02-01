import { createContext, useState } from "react";
// import imgst01 from "../img/1.jpg";
// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
