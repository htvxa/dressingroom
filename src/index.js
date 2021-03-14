import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import from redux / react-redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import cateReducer from "./reducers/cate";
import productReducer from "./reducers/product";
import selectedCateReducer from "./reducers/selectedCate";
import selectedProductReducer from "./reducers/selectedProduct";
//create root reducer
const reducer = combineReducers({
  // toàn bộ state của store
  //key: reducerName
  categories: cateReducer,
  productList: productReducer,
  selectedCategory: selectedCateReducer,
  selectedProducts: selectedProductReducer,
});

//create store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
