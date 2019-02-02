<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
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
      <p class="text-xsmall text-faded text-center">Member since <AppDate :timestamp="user.registeredAt" />, last active </p>
      <div class="text-center">
        <hr>
        <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
      </div>
    </div>
    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead">
          Joker's recent activity
        </span>
        <a href="#">See only started threads?</a>
      </div>
      <hr>
      <PostList :posts="userPosts" /> 
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import PostList from '@/components/posts/PostList'
  import {countObjectProperties} from '@/utils'

  export default {
    components: {
      PostList
    },

    computed: {
      ...mapGetters({
        'user': 'authUser'
      }),

      userThreadsCount () {
        return countObjectProperties(this.user.threads)
      },

      userPostsCount () {
        return countObjectProperties(this.user.posts)
      },

      userPosts () {
        return this.user.posts ? Object.values(this.$store.state.posts)
          .filter(post => post.userId === this.user['.key']) : []
      }
    }
  }
</script>