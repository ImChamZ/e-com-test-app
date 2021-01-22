import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/CartAction";

const ProductItem = ({ product, cart }) => {
  let dispatch = useDispatch();
  const { id, details, name } = product;
  const { image, price } = details;
  const { itemList } = cart;

  return (
    <div className="card product-card">
      <div className="image-container">
        <img
          className="card-img-top product-image"
          src={image}
          alt="Card image cap"
        />
      </div>
      <label className="card-title">{name}</label>
      <div className="product-card-footer">
        <hr className="product-card-hr" />
        <label>$ {price}</label>
        <div>
          {itemList.hasOwnProperty(id) ? (
            <button
              className="btn btn-success"
              onClick={() => {
                dispatch(removeFromCart(product));
              }}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="btn btn-dark"
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
