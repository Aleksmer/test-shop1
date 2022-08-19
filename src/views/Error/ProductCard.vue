<template>
  <div class="product-card">
    <img :src="imgUrl" alt="photo" class="imgUrl">
    <div class="product-card__info">
      <h2 class="title">{{ title }}</h2>
      <p class="price">{{ price }} p.</p>
      <p class="count">Доступно {{ count }} шт.</p>
      <button
          class="button"
          type="button"
          @click="addToBasket"
      >Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
          title: {
            type: String,
            validator(value) {
              return value.length < 50
            },
          },
          price: {
            type: Number,
            default: 0
          },
          imgUrl: {
            type: String,
            default: 'https://st.proff-instrument.ru/images/thumbnails/1294/1058/detailed/339/No_photo_rdmp-8j.jpg',
          },
          count: {
            type: Number,
            default: 0
          }
  },
  methods: {
    addToBasket() {
      this.$emit('addToBasket' )
    },
  }
}
</script>

<style lang="scss" src="./Error.scss" scoped />
