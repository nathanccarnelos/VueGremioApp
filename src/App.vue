<template>
  <v-app>
    <v-content>
      <login-layout v-if="!isLogged"></login-layout>
      <app-layout v-else></app-layout>
    </v-content>
  </v-app>
</template>

<script>
import LoginLayout from "./layouts/LoginLayout.vue";
import AppLayout from "./layouts/AppLayout.vue";
export default {
  name: "App",
  components: {
    LoginLayout,
    AppLayout
  },
  data() {
    return {};
  },
  computed: {
    isLogged() {
      return this.$store.state.logged;
    }
  }
};
</script>
