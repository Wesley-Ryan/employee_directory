<template>
  <v-container fluid class="fluid" id="container">
    <v-app-bar id="nav-bar" dense dark fixed height="80px">
      <v-app-bar-nav-icon>
        <v-img
          :src="require('../assets/logoOnly.png')"
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

        <v-list width="200">
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
    <v-row justify="center" align="center" class="row">
      <v-col style="height: 100%" id="profile-tab">
        <v-row justify="center" align="center">
          <v-col
            ><v-card class="mx-auto my-12" max-width="374">
              <v-img :src="user.avatar" height="350px" />
              <v-card-text>
                <div class="div-row">
                  <v-card-text
                    ><span>First Name:</span> {{ user.firstName }}</v-card-text
                  >
                  <v-card-text>
                    <span>Last Name: </span>{{ user.lastName }}</v-card-text
                  >
                </div>
                <div class="div-row">
                  <v-card-text><span>Role:</span> {{ user.role }}</v-card-text>
                  <v-card-text
                    ><span>Department: </span>
                    {{ user.department }}</v-card-text
                  >
                </div>

                <v-card-text id="email">
                  <span>Email: </span>
                  <a href="`mailto:fakeemail@mail.com`">{{
                    user.email
                  }}</a></v-card-text
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="text-center" style="height: 100vh">
        <h1>Welcome {{ username }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    links: [
      { id: 1, name: "Account", action: console.log("Account") },
      { id: 2, name: "Logout", action: console.log("Logout") },
    ],
    user: {
      avatar:
        "https://images.unsplash.com/photo-1624298087118-aaefd4421092?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      firstName: "Vue",
      lastName: "TestUser",
      email: "vuetest@mntn.com",
      role: "Team Member",
      department: "Sales",
    },
  }),
};
</script>

<style scoped>
#container {
  margin-top: 30px;
}

#profile-tab {
  max-width: 400px;
  border-right: 1px solid grey;
}
#email {
  text-align: center;
}

.div-row {
  display: flex;
  justify-content: space-around;
}
span {
  font-weight: 400;
  color: black;
}
</style>
