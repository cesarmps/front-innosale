import React from 'react';
import productsJSON from "../../storage/productOwnerProducts.json"
import ProductCard from "./ProductCard"
import "./productList.css"

function ProductList() {

  return (
    <div className="inno_yourproducts_container">
      {productsJSON.map((product) => (
        <ProductCard key={product.id} p={product} />
      ))}
    </div>
  );
}

export default ProductList;