<template>
  <div class="profile-card">
      <p class="text-center">
        <img :src="user.avatar" alt="" class="avatar-xlarge">
      </p>
      <h1 class="title">{{ user.username }}</h1>
      <p class="text-lead">{{ user.name }}</p>
      <p class="text-justify">
        {{ user.bio ? user.bio : "No bio provided." }}
      </p>
      <div class="stats">
        <span>{{userPostsCount}} posts</span>
        <span>{{userThreadsCount}} threads</span>
      </div>
      <hr>
      <div class="text-center">
        <router-link
          :to="{name: 'ProfileEdit'}"
          class="btn-green btn-small">
          Edit Profile
        </router-link>
      </div>
    </div>
</template>
<script>
  export default {
    props: {
      user: {
        required: true,
        type: Object
      },

      userPostsCount: {
        required: true,
        type: Number
      },

      userThreadsCount: {
        required: true,
        type: Number
      }
    }
  }
</script>

