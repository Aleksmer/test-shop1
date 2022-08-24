<template>
  <div class="goodValidation">
    <p>Good Validation!</p>
    <router-view></router-view>
    <button v-on:click="backToError()">Назад</button>
  </div>
</template>

<script>
import Button from "@/components/ui-kit/v-button/v-button";

export default {
  name: "GoodValidation",
  components: {Button},
  text: '',
  methods: {
    backToError() {
      this.$router.push({name: 'error', meta: {text: 'Нет контента'}})
    }
  }
}
</script>

<style scoped>
  .goodValidation {
    background-color: azure;
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 40px;

  }
  button{
    width: 200px;
    height: 50px;
    background-color: #FF6969;
    color: black;
    margin-top: 50px;
  }
</style>
