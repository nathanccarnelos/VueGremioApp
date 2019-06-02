<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <v-card>
      <v-card-text>
        <v-container text-xs-center>
          <v-layout align-center row wrap>
            <v-flex xs12>
              <span class="subheading" style="margin-bottom: 0">Ter</span>&nbsp;
              <span class="body-1 text--darken-3" style="color:rgb(97,97,97)"
                >Quarta, 22/05</span
              >
            </v-flex>
            <v-flex xs5>
              <img height="80px" src="../assets/gremio.svg" />
              <p class="text-uppercase">
                Gre
              </p>
            </v-flex>
            <v-flex xs2>
              <span class="display-1">X</span>
            </v-flex>
            <v-flex xs5>
              <img height="80px" src="../assets/Juventude.png" />
              <p class="text-uppercase">
                Juve
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-divider />
      <v-card-actions class="mt-2">
        <v-layout align-center row wrap>
          <v-flex xs12 class="pt-2">
            <v-btn block color="info" disabled>Comprar Ingressos</v-btn>
          </v-flex>
          <v-flex xs12 class="pt-2">
            <v-btn block color="info" disabled>Onde Assistir</v-btn>
          </v-flex>
          <v-flex xs12 class="pt-2">
            <v-btn block color="info" disabled>Transporte</v-btn>
          </v-flex>
          <v-flex xs12 class="pt-2">
            <v-btn block color="info" disabled>Pacote Completo</v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
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
  },
  methods: {
    gameClicked() {
      this.$router.push({ name: "GameDetailedInfos" });
    }
  }
};
</script>

<style scoped></style>
