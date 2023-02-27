import "./productCard.css";

function ProductCard({ p }) {
  return (
    <div className="inno_productCard">
      <img src={p.images[0]} />
      <div className="inno_productCard_right">
        <p className="inno_productCard_name">{p.productName.toUpperCase()}</p>
        <p className="inno_productCard_price">{p.price}$</p>
        <p className="inno_productCard_category">{p.category.toUpperCase()}</p>
        <p className="inno_productCard_description">{p.description}</p>
      </div>
    </div>
  );
}
export default ProductCard;
