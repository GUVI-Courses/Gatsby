import React from "react";
import { Provider } from "react-redux";

import store from "./src/store";

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store} id="root-wrapped-element">
      {element}
    </Provider>
  );
};
