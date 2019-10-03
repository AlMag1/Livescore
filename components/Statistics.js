import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class Statistics extends Component {
  render() {
    const stats = this.props.stats;
    return stats !== null ? (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Ball Possession</Text>
          <View style={styles.stats}>
            <Text>{stats["Ball Possession"].home}</Text>
            <Text>-</Text>
            <Text>{stats["Ball Possession"].away}</Text>
          </View>
          <Text style={styles.title}>Shots on Goal</Text>
          <View style={styles.stats}>
            <Text>{stats["Shots on Goal"].home}</Text>
            <Text>-</Text>
            <Text>{stats["Shots on Goal"].away}</Text>
          </View>
          <Text style={styles.title}>Shots off Goal</Text>
          <View style={styles.stats}>
            <Text>{stats["Shots off Goal"].home}</Text>
            <Text>-</Text>
            <Text>{stats["Shots off Goal"].away}</Text>
          </View>
          <Text style={styles.title}>Total Shots</Text>
          <View style={styles.stats}>
            <Text>{stats["Total Shots"].home}</Text>
            <Text>-</Text>
            <Text>{stats["Total Shots"].away}</Text>
          </View>
          <Text style={styles.title}>Fouls</Text>
          <View style={styles.stats}>
            <Text>{stats.Fouls.home}</Text>
            <Text>-</Text>
            <Text>{stats.Fouls.away}</Text>
          </View>
          <Text style={styles.title}>Offsides</Text>
          <View style={styles.stats}>
            <Text>{stats.Offsides.home}</Text>
            <Text>-</Text>
            <Text>{stats.Offsides.away}</Text>
          </View>
          <Text style={styles.title}>Corner Kicks</Text>
          <View style={styles.stats}>
            <Text>{stats["Corner Kicks"].home}</Text>
            <Text>-</Text>
            <Text>{stats["Corner Kicks"].away}</Text>
          </View>
          <Text style={styles.title}>Yellow Cards</Text>
          <View style={styles.stats}>
            <Text>{stats["Yellow Cards"].home}</Text>
            <Text>-</Text>
            <Text>{stats["Yellow Cards"].away}</Text>
          </View>
          <Text style={styles.title}>Red Cards</Text>
          <View style={styles.stats}>
            <Text>{stats["Red Cards"].home}</Text>
            <Text>-</Text>
            <Text>{stats["Red Cards"].away}</Text>
          </View>
          <Text style={styles.title}>Total passes</Text>
          <View style={styles.stats}>
            <Text>{stats["Total passes"].home}</Text>
            <Text>-</Text>
            <Text>{stats["Total passes"].away}</Text>
          </View>
          <Text style={styles.title}>Passes accurate</Text>
          <View style={styles.stats}>
            <Text>{stats["Passes accurate"].home}</Text>
            <Text>-</Text>
            <Text>{stats["Passes accurate"].away}</Text>
          </View>
        </View>
      </ScrollView>
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
    marginTop: 10
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 10
  },
  title: {
    fontWeight: "600"
  }
});

export default Statistics;
