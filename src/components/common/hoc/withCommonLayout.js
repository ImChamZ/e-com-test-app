import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";

/**
 * Can be use to display a component with the basic layout
 * @param {Component} HocComponent component to load inside the main container
 */
const withCommonLayout = (HocComponent) => {
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

export default withCommonLayout;
