import React, { Component } from "react";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

class SettingsScreen extends Component {
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
      ),
      title: "Settings"
    };
  };

  render() {
    return (
      <View>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

export default SettingsScreen;
