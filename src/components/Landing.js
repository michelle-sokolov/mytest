import React, { Component } from "react";
import HomeItem from "./HomeItem";
import Principles from "./Principles";

class Landing extends Component {
  render() {
    return (
      <div>
        <center>
          <HomeItem />
          <br />
          <Principles />
          <br />
        </center>
      </div>
    );
  }
}

export default Landing;
