import Cart from "../components/cart"
import { useContext } from "react"
import { CartContext } from "../context/cartContext"
export default function CartPage(){
 
    const {cartItems} = useContext(CartContext)
    return (
        <>
        <Cart cartItems={cartItems} />
        </>
    )
}