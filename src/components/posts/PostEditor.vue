<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea 
        class="form-input" name="" id="" cols="30" rows="10" 
        v-model="postText">

      </textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit Post</button>
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      threadId: {
        required: true,
        type: String
      }
    },

    data () {
      return {
        postText: ''
      }
    },

    methods: {
      save () {
        const post = {
          text: this.postText,
          publishedAt: Math.floor(Date.now() / 1000),
          threadId: this.threadId,
          userId: 'FsCDAk9w8NeXEceLV87arpsXjnQ2'
        }

        this.postText = ''

        this.$emit('save', {post})
      }
    }
  }
</script>

