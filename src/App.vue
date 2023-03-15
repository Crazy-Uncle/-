<template>
  <div class="app-container">

    <Nav v-if="show"></Nav>

    <keep-alive>
      <router-view ></router-view>
    </keep-alive>

  </div>
</template>

<script>
// import Paging from './components/Paging.vue'
// import Login from './components/Login.vue'
import Nav from './components/Nav.vue'

export default {
  components: { Nav },

  data () {
    return {
      now: ''
    }
  },
  computed: {
    show () {
      if (this.$route.path === '/') return false
      return true
    },
    show_foot () {
      if (this.$route.path === '/') return false
      return true
    }
  }

}
</script>

<style lang="less" scoped>

</style>
