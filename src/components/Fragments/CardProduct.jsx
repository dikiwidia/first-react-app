import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow mx-2 my-2 flex flex-col">
      {children}
    </div>
  );
};

const ImagesContent = (props) => {
  const { src, alt } = props;
  return (
    <a href="#">
      <img
        src={src}
        alt={alt}
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </a>
  );
};

const HeaderContent = (props) => {
  const { title, product_id, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <Link to={`/products/${product_id}`}>
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title.substring(0, 20)} ...
        </h5>
        <p className="text-m text-white">{children.substring(0, 100)} ...</p>
      </Link>
    </div>
  );
};

const FooterContent = (props) => {
  const { children, id, handleAddToCart } = props;
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(children);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 py-5">
      <span className="text-xl font-bold text-white">{formattedNumber}</span>
      <Button
        classname="bg-blue-500 text-xl"
        // onClick={() => handleAddToCart(id)}
        onClick={() => dispatch(addToCart({ id: id, qty: 1 }))}
      >
        Add to Cart
      </Button>
    </div>
  );
};

CardProduct.ImagesContent = ImagesContent;
CardProduct.HeaderContent = HeaderContent;
CardProduct.FooterContent = FooterContent;

export default CardProduct;
