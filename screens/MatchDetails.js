import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";
import moment from "moment";

class MatchDetails extends Component {
  state = {
    matchDetails: {},
    leagueName: "",
    country: "",
    matchId: 0,
    dummyMatch: {
      fixture_id: 443,
      league_id: 2,
      event_date: "2019-05-12T14:00:00+00:00",
      event_timestamp: 1557669600,
      firstHalfStart: 1557669600,
      secondHalfStart: 1557673200,
      round: "Regular Season - 38",
      status: "Match Finished",
      statusShort: "FT",
      elapsed: 90,
      venue: "Tottenham Hotspur Stadium",
      referee: null,
      homeTeam: {
        team_id: 47,
        team_name: "Tottenham",
        logo: "https://media.api-football.com/teams/47.png"
      },
      awayTeam: {
        team_id: 45,
        team_name: "Everton",
        logo: "https://media.api-football.com/teams/45.png"
      },
      goalsHomeTeam: 2,
      goalsAwayTeam: 2,
      score: {
        halftime: "1-0",
        fulltime: "2-2",
        extratime: null,
        penalty: null
      },
      events: [
        {
          elapsed: 3,
          team_id: 47,
          teamName: "Tottenham",
          player_id: 175,
          player: "Eric Dier",
          type: "Goal",
          detail: "Normal Goal"
        },
        {
          elapsed: 46,
          team_id: 47,
          teamName: "Tottenham",
          player_id: 172,
          player: "Dele Alli",
          type: "subst",
          detail: "Victor Wanyama"
        },
        {
          elapsed: 65,
          team_id: 45,
          teamName: "Everton",
          player_id: 2990,
          player: "Idrissa Gueye",
          type: "subst",
          detail: "André Gomes"
        },
        {
          elapsed: 65,
          team_id: 45,
          teamName: "Everton",
          player_id: 18761,
          player: "Bernard",
          type: "subst",
          detail: "Ademola Lookman"
        },
        {
          elapsed: 69,
          team_id: 45,
          teamName: "Everton",
          player_id: 18769,
          player: "Theo Walcott",
          type: "Goal",
          detail: "Normal Goal"
        },
        {
          elapsed: 71,
          team_id: 45,
          teamName: "Everton",
          player_id: 18764,
          player: "Morgan Schneiderlin",
          type: "Card",
          detail: "Yellow Card"
        },
        {
          elapsed: 72,
          team_id: 45,
          teamName: "Everton",
          player_id: 18768,
          player: "Cenk Tosun",
          type: "Goal",
          detail: "Normal Goal"
        },
        {
          elapsed: 75,
          team_id: 47,
          teamName: "Tottenham",
          player_id: 174,
          player: "Christian Eriksen",
          type: "Goal",
          detail: "Normal Goal"
        },
        {
          elapsed: 77,
          team_id: 47,
          teamName: "Tottenham",
          player_id: 176,
          player: "Érik Lamela",
          type: "subst",
          detail: "Oliver Skipp"
        },
        {
          elapsed: 77,
          team_id: 47,
          teamName: "Tottenham",
          player_id: 185,
          player: "Fernando Llorente",
          type: "subst",
          detail: "Vincent Janssen"
        },
        {
          elapsed: 90,
          team_id: 45,
          teamName: "Everton",
          player_id: 2724,
          player: "Lucas Digne",
          type: "Card",
          detail: "Yellow Card"
        }
      ],
      lineups: {
        Tottenham: {
          formation: "4-2-3-1",
          startXI: [
            {
              team_id: 47,
              player_id: 159,
              player: "Hugo Lloris",
              number: 1,
              pos: "G"
            },
            {
              team_id: 47,
              player_id: 171,
              player: "Kyle Walker-Peters",
              number: 16,
              pos: "D"
            },
            {
              team_id: 47,
              player_id: 162,
              player: "Toby Alderweireld",
              number: 4,
              pos: "D"
            },
            {
              team_id: 47,
              player_id: 175,
              player: "Eric Dier",
              number: 15,
              pos: "D"
            },
            {
              team_id: 47,
              player_id: 164,
              player: "Ben Davies",
              number: 33,
              pos: "D"
            },
            {
              team_id: 47,
              player_id: 179,
              player: "Moussa Sissoko",
              number: 17,
              pos: "M"
            },
            {
              team_id: 47,
              player_id: 174,
              player: "Christian Eriksen",
              number: 23,
              pos: "M"
            },
            {
              team_id: 47,
              player_id: 176,
              player: "Érik Lamela",
              number: 11,
              pos: "M"
            },
            {
              team_id: 47,
              player_id: 178,
              player: "Lucas Moura",
              number: 27,
              pos: "M"
            },
            {
              team_id: 47,
              player_id: 172,
              player: "Dele Alli",
              number: 20,
              pos: "M"
            },
            {
              team_id: 47,
              player_id: 185,
              player: "Fernando Llorente",
              number: 18,
              pos: "F"
            }
          ],
          substitutes: [
            {
              team_id: 47,
              player_id: 158,
              player: "Paulo Gazzaniga",
              number: 22,
              pos: "G"
            },
            {
              team_id: 47,
              player_id: 163,
              player: "Serge Aurier",
              number: 24,
              pos: "D"
            },
            {
              team_id: 47,
              player_id: 169,
              player: "Kieran Trippier",
              number: 2,
              pos: "D"
            },
            {
              team_id: 47,
              player_id: 180,
              player: "Oliver Skipp",
              number: 52,
              pos: "M"
            },
            {
              team_id: 47,
              player_id: 177,
              player: "George Marsh",
              number: 47,
              pos: "M"
            },
            {
              team_id: 47,
              player_id: 181,
              player: "Victor Wanyama",
              number: 12,
              pos: "M"
            },
            {
              team_id: 47,
              player_id: 183,
              player: "Vincent Janssen",
              number: 9,
              pos: "F"
            }
          ]
        },
        Everton: {
          formation: "4-2-3-1",
          startXI: [
            {
              team_id: 45,
              player_id: 2932,
              player: "Jordan Pickford",
              number: 1,
              pos: "G"
            },
            {
              team_id: 45,
              player_id: 2726,
              player: "Kurt Zouma",
              number: 5,
              pos: "D"
            },
            {
              team_id: 45,
              player_id: 2934,
              player: "Michael Keane",
              number: 4,
              pos: "D"
            },
            {
              team_id: 45,
              player_id: 2484,
              player: "Yerry Mina",
              number: 13,
              pos: "D"
            },
            {
              team_id: 45,
              player_id: 2724,
              player: "Lucas Digne",
              number: 12,
              pos: "D"
            },
            {
              team_id: 45,
              player_id: 18764,
              player: "Morgan Schneiderlin",
              number: 18,
              pos: "M"
            },
            {
              team_id: 45,
              player_id: 2990,
              player: "Idrissa Gueye",
              number: 17,
              pos: "M"
            },
            {
              team_id: 45,
              player_id: 18769,
              player: "Theo Walcott",
              number: 11,
              pos: "M"
            },
            {
              team_id: 45,
              player_id: 2795,
              player: "Gylfi Sigurðsson",
              number: 10,
              pos: "M"
            },
            {
              team_id: 45,
              player_id: 18761,
              player: "Bernard",
              number: 20,
              pos: "M"
            },
            {
              team_id: 45,
              player_id: 18768,
              player: "Cenk Tosun",
              number: 14,
              pos: "F"
            }
          ],
          substitutes: [
            {
              team_id: 45,
              player_id: 18756,
              player: "Maarten Stekelenburg",
              number: 22,
              pos: "G"
            },
            {
              team_id: 45,
              player_id: 18757,
              player: "Leighton Baines",
              number: 3,
              pos: "D"
            },
            {
              team_id: 45,
              player_id: 18760,
              player: "Jonjoe Kenny",
              number: 43,
              pos: "D"
            },
            {
              team_id: 45,
              player_id: 18759,
              player: "Phil Jagielka",
              number: 6,
              pos: "D"
            },
            {
              team_id: 45,
              player_id: 18765,
              player: "André Gomes",
              number: 8,
              pos: "M"
            },
            {
              team_id: 45,
              player_id: 18762,
              player: "Tom Davies",
              number: 26,
              pos: "M"
            },
            {
              team_id: 45,
              player_id: 18767,
              player: "Ademola Lookman",
              number: 31,
              pos: "F"
            }
          ]
        }
      },
      statistics: {
        "Shots on Goal": { home: "3", away: "9" },
        "Shots off Goal": { home: "5", away: "3" },
        "Total Shots": { home: "11", away: "16" },
        "Blocked Shots": { home: "3", away: "4" },
        "Shots insidebox": { home: "4", away: "14" },
        "Shots outsidebox": { home: "7", away: "2" },
        Fouls: { home: "10", away: "13" },
        "Corner Kicks": { home: "7", away: "4" },
        Offsides: { home: "2", away: "1" },
        "Ball Possession": { home: "55%", away: "45%" },
        "Yellow Cards": { home: "0", away: "2" },
        "Red Cards": { home: null, away: null },
        "Goalkeeper Saves": { home: "7", away: "1" },
        "Total passes": { home: "543", away: "436" },
        "Passes accurate": { home: "449", away: "355" },
        "Passes %": { home: "83%", away: "81%" }
      },
      players: [
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 159,
          player_name: "Hugo Lloris",
          team_id: 47,
          team_name: "Tottenham",
          number: 1,
          position: "G",
          rating: "7.4",
          minutes_played: 90,
          captain: "True",
          substitute: "False",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 2, assists: 0 },
          passes: { total: 23, key: 0, accuracy: 67 },
          tackles: { total: 0, blocks: 0, interceptions: 0 },
          duels: { total: 0, won: 0 },
          dribbles: { attempts: 0, success: 0, past: 0 },
          fouls: { drawn: 0, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 171,
          player_name: "Kyle Walker-Peters",
          team_id: 47,
          team_name: "Tottenham",
          number: 16,
          position: "D",
          rating: "6.5",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 1, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 33, key: 0, accuracy: 84 },
          tackles: { total: 1, blocks: 0, interceptions: 2 },
          duels: { total: 15, won: 8 },
          dribbles: { attempts: 3, success: 2, past: 0 },
          fouls: { drawn: 2, committed: 2 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 162,
          player_name: "Toby Alderweireld",
          team_id: 47,
          team_name: "Tottenham",
          number: 4,
          position: "D",
          rating: "6.9",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 57, key: 0, accuracy: 77 },
          tackles: { total: 2, blocks: 0, interceptions: 2 },
          duels: { total: 8, won: 6 },
          dribbles: { attempts: 0, success: 0, past: 0 },
          fouls: { drawn: 0, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 175,
          player_name: "Eric Dier",
          team_id: 47,
          team_name: "Tottenham",
          number: 15,
          position: "D",
          rating: "7.4",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 2, on: 1 },
          goals: { total: 1, conceded: 0, assists: 0 },
          passes: { total: 73, key: 0, accuracy: 85 },
          tackles: { total: 0, blocks: 2, interceptions: 0 },
          duels: { total: 7, won: 3 },
          dribbles: { attempts: 0, success: 0, past: 2 },
          fouls: { drawn: 1, committed: 1 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 164,
          player_name: "Ben Davies",
          team_id: 47,
          team_name: "Tottenham",
          number: 33,
          position: "D",
          rating: "6.6",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 39, key: 0, accuracy: 92 },
          tackles: { total: 0, blocks: 1, interceptions: 2 },
          duels: { total: 8, won: 3 },
          dribbles: { attempts: 0, success: 0, past: 0 },
          fouls: { drawn: 0, committed: 2 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 179,
          player_name: "Moussa Sissoko",
          team_id: 47,
          team_name: "Tottenham",
          number: 17,
          position: "M",
          rating: "6.7",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 55, key: 1, accuracy: 94 },
          tackles: { total: 1, blocks: 1, interceptions: 1 },
          duels: { total: 7, won: 3 },
          dribbles: { attempts: 1, success: 1, past: 1 },
          fouls: { drawn: 1, committed: 1 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 174,
          player_name: "Christian Eriksen",
          team_id: 47,
          team_name: "Tottenham",
          number: 23,
          position: "M",
          rating: "7.6",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 3, on: 1 },
          goals: { total: 1, conceded: 0, assists: 0 },
          passes: { total: 52, key: 2, accuracy: 76 },
          tackles: { total: 1, blocks: 0, interceptions: 0 },
          duels: { total: 10, won: 6 },
          dribbles: { attempts: 3, success: 1, past: 1 },
          fouls: { drawn: 1, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 176,
          player_name: "Érik Lamela",
          team_id: 47,
          team_name: "Tottenham",
          number: 11,
          position: "M",
          rating: "6.8",
          minutes_played: 77,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 24, key: 3, accuracy: 77 },
          tackles: { total: 1, blocks: 0, interceptions: 0 },
          duels: { total: 6, won: 3 },
          dribbles: { attempts: 1, success: 0, past: 0 },
          fouls: { drawn: 2, committed: 1 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 178,
          player_name: "Lucas Moura",
          team_id: 47,
          team_name: "Tottenham",
          number: 27,
          position: "M",
          rating: "7.0",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 1, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 22, key: 1, accuracy: 91 },
          tackles: { total: 1, blocks: 0, interceptions: 0 },
          duels: { total: 8, won: 6 },
          dribbles: { attempts: 2, success: 1, past: 0 },
          fouls: { drawn: 2, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 172,
          player_name: "Dele Alli",
          team_id: 47,
          team_name: "Tottenham",
          number: 20,
          position: "M",
          rating: "6.9",
          minutes_played: 45,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 2, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 27, key: 0, accuracy: 81 },
          tackles: { total: 1, blocks: 0, interceptions: 0 },
          duels: { total: 3, won: 2 },
          dribbles: { attempts: 1, success: 0, past: 0 },
          fouls: { drawn: 1, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 185,
          player_name: "Fernando Llorente",
          team_id: 47,
          team_name: "Tottenham",
          number: 18,
          position: "F",
          rating: "7.0",
          minutes_played: 77,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 2, on: 1 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 16, key: 0, accuracy: 69 },
          tackles: { total: 2, blocks: 0, interceptions: 0 },
          duels: { total: 20, won: 10 },
          dribbles: { attempts: 2, success: 2, past: 0 },
          fouls: { drawn: 2, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 180,
          player_name: "Oliver Skipp",
          team_id: 47,
          team_name: "Tottenham",
          number: 52,
          position: "M",
          rating: "6.7",
          minutes_played: 13,
          captain: "False",
          substitute: "True",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 10, key: 0, accuracy: 90 },
          tackles: { total: 0, blocks: 0, interceptions: 0 },
          duels: { total: 2, won: 2 },
          dribbles: { attempts: 0, success: 0, past: 0 },
          fouls: { drawn: 0, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 181,
          player_name: "Victor Wanyama",
          team_id: 47,
          team_name: "Tottenham",
          number: 12,
          position: "M",
          rating: "6.7",
          minutes_played: 45,
          captain: "False",
          substitute: "True",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 16, key: 0, accuracy: 88 },
          tackles: { total: 2, blocks: 0, interceptions: 2 },
          duels: { total: 7, won: 4 },
          dribbles: { attempts: 0, success: 0, past: 0 },
          fouls: { drawn: 1, committed: 2 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 183,
          player_name: "Vincent Janssen",
          team_id: 47,
          team_name: "Tottenham",
          number: 9,
          position: "F",
          rating: "6.6",
          minutes_played: 13,
          captain: "False",
          substitute: "True",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 2, key: 0, accuracy: 66 },
          tackles: { total: 0, blocks: 0, interceptions: 0 },
          duels: { total: 6, won: 3 },
          dribbles: { attempts: 0, success: 0, past: 0 },
          fouls: { drawn: 0, committed: 1 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 2932,
          player_name: "Jordan Pickford",
          team_id: 45,
          team_name: "Everton",
          number: 1,
          position: "G",
          rating: "6.0",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 2, assists: 0 },
          passes: { total: 21, key: 0, accuracy: 70 },
          tackles: { total: 0, blocks: 0, interceptions: 0 },
          duels: { total: 0, won: 0 },
          dribbles: { attempts: 0, success: 0, past: 0 },
          fouls: { drawn: 0, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 2726,
          player_name: "Kurt Zouma",
          team_id: 45,
          team_name: "Everton",
          number: 5,
          position: "D",
          rating: "6.2",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 33, key: 0, accuracy: 75 },
          tackles: { total: 2, blocks: 0, interceptions: 2 },
          duels: { total: 8, won: 4 },
          dribbles: { attempts: 0, success: 0, past: 0 },
          fouls: { drawn: 1, committed: 1 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 2934,
          player_name: "Michael Keane",
          team_id: 45,
          team_name: "Everton",
          number: 4,
          position: "D",
          rating: "7.2",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 3, on: 2 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 46, key: 0, accuracy: 85 },
          tackles: { total: 0, blocks: 2, interceptions: 1 },
          duels: { total: 12, won: 8 },
          dribbles: { attempts: 0, success: 0, past: 0 },
          fouls: { drawn: 0, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 2484,
          player_name: "Yerry Mina",
          team_id: 45,
          team_name: "Everton",
          number: 13,
          position: "D",
          rating: "6.1",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 43, key: 0, accuracy: 89 },
          tackles: { total: 0, blocks: 1, interceptions: 0 },
          duels: { total: 3, won: 2 },
          dribbles: { attempts: 0, success: 0, past: 0 },
          fouls: { drawn: 0, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 2724,
          player_name: "Lucas Digne",
          team_id: 45,
          team_name: "Everton",
          number: 12,
          position: "D",
          rating: "6.8",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 1, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 40, key: 4, accuracy: 71 },
          tackles: { total: 0, blocks: 0, interceptions: 0 },
          duels: { total: 12, won: 7 },
          dribbles: { attempts: 1, success: 0, past: 1 },
          fouls: { drawn: 1, committed: 1 },
          cards: { yellow: 1, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 18764,
          player_name: "Morgan Schneiderlin",
          team_id: 45,
          team_name: "Everton",
          number: 18,
          position: "M",
          rating: "6.3",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 43, key: 0, accuracy: 97 },
          tackles: { total: 1, blocks: 0, interceptions: 1 },
          duels: { total: 11, won: 2 },
          dribbles: { attempts: 2, success: 1, past: 1 },
          fouls: { drawn: 0, committed: 3 },
          cards: { yellow: 1, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 2990,
          player_name: "Idrissa Gueye",
          team_id: 45,
          team_name: "Everton",
          number: 17,
          position: "M",
          rating: "7.1",
          minutes_played: 65,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 27, key: 0, accuracy: 90 },
          tackles: { total: 1, blocks: 0, interceptions: 4 },
          duels: { total: 7, won: 3 },
          dribbles: { attempts: 0, success: 0, past: 1 },
          fouls: { drawn: 0, committed: 2 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 18769,
          player_name: "Theo Walcott",
          team_id: 45,
          team_name: "Everton",
          number: 11,
          position: "M",
          rating: "7.3",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 4, on: 2 },
          goals: { total: 1, conceded: 0, assists: 0 },
          passes: { total: 17, key: 0, accuracy: 81 },
          tackles: { total: 1, blocks: 0, interceptions: 0 },
          duels: { total: 8, won: 4 },
          dribbles: { attempts: 1, success: 0, past: 0 },
          fouls: { drawn: 2, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 2795,
          player_name: "Gylfi Sigurðsson",
          team_id: 45,
          team_name: "Everton",
          number: 10,
          position: "M",
          rating: "7.7",
          minutes_played: 90,
          captain: "True",
          substitute: "False",
          offsides: null,
          shots: { total: 2, on: 1 },
          goals: { total: 0, conceded: 0, assists: 1 },
          passes: { total: 18, key: 3, accuracy: 78 },
          tackles: { total: 2, blocks: 0, interceptions: 2 },
          duels: { total: 9, won: 6 },
          dribbles: { attempts: 3, success: 2, past: 0 },
          fouls: { drawn: 2, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 18761,
          player_name: "Bernard",
          team_id: 45,
          team_name: "Everton",
          number: 20,
          position: "M",
          rating: "5.8",
          minutes_played: 65,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 2, on: 1 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 25, key: 1, accuracy: 73 },
          tackles: { total: 0, blocks: 0, interceptions: 0 },
          duels: { total: 13, won: 3 },
          dribbles: { attempts: 5, success: 1, past: 3 },
          fouls: { drawn: 1, committed: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 18768,
          player_name: "Cenk Tosun",
          team_id: 45,
          team_name: "Everton",
          number: 14,
          position: "F",
          rating: "8.1",
          minutes_played: 90,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 3, on: 2 },
          goals: { total: 1, conceded: 0, assists: 0 },
          passes: { total: 18, key: 3, accuracy: 75 },
          tackles: { total: 1, blocks: 0, interceptions: 1 },
          duels: { total: 15, won: 7 },
          dribbles: { attempts: 0, success: 0, past: 0 },
          fouls: { drawn: 2, committed: 3 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 18765,
          player_name: "André Gomes",
          team_id: 45,
          team_name: "Everton",
          number: 8,
          position: "M",
          rating: "6.3",
          minutes_played: 25,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 0, on: 0 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 14, key: 0, accuracy: 82 },
          tackles: { total: 0, blocks: 0, interceptions: 0 },
          duels: { total: 5, won: 0 },
          dribbles: { attempts: 0, success: 0, past: 1 },
          fouls: { drawn: 0, committed: 2 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        },
        {
          event_id: 443,
          updateAt: 1564409156,
          player_id: 18767,
          player_name: "Ademola Lookman",
          team_id: 45,
          team_name: "Everton",
          number: 31,
          position: "F",
          rating: "6.4",
          minutes_played: 25,
          captain: "False",
          substitute: "False",
          offsides: null,
          shots: { total: 1, on: 1 },
          goals: { total: 0, conceded: 0, assists: 0 },
          passes: { total: 10, key: 0, accuracy: 90 },
          tackles: { total: 1, blocks: 0, interceptions: 0 },
          duels: { total: 4, won: 2 },
          dribbles: { attempts: 1, success: 0, past: 0 },
          fouls: { drawn: 1, committed: 1 },
          cards: { yellow: 0, red: 0 },
          penalty: { won: 0, commited: 0, success: 0, missed: 0, saved: 0 }
        }
      ]
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    const matchId = navigation.getParam("matchId");
    const leagueName = navigation.getParam("leagueName");
    const country = navigation.getParam("country");
    this.setState({ leagueName, country });
    // this.getMatchDetails(matchId);
  }

  getMatchDetails = id => {
    axios
      .get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/id/${id}`)
      .then(res => this.setState({ matchDetails: res.data.fixtures }))
      .catch(error => console.log(error));
  };
  render() {
    // console.log(this.state.matchDetails);
    return (
      <View style={styles.container}>
        <View style={styles.leagueNameContainer}>
          <Text style={styles.leagueName}>
            {this.state.country}:{" "}
            <Text style={{ fontWeight: "600" }}>{this.state.leagueName}</Text>
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {moment(this.state.dummyMatch.event_date).format("DD.MMM.YYYY")}
          </Text>
          <Text style={styles.date}>
            {moment(this.state.dummyMatch.event_date).format("HH:mm")}
          </Text>
        </View>
        <View style={styles.logosAndScoreContainer}>
          <View style={styles.teamLogos}>
            <Image
              style={{
                width: 50,
                height: 50
              }}
              source={{ uri: this.state.dummyMatch.homeTeam.logo }}
            />
            <Text style={styles.teamNames}>
              {this.state.dummyMatch.homeTeam.team_name}
            </Text>
          </View>
          <View style={styles.score}>
            <Text
              style={{ fontSize: 20, fontWeight: "600", textAlign: "center" }}
            >
              {this.state.dummyMatch.goalsHomeTeam} -{" "}
              {this.state.dummyMatch.goalsAwayTeam}
            </Text>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              {this.state.dummyMatch.status === "Match Finished"
                ? "Final"
                : this.state.dummyMatch.elapsed}
            </Text>
          </View>
          <View style={styles.teamLogos}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: this.state.dummyMatch.awayTeam.logo }}
            />
            <Text style={styles.teamNames}>
              {this.state.dummyMatch.awayTeam.team_name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    textTransform: "uppercase",
    textAlign: "center"
  },
  dateContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  date: {
    // textAlign: "center",
    fontSize: 10
  },
  logosAndScoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(207, 212, 209)",
    paddingTop: 5,
    paddingBottom: 5
  },
  score: {
    marginTop: "auto",
    marginBottom: "auto",
    flexDirection: "column"
  },
  teamLogos: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  teamNames: {
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10
  }
});

export default MatchDetails;
