import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import PageNotFound from "./Components/Shared/Global/PageNotFound";
import ProductsSlider from "./Components/Shared/Overlay/ProductsSlider";
import { productsRoutes } from "./Routes/productsRoutes";

function App() {
  const { isProductsSliderActive } = useSelector((state) => state.global);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Products />} />

          {productsRoutes.map(({ path, element: Element, id }) => (
            <Route path={path} element={<Element />} key={id} />
          ))}
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />

      {isProductsSliderActive ? <ProductsSlider /> : ""}
    </div>
  );
}

export default App;
