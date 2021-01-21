import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../../actions/CartAction/ActionTypes";

const initialUserState = {
  itemList: {},
};

const cartReducer = (state = initialUserState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const itemList = Object.assign(state.itemList, {
        [payload.id]: payload,
      });
      return {
        ...state,
        itemList,
      };
    case REMOVE_FROM_CART:
      const itemListData = Object.assign({}, state.itemList);
      delete itemListData[payload.id];
      return {
        ...state,
        itemList: itemListData,
      };
    default:
      return state;
  }
};

export default cartReducer;
