import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { createStackNavigator } from "react-navigation-stack";

import TabBarIcon from "../components/TabBarIcon";
import FootballLeagues from "../screens/FootballLeagues";
import BasketballScreen from "../screens/BasketballScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: FootballLeagues
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Football",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-football${focused ? "" : "-outline"}`
          : "md-football"
      }
    />
  )
};

HomeStack.path = "";

const BasketStack = createStackNavigator(
  {
    Basketball: BasketballScreen
  },
  config
);

BasketStack.navigationOptions = {
  tabBarLabel: "Basketball",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-basketball" : "md-basketball"}
    />
  )
};

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  BasketStack
});

tabNavigator.path = "";

export default tabNavigator;
