import { connect } from "react-redux";

import { removeToy } from "../store/actions/toys.action";

function _ToyPreview(props) {
    const {toy}=props
  return (
    <div className="toy-preview-container">
      <div className="toy-preview-img-container">
        <img src={toy.imgUrl} alt="" />
      </div>
      <h2>{toy.name}</h2>
      <h3>Price : {toy.price}</h3>
      <button className="remove-toy-btn" onClick={()=>{props.removeToy(toy._id)}}>Remove</button>
    </div>
  );
}

function mapStateToProps(storeState) {
  return {
  };
}
const mapDispatchToProps = {
  removeToy
};

export const ToyPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ToyPreview);
