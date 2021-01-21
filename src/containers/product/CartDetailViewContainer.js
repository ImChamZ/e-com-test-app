import { connect } from "react-redux";
import CartDetailView from "../../components/CartDetailView";

const mapStateToProps = ({ cart }) => {
  return { cart };
};

export default connect(mapStateToProps, {})(CartDetailView);
