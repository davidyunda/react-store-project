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
      <div className="card-question border-2 rounded-lg border-slate-500 text-lg font-medium box-content w-64 h-24 text-center content-between">
        <h3>
          Please, Contact us if you have any questions.
        </h3>
      </div>
    </div>
  );
}     

export default App;