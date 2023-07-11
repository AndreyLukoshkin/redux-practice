import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PageRoutes from "./PageRoutes";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <PageRoutes />
      <ToastContainer position="top-center" />
    </Provider>
  );
};

export default App;
