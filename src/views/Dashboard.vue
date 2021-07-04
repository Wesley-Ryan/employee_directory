<template>
  <v-container fluid class="fluid" id="container">
    <v-row justify="center" align="center" class="row">
      <v-col style="height: 100vh" id="profile-tab">
        <v-row justify="center" align="center">
          <v-col>
            <v-avatar color="primary" rounded size="64"> WW </v-avatar>
            <p>kl;dskdl;dkasl;kdl;aksdfkas</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="text-center" style="height: 100vh">
        <h1>Welcome Username</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        title: "Welcome to Vuetify!",
        excerpt: "Thank you for joining our community...",
        new: true,
      },
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
  }),
};
</script>

<style scoped>
#container {
  margin-top: 90px;
}
#profile-tab {
  max-width: 400px;
  border-right: 1px solid grey;
}
</style>
