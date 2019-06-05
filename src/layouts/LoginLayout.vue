<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-alert
                  :value="showError"
                  color="error"
                  icon="warning"
                  transition="scale-transition"
                  outline
                >
                  nome de usuário ou senha incorretos.
                </v-alert>
                <v-form>
                  <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Nome de usuário"
                    type="text"
                    v-model="username"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Senha"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <span class="caption" style="color: dimgrey">0.1.1</span>
                <v-spacer></v-spacer>
                <v-btn @click.stop="login()" color="primary">Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "LoginLayout",
  data() {
    return {
      username: "",
      password: "",
      showError: false
    };
  },
  methods: {
    login: function() {
      const username = this.username;
      const password = this.password;
      if (username !== "teste" || password !== "123") {
        this.showError = true;
        return;
      }
      this.showError = false;
      this.$store
        .dispatch("tryToLogin", {
          username: username,
          password: password
        })
        .catch(() => null);
      this.$router.push({ name: "Championships" });
    }
  }
};
</script>

<style scoped>
#inspire {
  background-image: url("../assets/thumb.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
