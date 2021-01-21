import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/CartAction";

const ProductItem = ({ product, cart }) => {
  let dispatch = useDispatch();
  const { id, details, name } = product;
  const { image, price } = details;
  const { itemList } = cart;

  return (
    <div class="card product-card">
      <div className="image-container">
        <img
          class="card-img-top product-image"
          src={image}
          alt="Card image cap"
        />
      </div>
      <label class="card-title">{name}</label>
      <div class="">
        <hr></hr>
        <label>$ {price}</label>
        <div>
          {itemList.hasOwnProperty(id) ? (
            <button
              class="btn btn-success"
              onClick={() => {
                dispatch(removeFromCart(product));
              }}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              class="btn btn-dark"
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
