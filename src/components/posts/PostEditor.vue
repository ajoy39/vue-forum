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
  import {mapGetters} from 'vuex'

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

    computed: {
      ...mapGetters({
        'user': 'authUser'
      })
    },

    methods: {
      save () {
        const post = {
          text: this.postText,
          publishedAt: Math.floor(Date.now() / 1000),
          threadId: this.threadId,
          userId: this.user['.key']
        }

        this.postText = ''

        this.$emit('save', {post})
      }
    }
  }
</script>

