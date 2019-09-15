import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
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
                    style={styles.leagueImage}
                    source={{ uri: league.logo }}
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
    width: 35,
    height: 45,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto"
  },
  imageContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    width: "20%"
  },
  bold: {
    fontWeight: "bold"
  }
});

export default FootballLeaguesScreen;
