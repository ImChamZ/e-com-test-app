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
    <div class="">
      <div class="card-body">
        <div className="row">
          <div className="col-2">
            <h4>Sizes:</h4>
            <SizeFilter onSizeButtonClicked={handleSizeClick}></SizeFilter>
          </div>
          <div className="col-9">
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
                class="btn btn-primary cart-btn"
              >
                <i class="fa fa-shopping-cart fa-7x"></i>
                <span class="badge badge-light item-count-batch">
                  {Object.keys(itemList).length}
                </span>
                <span class="sr-only"></span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
