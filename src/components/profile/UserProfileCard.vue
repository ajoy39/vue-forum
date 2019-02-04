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

