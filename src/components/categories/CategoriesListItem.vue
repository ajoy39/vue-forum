<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link 
        :to="{name: 'Category', params: {id: category['.key']}}"
        class="text-xlarge"
      >{{category.name}}</router-link>
    </h2>
    <ForumList :forums="categoryForum" />
  </div>
</template>

<script>
  import ForumList from '@/components/forums/ForumList'
  
  export default {
    components: {
      ForumList
    },

    props: {
      category: {
        required: true,
        type: Object
      }
    },

    computed: {
      categoryForum () {
        return Object.values(this.$store.state.forums)
          .filter(forum => forum.categoryId === this.category['.key'])
      }
    }
  }
</script>
