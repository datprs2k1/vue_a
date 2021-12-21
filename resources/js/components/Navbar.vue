<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div
        class="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center justify-content-lg-start
        "
      >
        <router-link
          :to="{ name: 'home' }"
          class="
            d-flex
            align-items-center
            mb-2 mb-lg-0
            text-white text-decoration-none
          "
        >
          <img
            class="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
            src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
          />
        </router-link>

        <ul
          class="
            nav
            col-12 col-lg-auto
            me-lg-auto
            mb-2
            justify-content-center
            mb-md-0
          "
        >
          <li>
            <router-link :to="{ name: 'home' }" class="nav-link px-2 text-white"
              >Home</router-link
            >
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-white">Post</a>
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            class="form-control form-control-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div v-if="!isLoggedIn" class="text-end">
          <router-link
            :to="{ name: 'login' }"
            class="btn btn-outline-light me-2"
          >
            Login
          </router-link>
          <router-link :to="{ name: 'register' }" class="btn btn-warning"
            >Sign-up</router-link
          >
        </div>
        <div v-else class="text-end">
          <button class="btn btn-warning me-2" @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("auth/logout");
        this.$swal({
          title: "Thành công.",
          text: "Đăng xuất thành công.",
          icon: "success",
        });
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters["auth/isAuthenticated"];
    },
  },
};
</script>
