import React, { useEffect, useState } from "react";
import "../styles/categorySection.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { categories as categoryData } from "../constants/catergory";
function CategorySection({exploreCategory,setExploreCategory}) {
  const [categories, setCategories] = useState([]);
  const skeltonArray = [1,2,3,4,5,6,7,8,9,10]
  useEffect(() => {
    const timer = setTimeout(() => {
      setCategories(categoryData);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">
            FreshnessFreshness you can taste, quality you can trust. Explore the world of Freshness you can taste, quality you can trust. Explore the world of Freshness
        </p>
        <div className="explore-menu-list">
            {
            categories.length==0?
            <div className="explore-menu-list-item-skelton">
              {skeltonArray.map((num)=>(
                <Skeleton key={num} circle width='7.5vw' height='100px'/>
              ))}
            </div>
            
            :
            categories.map((item)=>(
                <div onClick={()=>setExploreCategory(prev=>prev === item.categoryName ? 'All' : item.categoryName)} key={item.id} className="explore-menu-list-item">
                    <img className={exploreCategory === item.categoryName ? 'active' : ''} src={item.categoryImage} />
                    <p>{item.categoryName}</p>
                </div>
            ))}
            
        </div>
        <hr />
    </div>
  );
}

export default CategorySection;
