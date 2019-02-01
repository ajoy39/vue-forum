<template>
<div class="col-full">
  <h1>Welcome to the Forum</h1>
  <ForumList :forums="forums" />
</div>
</template>

<script>

import sourceData from '@/data'
import ForumList from '@/components/forums/ForumList'

export default {
  components: {
    ForumList
  },
  data () {
    return {
      forums: Object.values(sourceData.forums)
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