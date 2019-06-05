<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app>
    <v-dialog v-model="logoutDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Sair</v-card-title>
        <v-card-text>Deseja realmente sair da aplicação.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="info" dark @click="logout()">Sim</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" dark @click="logoutDialog = false">não</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-content>
      <v-toolbar color="primary" dark dense>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar>
      <v-navigation-drawer absolute dark temporary v-model="drawer">
        <v-list class="pa-1">
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
              <v-list-tile-sub-title
                ><span class="text--lighten-1"
                  >nivel 3</span
                ></v-list-tile-sub-title
              >
            </v-list-tile-content>
            <v-progress-circular
              :size="50"
              color="info"
              v-model="valueDeterminate"
            >
              <span style="font-size:10px">450/600</span>
            </v-progress-circular>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider light></v-divider>

          <v-list-tile
            :key="item.title"
            @click="goRoute(item.route)"
            v-for="item in menuItems"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "AppLayout",
  data() {
    return {
      drawer: true,
      logoutDialog: false,
      mini: true,
      valueDeterminate: 75,
      menuItems: [
        { title: "Campeonatos", icon: "fa-trophy", route: "Championships" },
        { title: "Jogos", icon: "fa-futbol", route: "Games" },
        { title: "Loja", icon: "fa-shopping-basket", route: "Store" },
        { title: "Sair", icon: "fa-sign-out-alt", route: "Logout" }
      ]
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").catch(() => null);
      this.$router.push({ name: "Login" });
      this.logoutDialog = false;
    },
    goRoute(route) {
      if (route === "Logout") {
        this.logoutDialog = true;
        return;
      }
      this.$router.push({ name: route });
      this.drawer = false;
    }
  }
};
</script>

<style scoped></style>
