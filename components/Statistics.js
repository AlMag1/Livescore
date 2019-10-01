import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Statistics extends Component {
  render() {
    console.log(this.props.stats["Ball Possession"].away);
    const match = this.props;
    return match ? (
      <View style={styles.container}>
        <Text>Ball Possession</Text>
        <View style={styles.possesion}>
          <Text>{match.stats["Ball Possession"].home}</Text>
          <Text>{match.stats["Ball Possession"].away}</Text>
        </View>
        <Text>Ball Possession</Text>
        <View style={styles.possesion}>
          <Text>{match.stats["Ball Possession"].home}</Text>
          <Text>{match.stats["Ball Possession"].away}</Text>
        </View>
        <Text>Ball Possession</Text>
        <View style={styles.possesion}>
          <Text>{match.stats["Ball Possession"].home}</Text>
          <Text>{match.stats["Ball Possession"].away}</Text>
        </View>
        <Text>Ball Possession</Text>
        <View style={styles.possesion}>
          <Text>{match.stats["Ball Possession"].home}</Text>
          <Text>{match.stats["Ball Possession"].away}</Text>
        </View>
      </View>
    ) : (
      <View>
        <Text>No statistics yet</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red"
  },
  possesion: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "green",
    width: "100%"
  }
});

export default Statistics;
