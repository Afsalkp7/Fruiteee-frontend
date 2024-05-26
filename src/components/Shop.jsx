import React, { useState } from 'react'
import CategorySection from './CategorySection'
import ProductDisplay from './ProductDisplay'


function Shop() {
  const [exploreCategory,setExploreCategory] = useState("All")
  return (
    <div>
       <CategorySection exploreCategory={exploreCategory} setExploreCategory={setExploreCategory}/>
        <ProductDisplay exploreCategory={exploreCategory}/>
      
    </div>
  )
}

export default Shop