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
                class="btn btn-primary"
              >
                Cart{" "}
                <span class="badge badge-light">
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
