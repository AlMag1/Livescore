import React, { Component } from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

class CustomHeaderButton extends Component {
  render() {
    return (
      <HeaderButton
        {...this.props}
        IconComponent={Ionicons}
        iconSize={23}
        color="rgb(250, 224, 152)"
      />
    );
  }
}

export default CustomHeaderButton;
