import React from "react";
import { Provider } from "react-redux";

import PageRoutes from "./PageRoutes";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <PageRoutes />
    </Provider>
  );
};

export default App;
