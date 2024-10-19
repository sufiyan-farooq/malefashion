import axios from "axios";
import "../home.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function Seller() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const {cartItems , addItemToCart , setCartItems } = useContext(CartContext)


  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-24">
        <img src="https://loading.io/assets/mod/spinner/shopping/lg.gif" />
      </div>
    );
  }

  // Slice the array to show only the first 4 products
  const slicedProducts = products.slice(0, 4);

  return (
    <section id="sellers ">
      <div className="seller container ">
        <h2 className="text-4xl font-bold text-center ">Featured Products <span className="text-red-500 text-6xl font-extrabold ">.</span> </h2>
        <div className="best-seller mt-20">
          {slicedProducts.map((product) => (
            <div className="best-p1" key={product.id}>
              <img src={product.image} alt="img" />
              <div className="best-p1-txt">
                <div className="name-of-p pt-10">
                  <p>{product.title}</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bx-star" />
                  <i className="bx bx-star" />
                </div>
                <div className="price">
                  ${product.price}
                  <div className="colors">
                    <i className="bx bxs-circle red" />
                    <i className="bx bxs-circle blue" />
                    <i className="bx bxs-circle white" />
                  </div>
                </div>
                <div className="buy-now pt-4">
                  <button onClick={()=>addItemToCart(product)} type="button" >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



