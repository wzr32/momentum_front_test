import { ProductType } from "../modules/ecommerce/products.types";

export const createHistoryStorage = () => {
  if (!localStorage.getItem("history")) {
    localStorage.setItem("history", JSON.stringify([]));
  }
};

export const recentViews = async (item?: ProductType) => {
  if (localStorage.getItem("history")) {
    const history = JSON.parse(localStorage.getItem("history") || "[]");

    if (!history.filter((prod: ProductType) => prod.id === item?.id).length) {
      await history.push(item);
      localStorage.setItem("history", JSON.stringify(history));
    }
  }
};
