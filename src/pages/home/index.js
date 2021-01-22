import React, { useState } from "react";
import SizeFilter from "../../components/common/Filters/SizeFilter";
import Products from "../../components/Products";
import CartDetailViewContainer from "../../containers/product/CartDetailViewContainer";

const HomePage = ({ cart }) => {
  const { itemList = [] } = cart;

  const [showCart, setToggleShowCart] = useState(false);
  const handleSizeClick = (size) => {
    alert(size);
  };

  return (
    <div className="card-body p-0">
      <div className="row">
        <div className="col-2 mt-5">
          <h4>Sizes:</h4>
          <SizeFilter onSizeButtonClicked={handleSizeClick}></SizeFilter>
        </div>
        <div className="col-9 mt-5">
          <Products></Products>
        </div>
        {showCart ? (
          <CartDetailViewContainer
            closePopup={() => setToggleShowCart(false)}
          ></CartDetailViewContainer>
        ) : (
          <div className="col-1">
            <button
              onClick={() => setToggleShowCart(true)}
              type="button"
              className="btn btn-dark cart-btn"
            >
              <i className="fa fa-shopping-cart cart-lg"></i>
              <span className="badge badge-light item-count-batch">
                {Object.keys(itemList).length}
              </span>
              <span className="sr-only"></span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
