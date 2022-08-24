<template>
  <div class="modal">
    <button
        class="closeCross"
        @click="closeModal"
    >
      Закрыть окно
    </button>
    {{ title }}
    <br><br><br>
    {{ description }}
    <br><br>
    <slot name="content" />
    <div class="modal-footer">
      <slot name="footer">
        <button
            class="button orange"
            @click="closeModal"
        >
          Отмена
        </button>
        <button
            class="button blue">
          Сохранить
        </button>
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: "gffnbfgnbfgbg fg fgh "
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
  }
}
</script>

<style scoped>
.modal {
  width: 50%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: bisque;
  position: relative;
}

.button {
  display: flex;
  width: 200px;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: white;
}

.modal-footer {
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  width: 40%;
  justify-content: space-between;
}

.orange {
  background-color: chocolate;
}

.blue {
  background-color: dodgerblue;
}

.closeCross {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background-color: red;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>
