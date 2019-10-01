import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import moment from "moment";
import { agntKey, basicKey } from "../constants/apiKeys";

class FootballScores extends Component {
  state = {
    fixtures: [],
    leagues: [],
    leagueData: [],
    leagueName: "",
    country: "",
    date: moment().format("YYYY-MM-DD"),
    dummyFixtures: [
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/60.png",
          team_id: 60,
          team_name: "West Brom"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 164225,
        goalsAwayTeam: 1,
        goalsHomeTeam: 1,
        homeTeam: {
          logo: "https://media.api-football.com/teams/69.png",
          team_id: 69,
          team_name: "Derby"
        },
        league_id: 565,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 167973,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 267973,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 367973,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 1672973,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 1647973,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 1679713,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 1679573,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 1627973,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 16237973,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 167953273,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 167952373,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 16797133,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 13143167973,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 1674332973,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 1679753253243,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 16791234173,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 165937973,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      },
      {
        awayTeam: {
          logo: "https://media.api-football.com/teams/1379.png",
          team_id: 1379,
          team_name: "Lincoln"
        },
        elapsed: 90,
        event_date: "2019-08-24T11:30:00+00:00",
        event_timestamp: 1566646200,
        firstHalfStart: 1566646200,
        fixture_id: 16592307973,
        goalsAwayTeam: 1,
        goalsHomeTeam: 2,
        homeTeam: {
          logo: "https://media.api-football.com/teams/1354.png",
          team_id: 1354,
          team_name: "Doncaster"
        },
        league_id: 581,
        referee: null,
        round: "Regular Season - 5",
        score: {
          extratime: null,
          fulltime: null,
          halftime: "1-0",
          penalty: null
        },
        secondHalfStart: 1566649800,
        status: "Second Half",
        statusShort: "2H",
        venue: null
      }
    ]
  };

  componentDidMount() {
    const { navigation } = this.props;
    const leagueId = navigation.getParam("id");
    const leagueName = navigation.getParam("leagueName");
    const country = navigation.getParam("country");
    this.setState({ leagueName, country });
    this.getFixtures(leagueId);
  }

  getFixtures = leagueId => {
    axios
      .get(
        `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leagueId}/${this.state.date}`,
        {
          headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": basicKey
          }
        }
      )
      .then(res => {
        this.setState({ fixtures: res.data.api.fixtures });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.fixtures.length > 0 ? (
          this.state.fixtures.map(match => (
            <TouchableOpacity
              key={match.fixture_id}
              onPress={() =>
                this.props.navigation.navigate("MatchDetails", {
                  matchId: match.fixture_id,
                  leagueName: this.state.leagueName,
                  country: this.state.country
                })
              }
            >
              <View style={styles.matchContainer}>
                <View style={styles.imagesContainer}>
                  <Image
                    style={styles.images}
                    source={{ uri: match.homeTeam.logo }}
                  />
                  <Image
                    style={styles.images}
                    source={{ uri: match.awayTeam.logo }}
                  />
                </View>
                <View style={styles.teamsContainer}>
                  <Text style={styles.teams}>{match.homeTeam.team_name}</Text>
                  <Text style={styles.teams}>{match.awayTeam.team_name}</Text>
                </View>
                <View style={styles.elapsed}>
                  <Text>{match.elapsed}'</Text>
                </View>
                <View style={styles.scoresContainer}>
                  <Text style={styles.scores}>{match.goalsHomeTeam}</Text>
                  <Text style={styles.scores}>{match.goalsAwayTeam}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No scores yet</Text>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
  matchContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(207, 212, 209)"
  },
  teamsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    width: "60%",
    paddingLeft: 10,
    height: 70,
    justifyContent: "center"
  },
  teams: {
    marginTop: 5,
    marginBottom: 5
  },
  scoresContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    width: "20%",
    alignItems: "flex-end",
    paddingRight: 10,
    height: 70,
    justifyContent: "center"
  },
  scores: {
    marginTop: 5,
    marginBottom: 5
  },
  elapsed: {
    borderRightWidth: 1,
    borderRightColor: "rgb(207, 212, 209)",
    paddingTop: 20,
    paddingBottom: 20,
    width: "10%",
    alignItems: "flex-end",
    paddingRight: 10,
    height: 70,
    justifyContent: "center"
  },
  imagesContainer: {
    width: "10%",
    height: 60
  },
  images: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    width: 20,
    height: 20
  },
  modal: {
    backgroundColor: "rgb(224, 255, 255)",
    width: "100%",
    height: "50%",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});

export default FootballScores;
