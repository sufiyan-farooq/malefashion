
import axios from "axios";
import "../home.css";
import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Collection() {

  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

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
  const slicedProducts = products.slice(5, 8);

  return (
<section id="collection">
<h2 className="text-3xl font-bold text-center mt-5">Top Sales<span className="text-red-500 text-6xl font-extrabold ">.</span></h2>
        <div className="collections container">
                    {slicedProducts.map((product) => (
              <div className="content">
              <img src={product.image} alt="img" />
              <div className="img-content">
              <NavLink to={`/products/${product.id}`}>
              <FaEye size={85} />
            </NavLink>

              
              </div>
              

            </div>
          ))}
        </div>
    </section>
  );
}




