import React from "react";
import { Dimensions, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import BottomTabNav from "./BottomTabNav";
import About from "../screens/About";

const { height, width } = Dimensions.get("window");

const MainStackNav = createStackNavigator(
  {
    BottomTabNav: {
      screen: BottomTabNav,
      navigationOptions: () => ({
        header: null,
      }),
    },
    About: {
      screen: About,
    },
  },
  {
    headerLayoutPreset: "center",
  }
);

export default createAppContainer(MainStackNav);
