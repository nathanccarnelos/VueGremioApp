<template>
  <div>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Desculpe</v-card-title>
        <v-card-text>
          Vamos te avisar assim que esse item estiver disponível.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" flat dark @click="dialog = false">
            fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card>
      <v-card-title>
        <span class="title">Loja</span>
        <v-spacer></v-spacer>
        <v-icon>fa-shopping-cart</v-icon>
      </v-card-title>
      <v-card-text>
        <v-container fluid grid-list-sm text-xs-center>
          <v-layout row wrap align-center>
            <v-flex v-for="(item, key) in products" :key="key" xs4>
              <div v-ripple @click.stop="dialog = true">
                <img height="70px" :src="item.img" />
                <p>{{ item.title }} - R${{ item.value }}</p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Store",
  data() {
    return {
      dialog: false,
      products: [
        {
          img: require("../assets/store/bag1.jpeg"),
          title: "Mochila",
          value: 49.99
        },
        {
          img: require("../assets/store/bag2.jpeg"),
          title: "Mochila",
          value: 49.99
        },
        {
          img: require("../assets/store/bola1.jpeg"),
          title: "Bola grêmio",
          value: 49.99
        },
        {
          img: require("../assets/store/camisaFem1.jpeg"),
          title: "Camisa Feminina",
          value: 99.99
        },
        {
          img: require("../assets/store/CamisaMas1.jpeg"),
          title: "Camisa Masculina",
          value: 119.99
        },
        {
          img: require("../assets/store/camisaMas2.jpeg"),
          title: "Camisa Masculina",
          value: 119.99
        },
        {
          img: require("../assets/store/camisaMas3.jpeg"),
          title: "Camisa Masculina",
          value: 119.99
        },
        {
          img: require("../assets/store/compra1.jpg"),
          title: "Camisa Masculina",
          value: 119.99
        },
        {
          img: require("../assets/store/mascote1.jpeg"),
          title: "Mascote",
          value: 39.99
        },
        {
          img: require("../assets/store/mascote1.jpeg"),
          title: "Mascote",
          value: 39.99
        },
        {
          img: require("../assets/store/mascote1.jpeg"),
          title: "Mascote",
          value: 39.99
        }
      ],
      img: [
        require("../assets/store/bag1.jpeg"),
        require("../assets/store/bag2.jpeg"),
        require("../assets/store/bola1.jpeg")
      ]
    };
  }
};
</script>

<style scoped>
img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>
