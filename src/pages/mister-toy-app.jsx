import React from "react";
import { connect } from "react-redux";

import { loadToys } from "../store/actions/toys.action";
import { ToysList } from "../cmp/toys-list";

class _MisterToyApp extends React.Component {
  componentDidMount() {
    this.props.loadToys();
  }
  render() {
    const { toys } = this.props;
    return (
      <section className="mister-toy-app">
        <p>hello from mister toy app</p>
        {toys ? <ToysList toys={toys} /> : <div>loading...</div>}
      </section>
    );
  }
}

function mapStateToProps(storeState) {
  return {
    toys: storeState.toysModule.toys,
  };
}
const mapDispatchToProps = {
  loadToys,
};

export const MisterToyApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MisterToyApp);
