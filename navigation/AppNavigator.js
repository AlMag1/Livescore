import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import FootballScores from "../screens/FootballScores";
import FavoriteLeaguesScreen from "../screens/FavoriteLeaguesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MainTabNavigator from "./MainTabNavigator";
import CustomDrawer from "../components/CustomDrawer";

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
  Favorites: {
    screen: FavoriteLeaguesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(77, 122, 201)"
      },
      headerTitleStyle: {
        color: "rgb(250, 224, 152)"
      }
    }
  }
});

const SettingsNavigator = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(77, 122, 201)"
      },
      headerTitleStyle: {
        color: "rgb(250, 224, 152)"
      }
    }
  }
});

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(77, 122, 201)"
      },
      headerTitleStyle: {
        color: "rgb(250, 224, 152)"
      }
    }
  }
});

const DrawerNavigation = createDrawerNavigator(
  {
    Home: ScoreNavigator,
    Favorites: FavoritesNavigator,
    Settings: SettingsNavigator,
    Profile: ProfileNavigator
  },
  {
    contentOptions: {
      // add your styling here
      activeTintColor: "rgb(77, 122, 201)"
      // itemsContainerStyle: {
      //   marginVertical: 0
      // },
      // iconContainerStyle: {
      //   opacity: 1
      // }
    }
    // drawerBackgroundColor: "rgb(77, 122, 201)"
  }
);

export default createAppContainer(DrawerNavigation);
