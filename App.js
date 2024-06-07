import React from "react";
import { Amplify } from "aws-amplify";
import awsConfig from "./config/aws-config";
import { AppNavigator } from "./navigation/AppNavigator";
import HideBottomTabProvider from "./context/HideBottomTabProvider";
import store from "./redux/store";
import { Provider } from "react-redux";
import InvestmentProvider from "./context/InvestmentProvider";

Amplify.configure(awsConfig);

function App() {
  return (
    <Provider store={store}>
      <InvestmentProvider>
        <HideBottomTabProvider>
          <AppNavigator />
        </HideBottomTabProvider>
      </InvestmentProvider>
    </Provider>
  );
}

export default App;
