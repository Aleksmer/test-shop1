<template>
  <Teleport to="body">
    <div class="popup">
      <div class="popup--order">
        <div class="popup__header">
          <h3 class="popup__header__title">{{ popupTitle }}</h3>
          <button class="popup__header__close" @click="$emit('closePopup')">закрыть</button>
        </div>
        <div class="popup__content">
          <slot/>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import Teleport from 'vue2-teleport';

export default {
  name: "popup",
  props: {
    popupTitle: {
      type: String,
      required: false,
      // default: "текст тайтл",
      default: 'gbfbg'
    }
  },
  components: {
    Teleport
  }
}
</script>

<style src="./popup.scss" lang="scss" scoped/>
