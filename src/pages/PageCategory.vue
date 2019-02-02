<template>
  <div class="forum-wrapper">
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{category.name}}</h1>
        </div>
      </div>
    </div>
    <div class="col-full push-top">
      <CategoriesListItem :category="category" />
    </div>
  </div>
</template>
<script>
  import sourceData from '@/data'
  import CategoriesListItem from '@/components/categories/CategoriesListItem.vue'

  export default {
    components: {
      CategoriesListItem
    },
    props: {
      id: {
        required: true,
        type: String
      }
    },
    computed: {
      category () {
        return sourceData.categories[this.id]
      }
    }
  }
</script>

<style scoped>
  .forum-wrapper {
    width: 100%
  }
</style>

