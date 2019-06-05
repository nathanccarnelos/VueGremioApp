<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <v-dialog v-model="dialogOpen" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{ dialogTexts.title }}</v-card-title>
        <v-card-text>{{ dialogTexts.text }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" flat dark @click="dialogOpen = false"
            >fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card>
      <v-card-text>
        <v-container text-xs-center>
          <v-layout align-center row wrap>
            <v-flex xs12>
              <span class="subheading" style="margin-bottom: 0">Ter</span>&nbsp;
              <span class="body-1 text--darken-3" style="color:rgb(97,97,97)">
                {{ selectedGame.data }}
              </span>
            </v-flex>
            <v-flex xs5>
              <img height="80px" :src="selectedGame.time1.img" />
              <p class="text-uppercase">
                {{ selectedGame.time1.name }}
              </p>
            </v-flex>
            <v-flex xs2>
              <span class="display-1">X</span>
            </v-flex>
            <v-flex xs5>
              <img height="80px" :src="selectedGame.time2.img" />
              <p class="text-uppercase">
                {{ selectedGame.time2.name }}
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-divider />
      <v-card-actions class="mt-2">
        <v-layout align-center row wrap>
          <v-flex xs12 class="pt-2">
            <v-btn
              block
              color="info"
              @click.stop="
                moutDialog(
                  'Comprar ingressos',
                  'Aqui o torcedor poderá comprar os ingressos e ativar alertas (notificações) sobre promoções.'
                )
              "
              >Comprar Ingressos</v-btn
            >
          </v-flex>
          <v-flex xs12 class="pt-2">
            <v-btn
              block
              color="info"
              @click.stop="
                moutDialog(
                  'Onde assistir',
                  'Baseado no georeferênciamento do torcedor o aplicativo buscará locais proximos, como bares e restaurantes que estejam exibindo o jogo, bem como suas respectivas avaliações'
                )
              "
              >Onde Assistir</v-btn
            >
          </v-flex>
          <v-flex xs12 class="pt-2">
            <v-btn
              block
              color="info"
              @click.stop="
                moutDialog(
                  'Transporte',
                  'Baseado no georeferênciamento do usuário o aplicativo buscará: passagens aéreas, aplicativos de transporte (uber), ônibus e etc, tudo para levar o torcedor até o estádio ou o local que ele decidir assistir o jogo.'
                )
              "
              >Transporte</v-btn
            >
          </v-flex>
          <v-flex xs12 class="pt-2">
            <v-btn
              block
              color="info"
              @click.stop="
                moutDialog(
                  'Pacote completo',
                  'Aqui temos promoções completas, como: passagem de avião + ingresso, combos de bebida e comida nos bares, bem como ativação de alertas sobre novas promoções.'
                )
              "
              >Pacote Completo</v-btn
            >
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
      dialogTexts: { title: "", text: "" },
      dialogOpen: false,
      tableSearch: ""
    };
  },
  computed: {
    selectedGame() {
      return this.$store.state.nextGameToBuy;
    }
  },
  methods: {
    gameClicked() {
      this.$router.push({ name: "GameDetailedInfos" });
    },
    moutDialog(title, text) {
      this.dialogTexts.title = title;
      this.dialogTexts.text = text;
      this.dialogOpen = true;
    }
  }
};
</script>

<style scoped></style>
