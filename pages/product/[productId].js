import React from 'react';
import { useRouter } from "next/router";

const ProductItem = () => {
  const { 
    query: { productId },
  } = useRouter();
  
  return (
    <div>This is our testing page and the query param is: {productId}</div>
  );
};

export default ProductItem;