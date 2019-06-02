<template>
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
            <div v-ripple>
              <img height="70px" :src="item.img" />
              <p>{{ item.title }} - R${{ item.value }}</p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Store",
  data() {
    return {
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

<style scoped></style>
