import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import FootballScores from "../screens/FootballScores";
import FavoriteLeaguesScreen from "../screens/FavoriteLeaguesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
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

const FavoritesNavigator = createStackNavigator({
  Favorites: FavoriteLeaguesScreen
});

const SettingsNavigator = createStackNavigator({
  Settings: SettingsScreen
});

const ProfileNavigator = createStackNavigator({
  Profile: ProfileScreen
});

const DrawerNavigation = createDrawerNavigator({
  Home: ScoreNavigator,
  Favorites: FavoritesNavigator,
  Settings: SettingsNavigator,
  Profile: ProfileNavigator
});

export default createAppContainer(DrawerNavigation);
