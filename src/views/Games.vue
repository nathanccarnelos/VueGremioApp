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
          <v-flex xs12 sm6>
            <v-card>
              <v-container text-xs-center>
                <v-layout row wrap align-center>
                  <v-flex xs4>
                    <img height="50px" src="../assets/gremio.svg" />
                    <p class="text-uppercase">
                      Gre
                    </p>
                  </v-flex>

                  <v-flex xs4>
                    <img height="50px" src="../assets/atletico-mg.svg" />
                    <p class="text-uppercase">
                      Cam
                    </p>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-tab-item>
        <v-tab-item key="2">
          <v-flex xs12 sm6>
            <v-card>
              <v-container text-xs-center>
                <v-layout row wrap align-center>
                  <v-flex xs4>
                    <img height="50px" src="../assets/gremio.svg" />
                    <p class="text-uppercase">
                      Gre
                    </p>
                  </v-flex>
                  <v-flex xs4 class="text-uppercase title">
                    1 X 0
                  </v-flex>
                  <v-flex xs4>
                    <img height="50px" src="../assets/atletico-mg.svg" />
                    <p class="text-uppercase">
                      Cam
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
      tableSearch: ""
    };
  }
};
</script>

<style scoped></style>
