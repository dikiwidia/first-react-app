import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../service/product.service";
import TableCart from "../components/Fragments/TableCart";

// const products = [
//   {
//     id: 1,
//     title: "Product 1",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat quos corporis. Neque adipisci nihil numquam. Ratione, ea neque. Nam!",
//     price: 120000,
//     image: "https://picsum.photos/400/250?shoes",
//   },
//   {
//     id: 2,
//     title: "Product 2",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     price: 140000,
//     image: "https://picsum.photos/400/250?shoes=2",
//   },
//   {
//     id: 3,
//     title: "Product 3",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat quos corporis. Neque adipisci nihil numquam. Ratione, ea neque. Nam!",
//     price: 160000,
//     image: "https://picsum.photos/400/250?shoes=3",
//   },
// ];

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

const ProductsPage = () => {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id
  //           ? {
  //               ...item,
  //               qty: item.qty + 1,
  //             }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id: id, qty: 1 }]);
  //   }
  // };

  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return acc + product.price * item.qty;
  //     }, 0);
  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart, products]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <NavHeader />
      <div className="flex justify-center py-10">
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.ImagesContent
                  src={product.image}
                  alt={product.title}
                />
                <CardProduct.HeaderContent
                  title={product.title}
                  product_id={product.id}
                >
                  {product.description}
                </CardProduct.HeaderContent>
                <CardProduct.FooterContent id={product.id}>
                  {product.price}
                </CardProduct.FooterContent>
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          {/* <ul>
            {cart.map((item) => (
              <li key={item}>{item.id}</li>
            ))}
          </ul> */}
          <TableCart products={products}></TableCart>
        </div>
      </div>
    </Fragment>
  );
};

const NavHeader = () => {
  if (!token) {
    window.location.href = "/login";
  } else {
    const handleLogout = () => {
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      window.location.href = "/login";
    };
    return (
      <div className="flex justify-end h-20 items-center bg-blue-500 text-white text-semibold px-10">
        {username}
        <Button classname="ml-5 bg-red-500" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    );
  }
};

export default ProductsPage;
