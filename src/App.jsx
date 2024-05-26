import About from './components/About'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Home from './components/Home'
import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Shop from './components/Shop'

function App() {

  return (
    <>
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
    </>
  )
}

export default App
