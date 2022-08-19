<template>
  <div class="card-item">
    <img class="card-item__img" :src="product.img" alt="">
    <div class="card-item__content">
      <p class="card-item__title">{{ product.name }}</p>
      <p class="card-item__price">{{ product.price.toLocaleString() }} ₽</p>
      <v-button/>
    </div>
  </div>
</template>

<script>

import PostForm from "@/components/cardlist/carditem/PostForm";
import vButton from '@/components/ui-kit/v-button/v-button'

export default {
  name: "card-item",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    PostForm,
    vButton
  },
}
</script>

<style lang="scss" src="./carditem.scss" scoped/>
