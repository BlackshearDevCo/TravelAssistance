import React, { Component } from "react";

import { connect } from "react-redux";
import { test } from "../ducks/reducer";

class Home extends Component {
  render() {
    test();
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { test }
)(Home);