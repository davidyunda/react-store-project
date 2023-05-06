import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import SingleProduct from "./components/SingleProduct";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products/:productID' element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
