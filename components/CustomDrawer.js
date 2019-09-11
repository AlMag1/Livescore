import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";

class CustomDrawer extends Component {
  render() {
    return (
      <View>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: "always", horizontal: "never" }}
        >
          <DrawerNavigatorItems {...this.props} />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CustomDrawer;
