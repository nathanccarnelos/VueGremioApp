<template>
  <v-card>
    <v-card-title>Loja</v-card-title>
    <v-card-text>
      <v-container fluid grid-list-sm>
        <v-layout row wrap>
          <v-flex v-for="i in 6" :key="i" xs4> </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Store"
};
</script>

<style scoped></style>
