import React, { useEffect, useState } from "react";
import "../styles/categorySection.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "./Image";
import { categories as categoryData } from "../constants/catergory";
function CategorySection() {
  const [categories, setCategories] = useState([]);
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
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
                <Skeleton circle width='7.5vw' height='100px'/>
            </div>
            
            :
            categories.map((item)=>(
                <div key={item.id} className="explore-menu-list-item">
                    <img src={item.categoryImage} />
                    <p>{item.categoryName}</p>
                </div>
            ))}
            
        </div>
        <hr />
    </div>
  );
}

export default CategorySection;
