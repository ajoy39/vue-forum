<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
      <UserProfileCard 
        v-if="!edit"
        :user="user" 
        :userPostsCount="userPostsCount"
        :userThreadsCount="userThreadsCount" />

      <UserProfileCardEditor
        v-else
        :user="user" 
        :userPostsCount="userPostsCount"
        :userThreadsCount="userThreadsCount" />
      
      <p class="text-xsmall text-faded text-center">Member since <AppDate :timestamp="user.registeredAt" />, last active </p>
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
  import UserProfileCard from '@/components/profile/UserProfileCard'
  import UserProfileCardEditor from '@/components/profile/UserProfileCardEditor'
  import {countObjectProperties} from '@/utils'

  export default {
    components: {
      PostList,
      UserProfileCard,
      UserProfileCardEditor
    },

    props: {
      edit: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      ...mapGetters({
        'user': 'authUser'
      }),

      userPosts () {
        return this.user.posts ? Object.values(this.$store.state.posts)
          .filter(post => post.userId === this.user['.key']) : []
      },

      userThreadsCount () {
        return countObjectProperties(this.user.threads)
      },

      userPostsCount () {
        return countObjectProperties(this.user.posts)
      }
    }
  }
</script>