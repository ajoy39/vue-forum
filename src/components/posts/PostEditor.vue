<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea 
        class="form-input" name="" id="" cols="30" rows="10" 
        v-model="text">

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
        text: ''
      }
    },

    computed: {
      thread () {
        return this.$store.state.threads[this.id]
      }
    },

    methods: {
      save () {
        const post = {
          text: this.text,
          threadId: this.threadId
        }

        this.postText = ''

        this.$emit('save', {post})
      }
    }
  }
</script>

