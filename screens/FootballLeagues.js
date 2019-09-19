import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import axios from "axios";
import moment from "moment";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import favoriteLeagues from "../constants/FavoriteLeagues";
import HeaderButton from "../components/HeaderButton";
import { agntKey, basicKey } from "../constants/apiKeys";

class FootballLeaguesScreen extends Component {
  state = {
    leagues: [],
    today: moment().format("YYYY-MM-DD"),
    dummyLeagues: [
      {
        league_id: 1,
        name: "2018 Russia World Cup",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 2,
        name: "Championship",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 3,
        name: "Premier League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 4,
        name: "Ligue 1",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 5,
        name: "Ligue 2",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 6,
        name: "Super League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 7,
        name: "Liga League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 8,
        name: "Spanish League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 9,
        name: "Italy League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      },
      {
        league_id: 10,
        name: "French League",
        country: "World",
        country_code: null,
        season: 2018,
        season_start: "2018-06-14",
        season_end: "2018-07-15",
        logo: "https://www.api-football.com/public/leagues/1.png",
        flag: null,
        standings: 0,
        is_current: 1
      }
    ]
  };

  componentDidMount() {
    // this.getLeagues();
  }

  static navigationOptions = navData => {
    return {
      title: "Football",
      headerStyle: {
        textAlign: "center",
        backgroundColor: "rgb(77, 122, 201)"
      },
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,
        color: "rgb(250, 224, 152)",
        fontSize: 23
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

  getLeagues = () => {
    axios
      .get(`https://api-football-v1.p.rapidapi.com/v2/leagues`, {
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": agntKey
        }
      })
      .then(res => {
        this.setState({ leagues: res.data.api.leagues });
      })
      .catch(err => console.log(err));
  };

  renderFavoriteLeagues = () => {
    return (
      <View>
        <Text style={styles.favoriteHeaderTitle}>Favorite Leagues</Text>
        {favoriteLeagues.map(league => {
          return (
            <TouchableOpacity
              key={Math.random()}
              onPress={() =>
                this.props.navigation.navigate("FootballScores", {
                  id: league.league_id,
                  leagueName: league.name,
                  country: league.country
                })
              }
            >
              <View style={styles.leaguesContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    resizeMode="contain"
                    style={styles.leagueImage}
                    source={
                      league.logo.includes(".svg")
                        ? {
                            uri:
                              "data:image/jpeg;base64,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"
                          }
                        : { uri: league.logo }
                    }
                  />
                </View>
                <Text style={styles.innerLeagues}>
                  <Text style={styles.bold}>{league.country}:</Text>{" "}
                  {league.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <Text style={styles.favoriteHeaderTitle}>All Leagues</Text>
      </View>
    );
  };

  renderDummyLeagues = () => {
    return this.state.dummyLeagues.map(league => {
      return (
        <TouchableOpacity
          key={Math.random()}
          onPress={() =>
            this.props.navigation.navigate("FootballScores", {
              id: league.league_id,
              leagueName: league.name,
              country: league.country
            })
          }
        >
          <View style={styles.leaguesContainer}>
            <Image style={styles.leagueImage} source={{ uri: league.logo }} />
            <Text style={styles.innerLeagues}></Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  renderLeagues = () => {
    return this.state.leagues.length > 0 ? (
      this.state.leagues.map(league => {
        if (league.season_end >= this.state.today) {
          return (
            <TouchableOpacity
              key={league.league_id}
              onPress={() =>
                this.props.navigation.navigate("FootballScores", {
                  id: league.league_id,
                  leagueName: league.name,
                  country: league.country
                })
              }
            >
              <View style={styles.leaguesContainer}>
                <Image
                  style={styles.leagueImage}
                  source={{ uri: league.logo }}
                />
                <Text style={styles.innerLeagues}>
                  <Text style={styles.bold}>{league.country}:</Text>{" "}
                  {league.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }
      })
    ) : (
      <View>
        <Text>Fetching Leagues</Text>
      </View>
    );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderFavoriteLeagues()}
        {/* {this.renderDummyLeagues()} */}
        {this.renderLeagues()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  favoriteHeaderTitle: {
    backgroundColor: "rgb(250, 224, 152)",
    // textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    height: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  leaguesContainer: {
    borderBottomWidth: 1,
    borderColor: "rgb(207, 212, 209)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 100
  },
  innerLeagues: {
    fontSize: 15,
    height: 30,
    width: "80%",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left"
  },
  leagueImage: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%"
  },
  imageContainer: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginRight: 5
  },
  bold: {
    fontWeight: "bold"
  }
});

export default FootballLeaguesScreen;
