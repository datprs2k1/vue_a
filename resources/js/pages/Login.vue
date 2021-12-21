<template>
  <div class="container">
    <div class="col-md-4 mx-auto mt-5">
      <h1 class="mb-3 text-center">LOGIN</h1>
      <form @submit.prevent="submit(user)">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            v-model="user.email"
            aria-describedby="emailHelp"
            :class="{ 'is-invalid': errors.email }"
          />
          <div v-if="errors.email" class="invalid-feedback">
            {{ errors.email[0] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            v-model="user.password"
            :class="{ 'is-invalid': errors.password }"
          />
          <div v-if="errors.password" class="invalid-feedback">
            {{ errors.password[0] }}
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    async submit(user) {
      try {
        await this.$store.dispatch("auth/login", user);
        this.$swal({
          title: "Thành công.",
          text: "Đằng nhập thành công.",
          icon: "success",
        });
        this.$router.push({ name: "home" });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>
