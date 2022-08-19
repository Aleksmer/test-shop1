<template>
  <nav class="sidebar">
    <ul class="sidebar__list">
      <li v-for="item of filterSubCategory" :key="item.name" :class="['sidebar__item', {'sidebar__item--active':Number($route.params.subCategory) === item.id}]" >
        <router-link :to="{name:'subCategory', params: {subCategory: item.id}}" tag="a" class="navigation__link" >{{item.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "sidebar",
  computed: {
    ...mapGetters(['getSubCategory']),
    filterSubCategory() {
      return this.getSubCategory.filter(p => p.parent_id === Number(this.$route.params.category))
    }
  }
}
</script>

<style lang="scss" src="./sidebar.scss" scoped />
