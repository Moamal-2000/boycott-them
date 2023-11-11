import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import Filters from "./Components/Products/Filters";
import Products from "./Components/Products/Products";
import ProductsSlider from "./Components/Shared/Overlay/ProductsSlider";

function App() {
  const { isProductsSliderActive } = useSelector((state) => state.global);

  return (
    <div className="App">
      <Header />
      <Introduction />

      <div className="container">
        <Filters />
        <Products />
      </div>

      <Footer />

      {isProductsSliderActive ? <ProductsSlider /> : ""}
    </div>
  );
}

export default App;
