import "./App.css";
import Header from "./components/Header.js";
import Content from "./components/Content.js";

import data from './data'

function App() {

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
      <Header />
      <section className="cards-list">
        {cards}
      </section>
      <div className="card-question border-2 border-blue-800 rounded-lg border-slate-500 text-lg font-medium box-content w-80 h-36 text-center content-between">
        <p>
          Please, Contact us if you have any questions at:
        </p>
        <p>
          contact-us@qatustore.com or send us a text message at (612)-306-3831
        </p>
      </div>
    </div>
  );
}     

export default App;