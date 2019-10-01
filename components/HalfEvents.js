import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

class HalfEvents extends Component {
  renderFirstHalfEvents = () => {
    return this.props.matchDetails.map(match => {
      const homeTeam = match.homeTeam.team_name;
      return match.events.map(event =>
        event.elapsed < 46 ? (
          <View style={{ marginLeft: 10, marginRight: 10 }} key={Math.random()}>
            {event.type === "Goal" ? (
              <Text
                style={
                  homeTeam === event.teamName
                    ? styles.eventLeft
                    : styles.eventRight
                }
              >
                {homeTeam === event.teamName ? (
                  <Text>
                    <Ionicons name="ios-football" size={15} />
                    <Text>
                      {"  "}
                      {event.player}
                      <Text style={{ fontWeight: "600" }}>
                        {"  "}
                        {event.elapsed}'
                      </Text>
                    </Text>
                  </Text>
                ) : (
                  <Text>
                    <Text>
                      <Text style={{ fontWeight: "600" }}>
                        {event.elapsed}'{"  "}
                      </Text>
                      {event.player}
                      {"  "}
                    </Text>
                    <Ionicons name="ios-football" size={15} />
                  </Text>
                )}
              </Text>
            ) : null}
            {event.type === "Card" ? (
              <Text
                style={
                  homeTeam === event.teamName
                    ? styles.eventLeft
                    : styles.eventRight
                }
              >
                {homeTeam === event.teamName ? (
                  <Text>
                    <FontAwesome
                      name="stop"
                      size={15}
                      color={
                        event.detail === "Yellow Card"
                          ? "rgb(255, 255, 36)"
                          : "red"
                      }
                    />
                    <Text>
                      {"  "}
                      {event.player}
                      <Text style={{ fontWeight: "600" }}>
                        {"  "}
                        {event.elapsed}'
                      </Text>
                    </Text>
                  </Text>
                ) : (
                  <Text>
                    <Text>
                      <Text style={{ fontWeight: "600" }}>
                        {event.elapsed}'{"  "}
                      </Text>
                      {event.player}
                      {"  "}
                    </Text>
                    <FontAwesome
                      name="stop"
                      size={15}
                      color={
                        event.detail === "Yellow Card"
                          ? "rgb(255, 255, 36)"
                          : "red"
                      }
                    />
                  </Text>
                )}
              </Text>
            ) : null}
            {event.type === "subst" ? (
              <Text
                style={
                  homeTeam === event.teamName
                    ? styles.eventLeft
                    : styles.eventRight
                }
              >
                {homeTeam === event.teamName ? (
                  <Text>
                    <Text>{event.detail}</Text>
                    {"  "}
                    <FontAwesome name="exchange" size={15} />
                    <Text>
                      {"  "}
                      <Text style={{ color: "rgba(0,0,0,0.5)" }}>
                        {event.player}
                      </Text>
                      <Text style={{ fontWeight: "600" }}>
                        {"  "}
                        {event.elapsed}'
                      </Text>
                    </Text>
                  </Text>
                ) : (
                  <Text>
                    <Text>
                      <Text style={{ fontWeight: "600" }}>
                        {event.elapsed}'{"  "}
                      </Text>
                      <Text style={{ color: "rgba(0,0,0,0.5)" }}>
                        {event.player}
                      </Text>
                      {"  "}
                    </Text>
                    <FontAwesome name="exchange" size={15} />
                    {"  "}
                    <Text>{event.detail}</Text>
                    {"  "}
                  </Text>
                )}
              </Text>
            ) : null}
          </View>
        ) : null
      );
    });
  };

