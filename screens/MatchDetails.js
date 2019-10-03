import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { ButtonGroup } from "react-native-elements";
import axios from "axios";
import moment from "moment";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { agntKey, basicKey } from "../constants/apiKeys";
import HalfEvents from "../components/HalfEvents";
import Statistics from "../components/Statistics";
import LineUps from "../components/LineUps";

class MatchDetails extends Component {
  state = {
    matchDetails: [],
    selectedIndex: 0,
    leagueName: "",
    country: "",
    matchId: 0,
    dummyMatch: [
      {
        fixture_id: 214055,
        league_id: 775,
        event_date: "2019-09-15T14:00:00+00:00",
        event_timestamp: 1568556000,
        firstHalfStart: 1568556000,
        secondHalfStart: 1568559600,
        round: "Regular Season - 4",
        status: "Second Half",
        statusShort: "2H",
        elapsed: 46,
        venue: "Abanca-Balaídos",
        referee: null,
        homeTeam: {
          team_id: 538,
          team_name: "Celta Vigo",
          logo: "https://media.api-football.com/teams/538.png"
        },
        awayTeam: {
          team_id: 715,
          team_name: "Granada CF",
          logo: "https://media.api-football.com/teams/715.png"
        },
        goalsHomeTeam: 0,
        goalsAwayTeam: 1,
        score: {
          halftime: "0-1",
          fulltime: null,
          extratime: null,
          penalty: null
        },
        events: [
          {
            elapsed: 11,
            team_id: 538,
            teamName: "Celta Vigo",
            player_id: 47080,
            player: "Jorge",
            type: "Card",
            detail: "Red Card"
          },
          {
            elapsed: 15,
            team_id: 538,
            teamName: "Celta Vigo",
            player_id: 2870,
            player: "N. Araujo",
            type: "subst",
            detail: "B. Mendez"
          },
          {
            elapsed: 19,
            team_id: 715,
            teamName: "Granada CF",
            player_id: 46683,
            player: "G. Sanchez",
            type: "Card",
            detail: "Yellow Card"
          },
          {
            elapsed: 29,
            team_id: 538,
            teamName: "Celta Vigo",
            player_id: 47435,
            player: "F. Beltran",
            type: "Card",
            detail: "Red Card"
          },
          {
            elapsed: 33,
            team_id: 715,
            teamName: "Granada CF",
            player_id: 46683,
            player: "G. Sanchez",
            type: "Goal",
            detail: "Normal Goal"
          },
          {
            elapsed: 39,
            team_id: 538,
            teamName: "Celta Vigo",
            player_id: 934,
            player: "S. Mina",
            type: "Card",
            detail: "Yellow Card"
          },
          {
            elapsed: 44,
            team_id: 715,
            teamName: "Granada CF",
            player_id: 46677,
            player: "V. Diaz",
            type: "Card",
            detail: "Yellow Card"
          },
          {
            elapsed: 45,
            team_id: 538,
            teamName: "Celta Vigo",
            player_id: 1461,
            player: "D. Suarez",
            type: "Card",
            detail: "Yellow Card"
          },
          {
            elapsed: 45,
            team_id: 715,
            teamName: "Granada CF",
            player_id: 46683,
            player: "G. Sanchez",
            type: "Goal",
            detail: "Normal Goal"
          },
          {
            elapsed: 45,
            team_id: 715,
            teamName: "Granada CF",
            player_id: 46808,
            player: "C. Fernandez",
            type: "subst",
            detail: "F. Vico"
          },
          {
            elapsed: 49,
            team_id: 715,
            teamName: "Granada CF",
            player_id: 46683,
            player: "G. Sanchez",
            type: "Goal",
            detail: "Normal Goal"
          },
          {
            elapsed: 52,
            team_id: 538,
            teamName: "Celta Vigo",
            player_id: 934,
            player: "S. Mina",
            type: "Card",
            detail: "Yellow Card"
          },
          {
            elapsed: 63,
            team_id: 715,
            teamName: "Granada CF",
            player_id: 46677,
            player: "V. Diaz",
            type: "Card",
            detail: "Yellow Card"
          },
          {
            elapsed: 87,
            team_id: 538,
            teamName: "Celta Vigo",
            player_id: 1461,
            player: "D. Suarez",
            type: "Card",
            detail: "Yellow Card"
          },
          {
            elapsed: 89,
            team_id: 715,
            teamName: "Granada CF",
            player_id: 46683,
            player: "G. Sanchez",
            type: "Goal",
            detail: "Normal Goal"
          },
          {
            elapsed: 90,
            team_id: 715,
            teamName: "Granada CF",
            player_id: 46808,
            player: "C. Fernandez",
            type: "subst",
            detail: "F. Vico"
          }
        ],
        lineups: {
          "Celta Vigo": {
            formation: "4-4-2",
            startXI: [
              {
                team_id: 538,
                player_id: 47426,
                player: "Rubén Blanco",
                number: 13,
                pos: "G"
              },
              {
                team_id: 538,
                player_id: 47432,
                player: "Hugo Mallo",
                number: 2,
                pos: "D"
              },
              {
                team_id: 538,
                player_id: 1926,
                player: "Joseph Aidoo",
                number: 18,
                pos: "D"
              },
              {
                team_id: 538,
                player_id: 47080,
                player: "Jorge Sáenz",
                number: 16,
                pos: "D"
              },
              {
                team_id: 538,
                player_id: 47433,
                player: "Lucas Olaza",
                number: 15,
                pos: "D"
              },
              {
                team_id: 538,
                player_id: 47440,
                player: "Brais Méndez",
                number: 23,
                pos: "M"
              },
              {
                team_id: 538,
                player_id: 47435,
                player: "Fran Beltran",
                number: 8,
                pos: "M"
              },
              {
                team_id: 538,
                player_id: 47439,
                player: "Stanislav Lobotka",
                number: 14,
                pos: "M"
              },
              {
                team_id: 538,
                player_id: 1461,
                player: "Denis Suárez",
                number: 6,
                pos: "M"
              },
              {
                team_id: 538,
                player_id: 47445,
                player: "Iago Aspas",
                number: 10,
                pos: "F"
              },
              {
                team_id: 538,
                player_id: 934,
                player: "Santi Mina",
                number: 22,
                pos: "F"
              }
            ],
            substitutes: [
              {
                team_id: 538,
                player_id: 47425,
                player: "Sergio Álvarez",
                number: 1,
                pos: "G"
              },
              {
                team_id: 538,
                player_id: 47434,
                player: "Kevin Vazquez",
                number: 20,
                pos: "D"
              },
              {
                team_id: 538,
                player_id: 2870,
                player: "Néstor Araujo",
                number: 4,
                pos: "D"
              },
              {
                team_id: 538,
                player_id: 660,
                player: "Pape Cheikh",
                number: 24,
                pos: "M"
              },
              {
                team_id: 538,
                player_id: 128985,
                player: "Iker Losada",
                number: 36,
                pos: "F"
              },
              {
                team_id: 538,
                player_id: 51616,
                player: "Gabriel Fernández",
                number: 19,
                pos: "F"
              },
              {
                team_id: 538,
                player_id: 47447,
                player: "Pione Sisto",
                number: 11,
                pos: "F"
              }
            ],
            coach: "Fran Escribá"
          },
          "Granada CF": {
            formation: "4-2-3-1",
            startXI: [
              {
                team_id: 715,
                player_id: 46672,
                player: "Rui Silva",
                number: 1,
                pos: "G"
              },
              {
                team_id: 715,
                player_id: 46677,
                player: "Víctor Díaz",
                number: 16,
                pos: "D"
              },
              {
                team_id: 715,
                player_id: 46795,
                player: "Domingos Duarte",
                number: 22,
                pos: "D"
              },
              {
                team_id: 715,
                player_id: 46683,
                player: "Germán Sánchez",
                number: 6,
                pos: "D"
              },
              {
                team_id: 715,
                player_id: 46679,
                player: "Quini",
                number: 17,
                pos: "D"
              },
              {
                team_id: 715,
                player_id: 2449,
                player: "Yangel Herrera",
                number: 21,
                pos: "M"
              },
              {
                team_id: 715,
                player_id: 46687,
                player: "Ángel Montoro",
                number: 19,
                pos: "M"
              },
              {
                team_id: 715,
                player_id: 46689,
                player: "Antonio Puertas",
                number: 10,
                pos: "M"
              },
              {
                team_id: 715,
                player_id: 46693,
                player: "Fede Vico",
                number: 14,
                pos: "M"
              },
              {
                team_id: 715,
                player_id: 2459,
                player: "Darwin Machís",
                number: 23,
                pos: "M"
              },
              {
                team_id: 715,
                player_id: 1375,
                player: "Roberto Soldado",
                number: 9,
                pos: "F"
              }
            ],
            substitutes: [
              {
                team_id: 715,
                player_id: 46673,
                player: "Aarón Escandell",
                number: 13,
                pos: "G"
              },
              {
                team_id: 715,
                player_id: 46680,
                player: "José Antonio Martinez Gil",
                number: 5,
                pos: "D"
              },
              {
                team_id: 715,
                player_id: 2051,
                player: "Maxime Gonalons",
                number: 4,
                pos: "M"
              },
              {
                team_id: 715,
                player_id: 46692,
                player: "Álvaro Vadillo",
                number: 7,
                pos: "M"
              },
              {
                team_id: 715,
                player_id: 46685,
                player: "Ramon Azeez",
                number: 12,
                pos: "M"
              },
              {
                team_id: 715,
                player_id: 46808,
                player: "Carlos Fernández Luna",
                number: 24,
                pos: "F"
              },
              {
                team_id: 715,
                player_id: 46695,
                player: "Adrián Ramos",
                number: 20,
                pos: "F"
              }
            ],
            coach: "Diego Martínez"
          }
        },
        statistics: {
          "Shots on Goal": {
            home: "0",
            away: "2"
          },
          "Shots off Goal": {
            home: "2",
            away: "3"
          },
          "Total Shots": {
            home: "2",
            away: "6"
          },
          "Blocked Shots": {
            home: "0",
            away: "1"
          },
          "Shots insidebox": {
            home: "1",
            away: "3"
          },
          "Shots outsidebox": {
            home: "1",
            away: "3"
          },
          Fouls: {
            home: "6",
            away: "8"
          },
          "Corner Kicks": {
            home: "1",
            away: "3"
          },
          Offsides: {
            home: "1",
            away: "1"
          },
          "Ball Possession": {
            home: "32%",
            away: "68%"
          },
          "Yellow Cards": {
            home: "2",
            away: "2"
          },
          "Red Cards": {
            home: "2",
            away: "0"
          },
          "Goalkeeper Saves": {
            home: "1",
            away: "0"
          },
          "Total passes": {
            home: "104",
            away: "208"
          },
          "Passes accurate": {
            home: "73",
            away: "181"
          },
          "Passes %": {
            home: null,
            away: null
          }
        },
        players: [
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 47426,
            player_name: "Rubén Blanco",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 13,
            position: "G",
            rating: "6.5",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 1,
              assists: 0
            },
            passes: {
              total: 5,
              key: 0,
              accuracy: 45
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 0,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 47432,
            player_name: "Hugo Mallo",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 2,
            position: "D",
            rating: "6.2",
            minutes_played: 52,
            captain: "True",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 7,
              key: 0,
              accuracy: 63
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 2
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 1
            },
            fouls: {
              drawn: 0,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 1926,
            player_name: "Joseph Aidoo",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 18,
            position: "D",
            rating: "6.6",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 1,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 6,
              key: 0,
              accuracy: 75
            },
            tackles: {
              total: 0,
              blocks: 1,
              interceptions: 1
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 0,
              committed: 1
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 47080,
            player_name: "Jorge Sáenz",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 16,
            position: "D",
            rating: "3.0",
            minutes_played: 11,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 2,
              key: 0,
              accuracy: 66
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 0,
              committed: 1
            },
            cards: {
              yellow: 0,
              red: 1
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 47433,
            player_name: "Lucas Olaza",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 15,
            position: "D",
            rating: "6.5",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 6,
              key: 0,
              accuracy: 75
            },
            tackles: {
              total: 1,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 0,
              committed: 1
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 47440,
            player_name: "Brais Méndez",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 23,
            position: "M",
            rating: "6.7",
            minutes_played: 15,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 1,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 1,
              key: 0,
              accuracy: 100
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 1,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 47435,
            player_name: "Fran Beltran",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 8,
            position: "M",
            rating: "5.5",
            minutes_played: 29,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 5,
              key: 0,
              accuracy: 83
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 2
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 1,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 1
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 47439,
            player_name: "Stanislav Lobotka",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 14,
            position: "M",
            rating: "6.7",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 13,
              key: 0,
              accuracy: 76
            },
            tackles: {
              total: 1,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 1,
              success: 1,
              past: 0
            },
            fouls: {
              drawn: 1,
              committed: 1
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 1461,
            player_name: "Denis Suárez",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 6,
            position: "M",
            rating: "6.5",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 6,
              key: 1,
              accuracy: 60
            },
            tackles: {
              total: 1,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 2,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 0,
              committed: 0
            },
            cards: {
              yellow: 1,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 47445,
            player_name: "Iago Aspas",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 10,
            position: "F",
            rating: "6.9",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 9,
              key: 1,
              accuracy: 69
            },
            tackles: {
              total: 1,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 2,
              success: 2,
              past: 0
            },
            fouls: {
              drawn: 3,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 934,
            player_name: "Santi Mina",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 22,
            position: "F",
            rating: "6.5",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 10,
              key: 0,
              accuracy: 90
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 1
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 2
            },
            fouls: {
              drawn: 1,
              committed: 2
            },
            cards: {
              yellow: 1,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 2870,
            player_name: "Néstor Araujo",
            team_id: 538,
            team_name: "Celta Vigo",
            number: 4,
            position: "D",
            rating: "6.5",
            minutes_played: 37,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 3,
              key: 0,
              accuracy: 60
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 0,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 46672,
            player_name: "Rui Silva",
            team_id: 715,
            team_name: "Granada CF",
            number: 1,
            position: "G",
            rating: "6.3",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 7,
              key: 0,
              accuracy: 87
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 0,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 46677,
            player_name: "Víctor Díaz",
            team_id: 715,
            team_name: "Granada CF",
            number: 16,
            position: "D",
            rating: "6.9",
            minutes_played: 52,
            captain: "True",
            substitute: "False",
            offsides: null,
            shots: {
              total: 1,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 20,
              key: 1,
              accuracy: 83
            },
            tackles: {
              total: 1,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 0,
              committed: 1
            },
            cards: {
              yellow: 1,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 46795,
            player_name: "Domingos Duarte",
            team_id: 715,
            team_name: "Granada CF",
            number: 22,
            position: "D",
            rating: "6.7",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 14,
              key: 0,
              accuracy: 93
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 0,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 46683,
            player_name: "Germán Sánchez",
            team_id: 715,
            team_name: "Granada CF",
            number: 6,
            position: "D",
            rating: "7.3",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 1,
              on: 1
            },
            goals: {
              total: 1,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 17,
              key: 0,
              accuracy: 94
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 1,
              committed: 2
            },
            cards: {
              yellow: 1,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 46679,
            player_name: "Quini",
            team_id: 715,
            team_name: "Granada CF",
            number: 17,
            position: "D",
            rating: "6.3",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 15,
              key: 2,
              accuracy: 93
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 1
            },
            fouls: {
              drawn: 0,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 2449,
            player_name: "Yangel Herrera",
            team_id: 715,
            team_name: "Granada CF",
            number: 21,
            position: "M",
            rating: "6.9",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 28,
              key: 1,
              accuracy: 93
            },
            tackles: {
              total: 1,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 1
            },
            fouls: {
              drawn: 0,
              committed: 2
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 46687,
            player_name: "Ángel Montoro",
            team_id: 715,
            team_name: "Granada CF",
            number: 19,
            position: "M",
            rating: "7.2",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 1
            },
            passes: {
              total: 34,
              key: 2,
              accuracy: 87
            },
            tackles: {
              total: 1,
              blocks: 0,
              interceptions: 1
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 0,
              committed: 1
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 46689,
            player_name: "Antonio Puertas",
            team_id: 715,
            team_name: "Granada CF",
            number: 10,
            position: "M",
            rating: "6.3",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 1,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 18,
              key: 0,
              accuracy: 81
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 2,
              success: 1,
              past: 0
            },
            fouls: {
              drawn: 1,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 46693,
            player_name: "Fede Vico",
            team_id: 715,
            team_name: "Granada CF",
            number: 14,
            position: "M",
            rating: "6.3",
            minutes_played: 51,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 1,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 12,
              key: 0,
              accuracy: 80
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 1
            },
            fouls: {
              drawn: 1,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 2459,
            player_name: "Darwin Machís",
            team_id: 715,
            team_name: "Granada CF",
            number: 23,
            position: "M",
            rating: "6.9",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 2,
              on: 1
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 11,
              key: 0,
              accuracy: 73
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 2,
              success: 2,
              past: 0
            },
            fouls: {
              drawn: 1,
              committed: 2
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 1375,
            player_name: "Roberto Soldado",
            team_id: 715,
            team_name: "Granada CF",
            number: 9,
            position: "F",
            rating: "6.7",
            minutes_played: 52,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 5,
              key: 0,
              accuracy: 83
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 2,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            event_id: 214055,
            updateAt: 1568560069,
            player_id: 46808,
            player_name: "Carlos Fernández Luna",
            team_id: 715,
            team_name: "Granada CF",
            number: 24,
            position: "F",
            rating: "–",
            minutes_played: 1,
            captain: "False",
            substitute: "False",
            offsides: null,
            shots: {
              total: 0,
              on: 0
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: 0
            },
            passes: {
              total: 0,
              key: 0,
              accuracy: 0
            },
            tackles: {
              total: 0,
              blocks: 0,
              interceptions: 0
            },
            duels: {
              total: 0,
              won: 0
            },
            dribbles: {
              attempts: 0,
              success: 0,
              past: 0
            },
            fouls: {
              drawn: 0,
              committed: 0
            },
            cards: {
              yellow: 0,
              red: 0
            },
            penalty: {
              won: 0,
              commited: 0,
              success: 0,
              missed: 0,
              saved: 0
            }
          }
        ]
      }
    ]
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  summary = () => <Text>Summary</Text>;
  stats = () => <Text>Stats</Text>;
  chat = () => <Text>Chat</Text>;
  lineups = () => <Text>Line Ups</Text>;

  componentDidMount() {
    const { navigation } = this.props;
    const matchId = navigation.getParam("matchId");
    const leagueName = navigation.getParam("leagueName");
    const country = navigation.getParam("country");
    this.setState({ leagueName, country });
    // this.getMatchDetails(matchId);
    // this.getMatchDetails(214055);
  }

  getMatchDetails = id => {
    axios
      .get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/id/${id}`, {
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": basicKey
        }
      })
      .then(res =>
        this.setState({
          matchDetails: res.data.api.fixtures
        })
      )
      .catch(error => console.log(error));
  };

  render() {
    // console.log(this.state.matchDetails);
    const buttons = [
      { element: this.summary },
      { element: this.stats },
      { element: this.lineups },
      { element: this.chat }
    ];
    const { selectedIndex } = this.state;
    return this.state.dummyMatch.length > 0 ? (
      this.state.dummyMatch.map(match => (
        <View key={match.fixture_id} style={styles.container}>
          <View style={styles.innerTopContainer}>
            <View style={styles.leagueNameContainer}>
              <Text style={styles.leagueName}>
                {this.state.country}:{" "}
                <Text style={{ fontWeight: "600" }}>
                  {this.state.leagueName}
                </Text>
              </Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>
                {moment(match.event_date).format("DD.MMM.YYYY")}
              </Text>
              <Text style={styles.date}>-</Text>
              <Text style={styles.date}>
                {moment(match.event_date).format("HH:mm")}
              </Text>
            </View>
            <View style={styles.logosAndScoreContainer}>
              <View style={styles.teamLogos}>
                <Image
                  style={{
                    width: 50,
                    height: 50
                  }}
                  source={{ uri: match.homeTeam.logo }}
                />
                <Text style={styles.teamNames}>{match.homeTeam.team_name}</Text>
              </View>
              <View style={styles.score}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    textAlign: "center"
                  }}
                >
                  {match.goalsHomeTeam} - {match.goalsAwayTeam}
                </Text>
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  {match.status === "Match Finished" ? "Final" : match.elapsed}
                </Text>
              </View>
              <View style={styles.teamLogos}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{ uri: match.awayTeam.logo }}
                />
                <Text style={styles.teamNames}>{match.awayTeam.team_name}</Text>
              </View>
            </View>
          </View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{
              borderWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: "rgb(207, 212, 209)",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              flexDirection: "row",
              marginLeft: 0,
              marginTop: 0,
              marginBottom: 0,
              marginRight: 0,
              borderRadius: 0
            }}
            innerBorderStyle={{
              width: 0
            }}
            selectedButtonStyle={{
              backgroundColor: "rgb(77, 122, 201)"
            }}
          />
          {selectedIndex === 0 ? (
            <HalfEvents
              halfTimeScore={match.score.halftime}
              fullTimeScore={match.score.fulltime}
              goalsHomeTeam={match.goalsHomeTeam}
              goalsAwayTeam={match.goalsAwayTeam}
              secondHalfStart={match.secondHalfStart}
              status={match.status}
              matchDetails={this.state.dummyMatch}
            />
          ) : null}
          {selectedIndex === 1 ? <Statistics stats={match.statistics} /> : null}
          {selectedIndex === 2 ? (
            <LineUps
              data={match.lineups}
              homeTeam={match.homeTeam.team_name}
              awayTeam={match.awayTeam.team_name}
            />
          ) : null}
        </View>
      ))
    ) : (
      <View>
        <Text>Fetching match details</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerTopContainer: {
    backgroundColor: "rgb(237, 241, 242)"
  },
  leagueNameContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "rgb(207, 212, 209)",
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  leagueName: {
    textTransform: "capitalize",
    textAlign: "center"
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  date: {
    textAlign: "center",
    fontSize: 10,
    minWidth: 100
  },
  logosAndScoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(207, 212, 209)",
    paddingTop: 5,
    paddingBottom: 5
  },
  teamLogos: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 100
  },
  teamNames: {
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
    maxWidth: 100
  }
});

export default MatchDetails;
