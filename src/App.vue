<template>
  <v-app>
    <v-app-bar id="nav-bar" dense dark fixed height="80px">
      <v-app-bar-nav-icon>
        <v-img
          :src="require('./assets/logoOnly.png')"
          contain
          height="90"
          id="img-logo"
        />
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.id"
            @click="
              () => {
                link.action;
              }
            "
          >
            <v-list-item-title> {{ link.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    links: [
      { id: 1, name: "Account", action: console.log("Account") },
      { id: 2, name: "Logout", action: console.log("Logout") },
    ],
  }),
};
</script>

<style>
#nav-bar {
  background: #4a5680;
}
#img-logo {
  margin: 25px 5px 0 15px;
}
</style>
