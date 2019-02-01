<template>
  <div>
    <CategoriesListItem 
      v-for="category in categories" 
      :category="category" 
      :key="category['.key']"
    />
  </div>
</template>
<script>
  import CategoriesListItem from '@/components/categories/CategoriesListItem'

  export default {
    components: {
      CategoriesListItem
    },

    props: {
      categories: {
        required: true,
        type: Array
      }
    }
  }
</script>

