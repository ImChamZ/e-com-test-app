import React from "react";
import { SIZE_LIST } from "../../../../const/common";

const SizeFilter = ({ onSizeButtonClicked }) => {
  return (
    <div className="row">
      {SIZE_LIST.map((size) => {
        return (
          <div
            className="col-md-3 size-btn"
            onClick={() => {
              onSizeButtonClicked(size);
            }}
          >
            {size}
          </div>
        );
      })}
    </div>
  );
};

export default SizeFilter;
