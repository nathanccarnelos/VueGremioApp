<template>
  <v-card>
    <v-card-title>Campeonatos</v-card-title>
    <v-card-text>
      <v-list two-line>
        <template v-for="item in items">
          <v-list-tile
            :key="item.title"
            avatar
            ripple
            @click.stop="routePush(item.route)"
          >
            <v-list-tile-avatar>
              <img :src="item.img" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "championships",
  data: () => ({
    items: [
      {
        img: require("../assets/brasileirao.jpeg"),
        title: "Brasileirão Serie A",
        route: "BrasileiraoSerieA"
      }
    ]
  }),
  methods: {
    routePush(route) {
      this.$router.push({ name: route });
    }
  }
};
</script>

<style scoped></style>
