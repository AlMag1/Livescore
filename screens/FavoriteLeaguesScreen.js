import React, { Component } from "react";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

class FavoriteLeaguesScreen extends Component {
  static navigationOptions = navData => {
    return {
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="sidebar"
            iconName="md-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    };
  };

  render() {
    return (
      <View>
        <Text>Favorites FavoriteLeaguesScreen</Text>
      </View>
    );
  }
}

export default FavoriteLeaguesScreen;
