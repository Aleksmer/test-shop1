<template>
  <button @click="$emit('clickButton')" class="button">
     {{text}}
  </button>
</template>

<script>
export default {
  name: "v-button",
  props: {
    isAccess: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" src="./v-button.scss" scoped />
