import React, { useContext } from "react";
import "../styles/productDisplay.css";
import { StoreContext } from "./StoreContext";
import ProductItem from "./ProductItem";
import { categories } from "../constants/catergory";

function ProductDisplay({exploreCategory}) {
  const {products} = useContext(StoreContext);
  return (
    <div className="product-display" id="product-display">
        <h1>Top products from fruiteee</h1>
        <div className="product-display-list">
            {products.map((item)=>{

                if (exploreCategory === "All" || exploreCategory === item.category){
                    return <ProductItem key={item.id} id={item.id} name={item.name} category={item.category} price={item.price} imageUrl={item.imageUrl} description={item.description}/>
                }
                
            })}
        </div>
    </div>
  )
}

export default ProductDisplay;
