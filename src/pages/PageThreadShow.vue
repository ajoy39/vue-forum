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
  import sourceData from '@/data'
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
        thread: sourceData.threads[this.id],
        newPostText: ''
      }
    },

    computed: {
      posts () {
        const postIds = Object.values(this.thread.posts)
        return Object.values(sourceData.posts)
          .filter(post => postIds.includes(post['.key']))
      },
      user () {
        return sourceData.users[this.thread.userId]
      }
    },

    methods: {
      addPost ({post}) {
        const postId = post['.key']

        this.$set(sourceData.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)
        this.$set(sourceData.users[post.userId].posts, postId, postId)
      }
    }
  }
</script>

