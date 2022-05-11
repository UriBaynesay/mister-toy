import React from "react";
import { connect } from "react-redux";

import { loadToys, addToy } from "../store/actions/toys.action";
import { ToysList } from "../cmp/toys-list";

class _MisterToyApp extends React.Component {
  componentDidMount() {
    this.props.loadToys();
  }

  onAddToy = () => {
    const toy = {
      name: "Talking Doll",
      imgUrl: "https://www.babyshop.com/images/698507/card_xlarge.jpg",
      price: 123,
      labels: ["Doll", "Battery Powered", "Baby"],
      createdAt: 1631031801011,
      inStock: true,
    };
    this.props.addToy(toy);
  };

  render() {
    const { toys } = this.props;
    return (
      <section className="mister-toy-app">
        <p>hello from mister toy app</p>
        {toys ? (
          <div>
            <button className="add-toy-btn" onClick={this.onAddToy}>
              Add Toy
            </button>
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
  addToy,
};

export const MisterToyApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MisterToyApp);
