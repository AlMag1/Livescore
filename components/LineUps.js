import React, { Component } from "react";
import { View, ScollView, StyleSheet, Text } from "react-native";

class LineUps extends Component {
  render() {
    // console.log(this.props.data[this.props.awayTeam].formation);
    return this.props.data !== null ? (
      <View style={styles.container}>
        <View style={styles.teamContainer}>
          {this.props.data[this.props.homeTeam].startXI.map(player => (
            <View style={styles.playersContainer} key={player.player_id}>
              <Text style={styles.playerNames}>{player.player}</Text>
              <Text style={styles.position}>{player.pos}</Text>
            </View>
          ))}
        </View>
        <View style={styles.teamContainer}>
          {this.props.data[this.props.awayTeam].startXI.map(player => (
            <View style={styles.playersContainer} key={player.player_id}>
              <Text style={styles.position}>{player.pos}</Text>
              <Text style={styles.awayTeam}>{player.player}</Text>
            </View>
          ))}
        </View>
      </View>
    ) : (
      <View>
        <Text>No Line ups yet</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10
  },
  teamContainer: {
    width: "45%"
    // borderWidth: 1,
    // borderColor: "red"
  },
  playersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // borderWidth: 1,
    // borderColor: "orange",
    marginBottom: 10
  },
  playerNames: {
    width: "70%"
    // borderWidth: 1,
    // borderColor: "green"
  },
  awayTeam: {
    width: "75%",
    textAlign: "right"
  },
  position: {
    fontWeight: "600"
  }
});

export default LineUps;
