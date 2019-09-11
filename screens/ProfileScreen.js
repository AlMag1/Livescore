import React, { Component } from "react";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

class ProfileScreen extends Component {
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
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
