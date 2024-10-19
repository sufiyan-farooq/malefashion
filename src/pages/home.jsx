import Hero from "../components/hero";
import Collection from "../components/collection";
import Seller from "../components/sellers";
import News from "../components/news";
import Contact from "../components/contact";
import Gallery from "../components/gallery";




export default function Home (){
    return(
    <div>
        
        <Hero/> 
 <Collection/>
 <Gallery/> 


  <Seller/> 
 <News/>
  <Contact/>  
   </div> 
    )
 }