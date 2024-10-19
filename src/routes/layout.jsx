
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState,useEffect } from "react";
const Loader = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen " >
  <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="Logo" className="mb-4 w-80" />
  <img src="https://www.vigoelectronics.com/assets/images/1571898134loader.gif" className="w-36" alt="Loader" />
</div>
    );
  };
  
  export default function Layout() {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <div id="detail">
              <Outlet />
            </div>
            <Footer />
          </>
        )}
      </>

    
    );
  }