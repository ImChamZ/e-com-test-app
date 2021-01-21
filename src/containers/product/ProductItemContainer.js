import { connect } from "react-redux";
import ProductItem from "../../components/Products/ProductItem";

const mapStateToProps = ({ cart }) => {
  return { cart };
};

export default connect(mapStateToProps, {})(ProductItem);
