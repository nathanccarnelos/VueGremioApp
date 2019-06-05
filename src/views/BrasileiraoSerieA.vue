<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <v-card>
      <v-tabs
        centered
        color="cyan"
        dark
        slider-color="yellow"
        v-model="activeTab"
      >
        <v-tab :key="n" v-for="n in 2">
          {{ n === 1 ? "Tabela" : "Jogos" }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="activeTab">
        <v-tab-item key="1">
          <v-card flat>
            <v-card-text>
              <v-flex offset-xs6 xs6>
                <v-text-field
                  append-icon="search"
                  hide-details
                  label="Search"
                  single-line
                  v-model="tableSearch"
                ></v-text-field>
              </v-flex>
              <v-data-table
                :headers="headers"
                :items="tableItems"
                :search="tableSearch"
                hide-actions
              >
                <template v-slot:items="props">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-left">{{ props.item.points }}</td>
                  <td class="text-xs-left">{{ props.item.games }}</td>
                  <td class="text-xs-left">{{ props.item.victories }}</td>
                  <td class="text-xs-left">{{ props.item.draws }}</td>
                  <td class="text-xs-left">{{ props.item.defeats }}</td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-flex xs12 sm6 v-for="(item, index) in oldGames" :key="index">
            <v-card>
              <v-container text-xs-center>
                <v-layout row wrap align-center>
                  <v-flex xs4>
                    <img height="50px" :src="item.time1.img" />
                    <p class="text-uppercase">
                      {{ item.time1.name }}
                    </p>
                  </v-flex>
                  <v-flex xs4 class="text-uppercase title">
                    {{ item.time1.gols }} X {{ item.time2.gols }}
                  </v-flex>
                  <v-flex xs4>
                    <img height="50px" :src="item.time2.img" />
                    <p class="text-uppercase">
                      {{ item.time2.name }}
                    </p>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BrasileiraoSerieA",
  data() {
    return {
      activeTab: 0,
      tableSearch: "",
      headers: [
        {
          text: "Classificação",
          align: "left",
          sortable: false,
          value: "name"
        },
        {
          text: "P",
          align: "left",
          sortable: false,
          value: "points"
        },
        {
          text: "J",
          align: "left",
          sortable: false,
          value: "games"
        },
        {
          text: "V",
          align: "left",
          sortable: false,
          value: "victories"
        },
        {
          text: "E",
          align: "left",
          sortable: false,
          value: "draws"
        },
        {
          text: "D",
          align: "left",
          sortable: false,
          value: "defeats"
        }
      ],
      tableItems: [
        {
          name: "Grêmio",
          points: 21,
          games: 7,
          victories: 7,
          draws: 0,
          defeats: 0
        },
        {
          name: "Palmeiras",
          points: 13,
          games: 5,
          victories: 4,
          draws: 1,
          defeats: 0
        },
        {
          name: "Flamengo",
          points: 13,
          games: 7,
          victories: 4,
          draws: 1,
          defeats: 2
        },
        {
          name: "Bahia",
          points: 13,
          games: 7,
          victories: 4,
          draws: 1,
          defeats: 2
        },
        {
          name: "Atlético-MG",
          points: 12,
          games: 6,
          victories: 4,
          draws: 0,
          defeats: 2
        },
        {
          name: "Corinthians",
          points: 11,
          games: 6,
          victories: 3,
          draws: 2,
          defeats: 1
        },
        {
          name: "São Paulo",
          points: 11,
          games: 6,
          victories: 3,
          draws: 2,
          defeats: 1
        },
        {
          name: "Santos",
          points: 11,
          games: 6,
          victories: 3,
          draws: 2,
          defeats: 1
        },
        {
          name: "Internacional",
          points: 10,
          games: 6,
          victories: 3,
          draws: 1,
          defeats: 2
        },
        {
          name: "Botafogo",
          points: 10,
          games: 6,
          victories: 3,
          draws: 1,
          defeats: 2
        },
        {
          name: "Ceará",
          points: 9,
          games: 6,
          victories: 3,
          draws: 0,
          defeats: 3
        },
        {
          name: "Athletico-PR",
          points: 7,
          games: 6,
          victories: 2,
          draws: 1,
          defeats: 3
        },
        {
          name: "Chapecoense",
          points: 7,
          games: 6,
          victories: 2,
          draws: 1,
          defeats: 3
        },
        {
          name: "Fortaleza",
          points: 7,
          games: 7,
          victories: 2,
          draws: 1,
          defeats: 4
        },
        {
          name: "Fluminense",
          points: 6,
          games: 6,
          victories: 2,
          draws: 0,
          defeats: 4
        },
        {
          name: "Cruzeiro",
          points: 6,
          games: 6,
          victories: 2,
          draws: 0,
          defeats: 4
        },
        {
          name: "CSA",
          points: 6,
          games: 6,
          victories: 1,
          draws: 3,
          defeats: 2
        }
      ],
      oldGames: [
        {
          data: "Quarta, 22/05",
          time1: {
            img: "https://logodetimes.com/times/gremio/logo-gremio-256.png",
            name: "Gre",
            gols: 4
          },
          time2: {
            img:
              "https://logodetimes.com/times/juventude/logo-juventude-256.png",
            name: "Juve",
            gols: 0
          }
        },
        {
          data: "Terça, 19/05",
          time1: {
            img: "https://logodetimes.com/times/gremio/logo-gremio-256.png",
            name: "Gre",
            gols: 2
          },
          time2: {
            img: "https://logodetimes.com/times/ceara/logo-ceara-256.png",
            name: "Cea",
            gols: 1
          }
        },
        {
          data: "Terça, 11/05",
          time1: {
            img: "https://logodetimes.com/times/gremio/logo-gremio-256.png",
            name: "Gre",
            gols: 3
          },
          time2: {
            img:
              "https://logodetimes.com/times/corinthians/logo-corinthians-256.png",
            name: "Cor",
            gols: 0
          }
        },
        {
          data: "Terça, 05/05",
          time1: {
            img: "https://logodetimes.com/times/gremio/logo-gremio-256.png",
            name: "Gre",
            gols: 5
          },
          time2: {
            img:
              "https://logodetimes.com/times/fluminense/logo-fluminense-256.png",
            name: "Flu",
            gols: 4
          }
        },
        {
          data: "Terça, 01/05",
          time1: {
            img: "https://logodetimes.com/times/gremio/logo-gremio-256.png",
            name: "Gre",
            gols: 5
          },
          time2: {
            img: "https://logodetimes.com/times/avai/logo-avai-5.png",
            name: "Ava",
            gols: 1
          }
        }
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>

<style scoped></style>
