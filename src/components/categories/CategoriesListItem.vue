<template>
  <div class="forum-list">
    <h2 class="list-title">
        {{category.name}}
    </h2>
    <ForumList :forums="categoryForum" />
  </div>
</template>

<script>
  import sourceData from '@/data'
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
        return Object.values(sourceData.forums)
          .filter(forum => forum.categoryId === this.category['.key'])
      }
    }
  }
</script>
