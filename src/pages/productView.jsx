import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import ProductViewCard from "../components/productViewCard";
import { CartContext } from "../context/cartContext";
export default function ProductView(){

const {id} = useParams()
const [viewProduct, setViewProduct] = useState({})
const [ isloading , setLoading ] = useState(false)
const {cartItems , addItemToCart , setCartItems } = useContext(CartContext)

const fetchSingleProduct = async () => {
    try {
        setLoading(true)
        const singleData = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setViewProduct(singleData.data)
      console.log(singleData.data)
    } catch (error) {
      console.log(error);
    } finally {
        setLoading(false)
    }
  };
  useEffect(() => {
    fetchSingleProduct();
  }, []);


  if(isloading){
    return <div className="flex justify-center mt-24" >   <img src="https://loading.io/assets/mod/spinner/shopping/lg.gif"/></div>
  }


 return(
    <ProductViewCard
    title={viewProduct.title}
    categary={viewProduct.categary}
    price={viewProduct.price}
    description={viewProduct.description}
    image={viewProduct.image}
   reviews={viewProduct?.rating?.count}   
   addToCart={()=>addItemToCart(viewProduct)}

 
    /> 
 )
}

