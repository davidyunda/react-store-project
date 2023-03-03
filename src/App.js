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
      {/* <Header /> */}
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;