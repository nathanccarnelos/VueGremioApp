<template>
  <v-app>
    <v-content>
      <v-navigation-drawer clipped absolute v-model="drawer">
        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile :key="item.title" v-for="item in navigationItems">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.label }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="primary" dark dense>
        <v-toolbar-side-icon @click="drawer = true"></v-toolbar-side-icon>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "AppLayout",
  data: () => ({
    drawer: false,
    navigationItems: [{ name: "home", label: "home", icon: "home" }]
  })
};
</script>

<style scoped></style>
