<template>
  <div class="basket">
    <basketLogo/>
    <div class="basket__counter">99</div>
  </div>
</template>

<script>
import basketLogo from '@/assets/img/svg/header/basket-logo.svg'

export default {
  name: "basket",
  components: {
    basketLogo
  }
}
</script>

<style lang="scss" src="./basket.scss" scoped />
