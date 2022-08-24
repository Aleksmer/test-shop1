<template>
  <div class="card-item">
    <img class="card-item__img" :src="product.img" alt="" @click="openPopup">
    <div class="card-item__content">
      <p class="card-item__title" @click="openPopup" >{{ product.name }}</p>
      <p class="card-item__price">{{ product.price.toLocaleString() }} ₽</p>
      <v-button @clickButton="addBasket" :text="textButton" :is-access="product.inBasket"/>
    </div>
    <Popup v-if="statusPopup" popupTitle="Информация" @closePopup="statusPopup=null" >
      <PopupProduct :id="product.id"/>
    </Popup>
  </div>
</template>

<script>

import PostForm from "@/components/cardlist/carditem/PostForm";
import vButton from '@/components/ui-kit/v-button/v-button'
import Popup from "@/components/Popup/popup";
import PopupProduct from "@/components/Popup/Popup-product/Popup-product";

export default {
  name: "card-item",
  data:() => ({
    statusPopup: null
  }),
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    Popup,
    PostForm,
    vButton,
    PopupProduct,
  },
  computed: {
    textButton() {
      return this.product.inBasket ? "Добавлено в корзину" : "Добавить в корзину"
    }
  },
  methods: {
    addBasket() {
      console.log(45475)
      this.product.inBasket = !this.product.inBasket
    },
    openPopup() {
      this.statusPopup = true
    }
  }
}
</script>

<style lang="scss" src="./carditem.scss" scoped/>
