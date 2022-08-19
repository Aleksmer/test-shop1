<template>
  <header class="header">
    <router-link class="logo" to="/" tag="a"><logo/></router-link>
    <navigation />
    <basket />
  </header>
</template>

<script>
// components
import navigation from './navigation/navigation'
import basket from './basket/basket'

// svg
import logo from '@/assets/img/svg/header/logo.svg'


export default {
  name: 'vHeader',
  components:{
    navigation,
    basket,
    logo,
  }
}
</script>

<style lang="scss" src="./v-header.scss" scoped />
