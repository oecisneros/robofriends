import React from "react";

const Scrollbar = (props) => (
  <div
    style={{ overflowY: "scroll", border: "1px solid black", height: "900px" }}
  >
    {props.children}
  </div>
);

export default Scrollbar;
