import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { loadToys, saveToy } from "../store/actions/toys.action";
import { ToysList } from "../cmp/toys-list";

class _MisterToyApp extends React.Component {
  componentDidMount() {
    this.props.loadToys();
  }

  onsaveToy = () => {
    const toy = {
      
    };
    this.props.saveToy(toy);
  };

  render() {
    const { toys } = this.props;
    return (
      <section className="mister-toy-app">
        <p>hello from mister toy app</p>
        {toys ? (
          <div>
            <Link to="/edit/">
              <button className="add-toy-btn">
                Add Toy
              </button>
            </Link>
            <ToysList toys={toys} />
          </div>
        ) : (
          <div>loading...</div>
        )}
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
  saveToy,
};

export const MisterToyApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MisterToyApp);
