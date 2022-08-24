<template>
  <div id="app">
    <loader v-if="loaded"/>
    <template v-else>
      <v-header/>
      <div class="page">
        <sidebar/>
        <router-view/>
      </div>
    </template>
  </div>
</template>
<script>
import vHeader from '@/components/v-header/v-header'
import sidebar from '@/components/sidebar/sidebar'
import {mapActions} from "vuex"
import loader from "@/components/loader/loader"


export default {
  name: 'app',
  data: () => ({
    loaded: true
  }),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    console.log(this.$route)
    await this.fetchPosts();
        // this.loaded = false
    setTimeout(() => {
      this.loaded = false
    }, 500)
  },
  components: {
    loader,
    vHeader,
    sidebar,
  }
}
</script>

<style lang="scss" src="./assets/style/index.scss"/>
