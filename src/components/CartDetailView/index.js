import React from "react";

const CartDetailView = ({ closePopup, cart }) => {
  const { itemList = [] } = cart;
  const cartItemList = Object.values(itemList);
  return (
    <div className="container cart-detail-popup">
      <button className="btn btn-dark popup-close-btn" onClick={closePopup}>
        X
      </button>
      <div className="row">
        <i class="fa fa-shopping-cart fa-7x"></i>
      </div>
      <div className="container detail-item-container">
        {cartItemList.map((item) => {
          return (
            <div class="card card mb-2">
              <div class="card-body">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="product-image-sm"
                      src={item.details.image}
                    ></img>
                  </div>
                  <div className="col-6">
                    <h6>{item.name}</h6>
                    <div>Quantity : 1</div>
                  </div>
                  <div className="col-3 flex-container">
                    $ {item.details.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {cartItemList.length > 0 && (
          <button class="btn btn-light full-width">Checkout</button>
        )}
      </div>
    </div>
  );
};

export default CartDetailView;
