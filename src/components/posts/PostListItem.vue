<template>
  <div class="post">
    <div class="user-info">
      <a href="#">{{ user.name }}</a>
      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="">
      </a>
      <p class="post-count">{{ userPostsCount }} posts</p>
    </div>
    <div class="post-content">
      <div>{{ post.text }}</div>
    </div>
    <div class="post-date text-faded">
      <AppDate :timestamp="post.publishedAt" />
    </div>
  </div>
</template>

<script>
  import {countObjectProperties} from '@/utils'
  export default {
    props: {
      post: {
        required: true,
        type: Object
      }
    },

    computed: {
      user () {
        return this.$store.state.users[this.post.userId]
      },

      userPostsCount () {
        return countObjectProperties(this.user.posts)
      }
    }
  }
</script>

