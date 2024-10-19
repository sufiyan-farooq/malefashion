import { Badge, Drawer } from "antd";
import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import Cart from "./cart"; 
import "../home.css";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <input type="checkbox" id="checkbox" />
        <div className="hamburger-lines">
          <span className="line line1" />
          <span className="line line2" />
          <span className="line line3" />
        </div>
        <ul className="menu-items">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Product</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            {/* When cart icon is clicked, show the drawer */}
            <Badge count={cartItems.length} onClick={showDrawer}>
              <FaShoppingCart style={{cursor:'pointer'}} fontSize={30} />
            </Badge>
          </li>
        </ul>

        <div className="logo">
          <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="Logo" />
        </div>
      </div>

      {/* Drawer Component */}
      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
        width={400}  // Adjust width as needed
      >
        <Cart cartItems={cartItems} /> {/* Display the Cart component inside the drawer */}
      </Drawer>
    </nav>
  );
}
