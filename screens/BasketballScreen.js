import React, { Component } from "react";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import axios from "axios";

import HeaderButton from "../components/HeaderButton";

class BasketballScores extends Component {
  static navigationOptions = navData => {
    return {
      title: "Basketball",
      headerStyle: {
        textAlign: "center",
        backgroundColor: "rgb(77, 122, 201)"
      },
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,
        color: "rgb(250, 224, 152)"
      },
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
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="sidebar" iconName="ios-search" onPress={() => {}} />
        </HeaderButtons>
      )
    };
  };

  // ab970ac598945c268269288aadf28d3b6f1c3771d66467af8f8fee7ee3e72cfd
  // https://allsportsapi.com/api/basketball/?met=Leagues&APIkey=!_your_account_APIkey_!

  componentDidMount() {
    // this.getLeagues();
  }

  getLeagues = () => {
    axios
      .get(
        "https://allsportsapi.com/api/basketball/?met=Livescore&APIkey=ab970ac598945c268269288aadf28d3b6f1c3771d66467af8f8fee7ee3e72cfd"
      )
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View>
        <Text>Basketball scores</Text>
      </View>
    );
  }
}

export default BasketballScores;
