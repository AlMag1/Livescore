import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import FootballScores from "../screens/FootballScores";
import MainTabNavigator from "./MainTabNavigator";

const ScoreNavigator = createStackNavigator({
  MainTabNavigator: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  FootballScores
});

export default createAppContainer(ScoreNavigator);
