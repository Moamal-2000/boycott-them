import Products from "../Components/Products/Products";
import { filterData } from "../data/filtersData";

export const productsRoutes = filterData.map((filter) => {
  const routeObj = {
    path: filter.name,
    element: Products,
    id: filter.id,
  }

  return routeObj;
});
