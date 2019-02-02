<template>
<div class="col-full">
  <h1>Welcome to the Forum</h1>
  <CategoriesList :categories="categories" />
</div>
</template>

<script>
import CategoriesList from '@/components/categories/CategoriesList'

export default {
  components: {
    CategoriesList
  },
  computed: {
    categories () {
      return Object.values(this.$store.state.categories)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>