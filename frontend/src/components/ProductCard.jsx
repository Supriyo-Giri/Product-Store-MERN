import axios from "axios";
import deleteIcon from "./delete.png";
import { toast } from "react-toastify";

const ProductCard = (props) => {
  const deleteProduct = async () => {
    const productId = props.pid;
    try {
      await axios.delete(
        `https://product-store-7b65.onrender.com/api/products/${productId}`
      );

      console.log(
        `product with id: ${productId} is deleted from the database!`
      );
      props.fetchData();
      toast.success(`Successfully deleted product, Reload!`);
    } catch (error) {
      console.log(`unable to delete product from the database!`);
      toast.error(`Something went wrong!`);
    }
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={props.image} alt="" className="product-image" />
      </div>
      <br />
      <div className="edit-options">
        <div className="info">
          <p className="product-name">
            {props.name} <br />
            <b>price: Rs.{props.price}</b>
          </p>
        </div>
        <img
          src={deleteIcon}
          alt=""
          className="delete-icon"
          onClick={deleteProduct}
        />
      </div>
    </div>
  );
};

export default ProductCard;
