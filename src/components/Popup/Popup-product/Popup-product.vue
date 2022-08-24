<template>
  <div class="popup-product" v-if="product">
<!--    <pre>{{product}}</pre>-->
    <img class="popup-product__img" :src="product.img" alt="img" >
    <h3 class="popup-product__name">{{product.name}}</h3>
    <strong class="popup-product__price">{{product.price}} ₽</strong>
    <div class="popup-product__description" v-html="product.descr" />
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Popup-product",
  data:() => ({
    product: null
}),
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  async mounted() {
    this.fetchProducts(this.id)
        .then(result => this.product = result)

  }
}
</script>

<style src="./../popup.scss" lang="scss" scoped />
