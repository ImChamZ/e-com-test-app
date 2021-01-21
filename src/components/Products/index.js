import React, { useEffect, useState } from "react";
import ProductItemContainer from "../../containers/product/ProductItemContainer";
import ProductItem from "./ProductItem";

const Products = ({ size }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"
    )
      .then((res) => res.json())
      .then((result) => {
        setProductList(result);
      });
  }, [size]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">{`${productList.length} Products(s) found.`}</div>
        <div className="col-4"></div>
        <div className="col-4">
          <div class="form-group">
            <select class="form-control" id="sel1">
              <option>All</option>
              <option>T-Shirt</option>
              <option>Dress Shirts</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        {productList.map((product) => (
          <ProductItemContainer product={product}></ProductItemContainer>
        ))}
      </div>
    </div>
  );
};

export default Products;
