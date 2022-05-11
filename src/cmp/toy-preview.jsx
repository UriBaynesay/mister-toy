import { Link } from "react-router-dom";


export function ToyPreview(props) {
  const { toy } = props;
  return (
    <Link to={`/edit/${toy._id}`}>
      <div className="toy-preview-container">
        <div className="toy-preview-img-container">
          <img src={toy.imgUrl} alt="" />
        </div>
        <h2>{toy.name}</h2>
        <h3>Price : {toy.price}</h3>
      </div>
    </Link>
  );
}
