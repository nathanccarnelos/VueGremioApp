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
          {{ n === 1 ? "Próximos" : "Anterior" }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="activeTab">
        <v-tab-item key="1">
          <v-flex xs12 sm6 v-for="(item, index) in gamesToCome" :key="index">
            <v-card ripple @click="gameClicked(item)">
              <v-container text-xs-center>
                <v-layout row wrap align-center>
                  <v-flex xs4>
                    <img height="50px" :src="item.time1.img" />
                    <p class="text-uppercase">
                      {{ item.time1.name }}
                    </p>
                  </v-flex>
                  <v-flex xs1>
                    X
                  </v-flex>
                  <v-flex xs4>
                    <img height="50px" :src="item.time2.img" />
                    <p class="text-uppercase">
                      {{ item.time2.name }}
                    </p>
                  </v-flex>
                  <v-flex xs3>
                    <span class="subheading" style="margin-bottom: 0">Ter</span>
                    <p
                      style="color:rgb(97,97,97)"
                      class="body-1 text--darken-3"
                    >
                      {{ item.data }}
                    </p>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-tab-item>
        <v-tab-item key="2">
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
  name: "Games",
  data() {
    return {
      activeTab: 0,
      tableSearch: "",
      gamesToCome: [
        {
          data: "Quarta, 22/05",
          time1: {
            img: "https://logodetimes.com/times/gremio/logo-gremio-256.png",
            name: "Gre"
          },
          time2: {
            img:
              "https://logodetimes.com/times/juventude/logo-juventude-256.png",
            name: "Juve"
          }
        },

        {
          data: "Sábado, 08/06",
          time1: {
            img: "https://logodetimes.com/times/gremio/logo-gremio-256.png",
            name: "Gre"
          },
          time2: {
            img: "https://logodetimes.com/times/fortaleza/logo-fortaleza-5.png",
            name: "Fort"
          }
        },
        {
          data: "Quarta, 12/06",
          time1: {
            img: "https://logodetimes.com/times/gremio/logo-gremio-256.png",
            name: "Gre"
          },
          time2: {
            img: "https://logodetimes.com/times/botafogo/logo-botafogo-512.png",
            name: "Bot"
          }
        },
        {
          data: "Quarta, 17/07",
          time1: {
            img: "https://logodetimes.com/times/gremio/logo-gremio-256.png",
            name: "Gre"
          },
          time2: {
            img:
              "https://logodetimes.com/times/vasco-da-gama/logo-vasco-da-gama-5.png",
            name: "Vsc"
          }
        },
        {
          data: "Domingo, 21/07",
          time1: {
            img: "https://logodetimes.com/times/gremio/logo-gremio-256.png",
            name: "Gre"
          },
          time2: {
            img:
              "https://logodetimes.com/times/internacional/logo-internacional-256.png",
            name: "Int"
          }
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
      ]
    };
  },
  methods: {
    gameClicked(item) {
      this.$store.dispatch("changeClickedGame", item);
      this.$router.push({ name: "GameDetailedInfos" });
    }
  }
};
</script>

<style scoped></style>
