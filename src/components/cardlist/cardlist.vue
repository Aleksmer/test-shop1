<template>
  <div :class="addClassList">
    <template v-if="showProducts.length"><card-item v-for="product of showProducts" :product="product"/></template>
    <error v-else />
  </div>
</template>

<script>
import cardItem from "./carditem/carditem";
import {mapGetters} from "vuex";
import Error from "@/views/Error/Error";


export default {
  name: "cardlist",
  components: {
    Error,
    cardItem,
  },
  computed: {
    ...mapGetters(['getProducts']),
    showProducts() {
      return this.getProducts.filter(p => p.parent_id === Number(this.$route.params.subCategory))
    },
    addClassList() {
      return this.showProducts.length ? 'cardlist':'cardlist-empty'
    }
    },
}
</script>

<style lang="scss" src="./cardlist.scss" scoped/>
