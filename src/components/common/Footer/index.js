import React from "react";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="row">
        <div className="col-12">
          <p className="text-center copyright">
            <small>&copy; Company Name Here {new Date().getFullYear()}</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
