<template>
  <v-container fluid>
    <v-expansion-panels popout>
      <v-expansion-panel v-for="employee in employees" :key="employee.id">
        <v-expansion-panel-header>
          <v-row align="center" class="spacer" no-gutters> </v-row>
          <v-col cols="2">
            <v-avatar size="36px">
              <img alt="Avatar" :src="employee.avatar" />
            </v-avatar>
          </v-col>
          <v-col cols="10">
            <v-row>
              <p class="ma-4">ID: {{ employee.id }}</p>
              <p class="ma-4">First Name: {{ employee.first_name }}</p>
              <p class="ma-4">Last Name: {{ employee.last_name }}</p>
            </v-row>
          </v-col>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>ID: {{ employee.id }}</p>

          <v-img
            alt="Avatar"
            class="profile-img"
            :src="employee.avatar"
            width="150px"
          />

          <div class="info-row">
            <p>First Name: {{ employee.first_name }}</p>
            <p>Last Name: {{ employee.last_name }}</p>
            <a href="`${employee.email}`"
              ><p>Email: {{ employee.email }}</p></a
            >
          </div>
          <div class="info-row">
            <p>Title : {{ employee.title }}</p>
            <p>Department: {{ employee.department }}</p>
            <p>Role: {{ employee.role }}</p>
          </div>
          <div class="info-row">
            <p>
              Salary:
              {{
                employee.salary == "$0" || employee.salary == ""
                  ? "$55,000 "
                  : employee.salary
              }}
            </p>
            <p>Active: {{ employee.active }}</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels></v-container
  >
</template>

<script>
import axiosAuth from "../utils/axiosWithAuth";

export default {
  name: "EmployeeList",
  data() {
    return {
      employees: [],
      error: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const token = localStorage.getItem("MNTN_Corp");
      axiosAuth
        .get(`/company/admin/employees/all`, {
          headers: {
            authorization: token,
          },
        })
        .then((response) => {
          const returnedEmployees = response.data.data;
          returnedEmployees.forEach((employee) =>
            this.employees.push(employee)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
    disableAccount(userId) {
      axiosAuth
        .put(`/company/account/${userId}}`, { active: false })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    button(data) {
      this.disableAccount(data);
    },
  },
};
</script>

<style scoped>
.info-row {
  display: flex;
  justify-content: center;
}

.info-row p {
  margin: 20px;
}
.profile-img {
  border-radius: 5px;
  height: 200px;
  margin: 0 auto;
}
</style>
