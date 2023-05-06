import "../App.css";
// import Header from "../components/Header.js";
import Content from "../components/Content.js";
// import ProductInfo from "./components/ProductInfo.js";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import data from '../data'

function Home() {

  // const [currentPage, setCurrentPage] = useState('home')



  const cards = data.map(product => {
    return (
      <Content 
        key={product.ProductID}
        product={product}
      />
    )
  })

  return (
    <div className="App">
      {/* <Header /> */}
      <section className="cards-list">
        {cards}
      </section>
      <div className="card-question border-2 border-blue-800 rounded-lg border-slate-500 text-lg font-medium box-content w-80 h-64 text-center content-between">
        <p>
        If you would like to make a purchase or have any questions about our products, please don't hesitate to contact us via email at:
        </p>
        <p>
          contact-us@qatustore.com or send us a text message at (612)-306-3831.
          Don't forget to include your name and the product you want to buy.
        </p>
      </div>
      {/* <ProductInfo /> */}
     
    </div>
  );
}     

export default Home;