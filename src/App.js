import { Platform } from "react-native";
import { StackNavigator } from "react-navigation";
import { routes } from "./routes/routes";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    const AppNavigator = StackNavigator(routes, {
      initialRouteName: "Main",
      headerMode: "none",
      /**
       * Use modal on iOS because the card mode comes from the right,
       * which conflicts with the drawer example gesture
       */
      mode: Platform.OS === "ios" ? "modal" : "card",
    });
    return <AppNavigator />;
  }
}
