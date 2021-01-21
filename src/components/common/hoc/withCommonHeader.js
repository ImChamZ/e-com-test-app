import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";

const withCommonHeader = (HocComponent) => {
  return class extends Component {
    render() {
      return (
        <>
          <Header></Header>
          <main role="main" className="container">
            <HocComponent></HocComponent>
          </main>
          <Footer></Footer>
        </>
      );
    }
  };
};

export default withCommonHeader;
