<template>
  <v-container fluid class="mx-auto mt-8" id="form-card">
    <v-card-title>
      <h1 class="display-1" id="centered">Login</h1>
    </v-card-title>
    <v-img :src="require('../assets/Logo.jpeg')" contain height="180" />
    <v-card-text>
      <v-form>
        <v-text-field label="Email" prepend-icon="mdi-account-circle" />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-row justify="space-around" align="center" class="row">
      <v-btn large class="green darken-1 white--text mt-5" width="120">
        Login
      </v-btn>

      <v-btn
        large
        class="grey darken-3 white--text mt-5"
        width="120"
        @click="$router.push({ path: 'register' })"
      >
        Register
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    showPassword: false,
  }),
};
</script>

<style lang="scss" scoped>
#form-card {
  max-width: 450px;
}
#centered {
  text-align: center;
  margin: 0 auto;
}
</style>
