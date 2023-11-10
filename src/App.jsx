import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import Filters from "./Components/Products/Filters";
import Products from "./Components/Products/Products";

function App() {
  return <div className="App">
    <Header />
    <Introduction />
    <Filters />
    <Products />
    <Footer />
  </div>;
}

export default App;
