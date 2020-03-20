import React from "react";

const styler = {
  position: "floating",
  width: "100%",
  height: "150px",
  backgroundColor: "black",
  color: "white"
};

function Footer() {
  return (
    <div style={styler}>
      <br />
      <br />
      <br />
      <center>
        <li className="list-unstyled">
          <a href="#!">Instagram</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        Raven's Restoration Copyright 2020
      </center>{" "}
    </div>
  );
}

export default Footer;
