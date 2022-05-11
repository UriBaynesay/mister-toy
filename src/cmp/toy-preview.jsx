export function ToyPreview({toy}){
    return <div className="toy-preview-container">
        <div className="toy-preview-img-container">
            <img src={toy.imgUrl} alt=""/>
        </div>
        <h2>{toy.name}</h2>
        <h3>Price : {toy.price}</h3>
    </div>
}