<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <p>
      By <a href="#" class="link-unstyled">{{user.name}}</a>,
      <AppDate :timestamp="thread.publishedAt" />.
    </p>
    <PostList :posts="posts"/>
    <PostEditor
      :threadId="id"
      @save="addPost"
    />  
  </div>
</template>
<script>
  import PostList from '@/components/posts/PostList'
  import PostEditor from '@/components/posts/PostEditor'
  
  export default {
    components: {
      PostList,
      PostEditor
    },

    props: {
      id: {
        required: true,
        type: String
      }
    },

    data () {
      return {
        thread: this.$store.state.threads[this.id],
        newPostText: ''
      }
    },

    computed: {
      posts () {
        const postIds = Object.values(this.thread.posts)
        return Object.values(this.$store.state.posts)
          .filter(post => postIds.includes(post['.key']))
      },
      user () {
        return this.$store.state.users[this.thread.userId]
      }
    },

    methods: {
      addPost ({post}) {
        this.$store.dispatch('createPost', post)
      }
    }
  }
</script>

