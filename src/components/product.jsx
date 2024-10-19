import { NavLink } from "react-router-dom";

export default function ProductCard({image,title,categories,price,id}){

    return(

<>

<NavLink to={`/products/${id}`} >
  <div className="w-72 h-96 bg-white  rounded-xl duration-500 hover:scale-105 hover:shadow-xl mb-10">
      <a href="#">
        <img
          src={image}
          alt="Product"
          className="h-64 w-72 object-contain rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{categories}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {title}
          </p>
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${price}
            </p>
       
        
          </div>
        </div>
      </a>
    </div>
    </NavLink>
</>



)

}