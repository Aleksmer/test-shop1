<template>
  <div>
    <input type="text" class="valid-form__input" @input="$emit('input', $event.target.value)" v-model="searchText">
    <button class="searchOfText__button" @click="$emit('search',searchText)">
      Найти
    </button>
    <div
        :inner-html.prop='searchText | showSearchText | emoji | replaceText | marked'
    >
      <!--      {{searchText | showSearchText | emoji | replaceText | marked}}-->
    </div>
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
  },
  filters: {
    showSearchText(searchText) {
      return searchText.toUpperCase()
    },
    emoji(searchText) {
      return searchText.replace(':)', '😀')
    },
    replaceText(searchText) {
      return searchText.replace("...", "Marked - Markdown Parser\n" + "========================\n" + "\n" + "How To Use The Demo\n" + "-------------------\n" + "\n" + "1. Type in stuff on the left.\n" + "2. See the live updates on the right.\n")
    }
  }
}
</script>

<style lang="scss" src="./Error.scss" scoped/>
