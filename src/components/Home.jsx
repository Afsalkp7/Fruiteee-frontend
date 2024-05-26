import React, { useState } from 'react'
import SlideBanner from './SlideBanner'
import CategorySection from './CategorySection'
import ProductDisplay from './ProductDisplay'

function Home() {
  const [exploreCategory,setExploreCategory] = useState("All")
  return (
    <>
        <SlideBanner />
        <CategorySection exploreCategory={exploreCategory} setExploreCategory={setExploreCategory}/>
        <ProductDisplay exploreCategory={exploreCategory}/>
    </>
  )
}

export default Home