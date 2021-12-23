<template>
  <div class="container">
    <div class="col-md-8 mx-auto mt-5">
      <div class="mb-3">
        <router-link :to="{ name: 'create-post' }"
          ><button class="btn btn-primary">Create</button></router-link
        >
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <th scope="row">{{ post.id }}</th>
            <td>{{ post.title }}</td>
            <td>
              <router-link :to="{ name: 'edit-post', params: { id: post.id } }">
                <button class="btn btn-primary me-3">Edit</button></router-link
              >
              <button class="btn btn-danger" @click="this.delete(post.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  async created() {
    await this.fetchPosts();
  },
  methods: {
    ...mapActions("post", ["fetchPosts", "deletePost"]),
    delete(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        console.log(result);
        if (result.isConfirmed) {
          await this.deletePost(id);
          this.$swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          await this.fetchPosts();
        } else {
          this.$swal("Your imaginary file is safe!");
        }
      });
    },
  },
  computed: {
    ...mapGetters("post", ["posts"]),
  },
};
</script>
