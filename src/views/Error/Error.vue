<template>
  <div class="error">
    <errorSvg class="error__svg"/>
    <p class="error__text" :class="{getRedText: redText}">В данной категории товаров пока нет</p>
    <br><br>
    <br><br>
    <div class="counter">
      <button class="counter__button" v-on:click="downPage">-</button>
      <input class="counter__input" type="number" v-model:value="currentPage" v-on:input="correctNumber">
      <button class="counter__button" v-on:click="upPage">+</button>
    </div>
    <br><br> <br><br>
    <div class="names">
      <p>search!</p>
      <input class="counter__input" v-model:value="valueName">
      <p>Всего имен: {{ allNames }}, совпадений: {{ allSync.length }}</p>
      <ul>
        <li
            v-for="(name, index) in allSync"
            :key="index"
        >
          {{ name }}
        </li>
      </ul>
    </div>
    <div class="shavaCat">
      <div class="shavaCat__useBoard useBoard">
        <button @click="isVisible = !isVisible" class="useBoard__button" type="button">
          {{ isVisible ? 'Скрыть' : 'Показать' }}
        </button>
        <button :class="imgFilters.sepia ? 'active' : '' " @click="imgFilters.sepia = !imgFilters.sepia "
                class="useBoard__button" type="button">Сепия
        </button>
        <button :class="imgFilters.border ? 'active' : '' " @click="imgFilters.border = !imgFilters.border"
                class="useBoard__button" type="button">Рамка
        </button>
        <button :class="imgFilters.small ? 'active' : '' " @click="imgFilters.small = !imgFilters.small"
                class="useBoard__button" type="button">Размер
        </button>
        <button :class="imgFilters.shadow ? 'active' : '' " @click="imgFilters.shadow = !imgFilters.shadow"
                class="useBoard__button" type="button">Тень
        </button>
        <br>
        <br>
        <br>
        <h2>Вид</h2>
        <div class="sizes">
          <label>
            Ширина: {{ imgSizes.currentWidth }}
          </label>
          <input
              type="range"
              :value="imgSizes.currentWidth"
              @input="imgSizes.currentWidth = $event.target.value"
              :min="imgSizes.minWidth"
              :max="imgSizes.maxWidth"
          >
          <label>
            <br>
            Высота: {{ imgSizes.currentHeight }}
          </label>
          <input
              type="range"
              :value="imgSizes.currentHeight"
              @input="imgSizes.currentHeight = $event.target.value"
              :min="imgSizes.minHeight"
              :max="imgSizes.maxHeight"
          >
        </div>

        <div class="rotate">
          <label>
            Поворот: {{ imgSizes.currentRotate }}
          </label>
          <input
              type="range"
              :value="imgSizes.currentRotate"
              @input="imgSizes.currentRotate = $event.target.value"
              :min="imgSizes.minRotate"
              :max="imgSizes.maxRotate"
          >
        </div>
      </div>
      <img
          v-if="isVisible"
          :class="imgFilters"
          :style="[getImgSizes, getImgRotate]"
          src="@/assets/img/carditem/shc.jpg"
      >
      <h1 v-else>Кот скоро вернется</h1>
    </div>

    <div class="searchOfText">
      <h1 class="searchOfText__title">Список товаров</h1>
      <MyInput @search="searchProducts" />
    </div>
    <ul class="product-cardList">
      <li
          v-for="(product, index) of products"
          :key="index"
      >
        <productCard
            :title="product.title"
            :price="product.price"
            :imgUrl="product.imgUrl"
            :count="product.count"
            @addToBasket="addToBasket(index)"
        />
      </li>
    </ul>

    <validForm />
  </div>
</template>

<script>
import productCard from "@/views/Error/ProductCard"
import errorSvg from '@svg/error/error.svg'
import MyInput from "@/views/Error/MyInput"
import ValidForm from "./ValidForm"

export default {
  name: "Error",
  data() {
    return {
      searchText: '',
      currentPage: 5,
      redText: false,
      nameList: ['Василий', 'Петр', 'Данил', 'Даниил', 'Григорий'],
      valueName: '',
      isVisible: true,
      imgFilters: {
        sepia: false,
        border: false,
        small: false,
        shadow: false
      },
      imgSizes: {
        minWidth: 100,
        maxWidth: 600,
        currentWidth: 600,
        minHeight: 100,
        maxHeight: 600,
        currentHeight: 600,
        minRotate: 0,
        maxRotate: 360,
        currentRotate: 0,
        value: 0
      },
      products: [
        {
          title: 'Table 1',
          price: 19999,
          // imgUrl: 'https://spb.mrdivanoff.ru/image/cache/data/product/27121/27121_0-1200x800.jpg',
          count: 20,
        },
        {
          title: 'Table 2',
          price: 777,
          imgUrl: require('@img/carditem/shc.jpg'),
          count: 21,
        },
        {
          title: 'Table 3',
          // price: 666,
          imgUrl: 'https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F34%2F2544.jpg',
          count: 23,
        },
        {
          title: 'Table 4',
          price: 1000,
          imgUrl: 'https://porodakoshek.ru/wp-content/uploads/2020/06/Kavkazskaya-lesnaya-koshka-na-prirode.jpg',
          // count: 22,
        }
      ]
    }
  },
  components: {
    MyInput,
    errorSvg,
    productCard,
    ValidForm
  },
  computed: {
    allNames() {
      return this.nameList.length
    },
    allSync() {
      return this.nameList.filter(p => p.toLowerCase().indexOf(this.valueName.toLowerCase()) === 0)
    },
    getImgSizes() {
      return {
        width: `${this.imgSizes.currentWidth}px`,
        height: `${this.imgSizes.currentHeight}px`,
      }
    },
    getImgRotate() {
      return {
        transform: `rotate(${this.imgSizes.currentRotate}deg)`
      }
    }
  },
  methods: {
    downPage() {
      return this.currentPage > 0 ? --this.currentPage : 0
    },
    upPage() {
      return this.currentPage < 10 ? ++this.currentPage : 9
    },
    correctNumber() {
      return this.currentPage > 0 && this.currentPage < 10 ? this.redText = false : this.redText = true
    },
    addToBasket(index) {
      console.log(index)
    },
    searchProducts(searchText) {
      console.log('Загрузить товары:', searchText)
    }
  },
}
</script>

<style lang="scss" src="./Error.scss" scoped/>
