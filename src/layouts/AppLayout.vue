<template>
  <v-app>
    <v-content>
      <v-toolbar dark color="primary" dense>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>refresh</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "AppLayout"
};
</script>

<style scoped></style>