  renderSecondHalfEvents = () => {
    return this.props.matchDetails.map(match => {
      const homeTeam = match.homeTeam.team_name;
      return match.events.map(event =>
        event.elapsed > 45 ? (
          <View style={{ marginLeft: 10, marginRight: 10 }} key={Math.random()}>
            {event.type === "Goal" ? (
              <Text
                style={
                  homeTeam === event.teamName
                    ? styles.eventLeft
                    : styles.eventRight
                }
              >
                {homeTeam === event.teamName ? (
                  <Text>
                    <Ionicons name="ios-football" size={15} />
                    <Text>
                      {"  "}
                      {event.player}
                      <Text style={{ fontWeight: "600" }}>
                        {"  "}
                        {event.elapsed}'
                      </Text>
                    </Text>
                  </Text>
                ) : (
                  <Text>
                    <Text>
                      <Text style={{ fontWeight: "600" }}>
                        {event.elapsed}'{"  "}
                      </Text>
                      {event.player}
                      {"  "}
                    </Text>
                    <Ionicons name="ios-football" size={15} />
                  </Text>
                )}
              </Text>
            ) : null}
            {event.type === "Card" ? (
              <Text
                style={
                  homeTeam === event.teamName
                    ? styles.eventLeft
                    : styles.eventRight
                }
              >
                {homeTeam === event.teamName ? (
                  <Text>
                    <FontAwesome
                      name="stop"
                      size={15}
                      color={
                        event.detail === "Yellow Card"
                          ? "rgb(255, 255, 36)"
                          : "red"
                      }
                    />
                    <Text>
                      {"  "}
                      {event.player}
                      <Text style={{ fontWeight: "600" }}>
                        {"  "}
                        {event.elapsed}'
                      </Text>
                    </Text>
                  </Text>
                ) : (
                  <Text>
                    <Text>
                      <Text style={{ fontWeight: "600" }}>
                        {event.elapsed}'{"  "}
                      </Text>
                      {event.player}
                      {"  "}
                    </Text>
                    <FontAwesome
                      name="stop"
                      size={15}
                      color={
                        event.detail === "Yellow Card"
                          ? "rgb(255, 255, 36)"
                          : "red"
                      }
                    />
                  </Text>
                )}
              </Text>
            ) : null}
            {event.type === "subst" ? (
              <Text
                style={
                  homeTeam === event.teamName
                    ? styles.eventLeft
                    : styles.eventRight
                }
              >
                {homeTeam === event.teamName ? (
                  <Text>
                    <Text>{event.detail}</Text>
                    {"  "}
                    <FontAwesome name="exchange" size={15} />
                    <Text>
                      {"  "}
                      <Text style={{ color: "rgba(0,0,0,0.5)" }}>
                        {event.player}
                      </Text>
                      <Text style={{ fontWeight: "600" }}>
                        {"  "}
                        {event.elapsed}'
                      </Text>
                    </Text>
                  </Text>
                ) : (
                  <Text>
                    <Text>
                      <Text style={{ fontWeight: "600" }}>
                        {event.elapsed}'{"  "}
                      </Text>
                      <Text style={{ color: "rgba(0,0,0,0.5)" }}>
                        {event.player}
                      </Text>
                      {"  "}
                    </Text>
                    <FontAwesome name="exchange" size={15} />
                    {"  "}
                    <Text>{event.detail}</Text>
                    {"  "}
                  </Text>
                )}
              </Text>
            ) : null}
          </View>
        ) : null
      );
    });
  };

  render() {
    return this.props.status !== "Not Started" ? (
      <View>
        <View style={styles.firstHalfContainer}>
          <Text style={styles.firstHalf}>
            1st Half: {this.props.goalsHome} - {this.props.goalsAway}
          </Text>
        </View>
        {this.renderFirstHalfEvents()}
        {this.props.secondHalfStart ? (
          <View style={styles.secondHalfContainer}>
            <Text style={styles.firstHalf}>
              2nd Half: {this.props.goalsHome} - {this.props.goalsAway}
            </Text>
          </View>
        ) : null}

        {this.renderSecondHalfEvents()}
      </View>
    ) : (
      <View>
        <Text>Match not started</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  score: {
    marginTop: "auto",
    marginBottom: "auto",
    flexDirection: "column",
    minWidth: 100
  },
  firstHalfContainer: {
    backgroundColor: "rgb(237, 241, 242)",
    borderBottomColor: "rgb(207, 212, 209)",
    borderBottomWidth: 1,
    borderTopColor: "rgb(207, 212, 209)",
    borderTopWidth: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  firstHalf: {
    textAlign: "center"
  },
  eventLeft: {
    textAlign: "left",
    marginTop: 10,
    marginBottom: 5
  },
  eventRight: {
    textAlign: "right",
    marginTop: 10,
    marginBottom: 5
  },
  secondHalfContainer: {
    backgroundColor: "rgb(237, 241, 242)",
    borderBottomColor: "rgb(207, 212, 209)",
    borderBottomWidth: 1,
    borderTopColor: "rgb(207, 212, 209)",
    borderTopWidth: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HalfEvents;
