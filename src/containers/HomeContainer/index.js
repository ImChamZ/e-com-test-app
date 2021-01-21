import { connect } from "react-redux";
import Home from "../../pages/home";

const mapStateToProps = ({ cart }) => {
  return { cart };
};

export default connect(mapStateToProps, {})(Home);
