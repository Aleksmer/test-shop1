<template>
  <div>
    <input type="text" class="valid-form__input" @input="$emit('input', $event.target.value)" v-model="searchText">
    <button class="searchOfText__button" @click="$emit('search',searchText)">
      Найти
    </button>
  </div>
</template>

<script>

export default {
  name: "MyInput",
  model: {
    prop: 'value',
    event: 'input'
  },
  data() {
    return {
      searchText: '',
    }
  }
}
</script>

<style lang="scss" src="./Error.scss" scoped/>
