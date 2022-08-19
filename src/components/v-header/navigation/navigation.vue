<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="item of getCategory" :key="item.name" :class="['navigation__item', {'navigation__item--active': Number($route.params.category) === item.id}]">
        <router-link :to="'/category-' + item.id" tag="a" class="navigation__link" >{{item.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "navigation",
  computed: mapGetters(['getCategory']),
}
</script>

<style lang="scss" src="./navigation.scss" scoped />
