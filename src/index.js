import React from "react";
import "~/config/ReactotronConfig";
import { Provider } from "react-redux";
import { View, Text } from "react-native";
import store from "./store";

import Routes from "./routes";
// import { Container } from './styles';

import { setNavigator } from "./services/navigation";

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
