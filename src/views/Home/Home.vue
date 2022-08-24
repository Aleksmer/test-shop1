<template>
  <div class="Home">
    <cardlist />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Cardlist from "@/components/cardlist/cardlist";

export default {
  components: {
    Cardlist
  },
  computed: {
    ...mapGetters(['getCategory', 'getSubCategory'])
  },
  methods: {
    forwardSubCategory() {
      let showCategory = Number(this.$route.params.category);
      let showSubCategory = this.getSubCategory.find(p => p.parent_id === showCategory)
      this.$router.push({name: 'subCategory', params: {subCategory: showSubCategory.id, category: showCategory}})
    },
    forwardCategory() {
      let showCategory = this.getCategory[0];
      let showSubCategory = this.getSubCategory.find(p => p.parent_id === showCategory.id)
      this.$router.push({name: 'subCategory', params: {subCategory: showSubCategory.id, category: showCategory.id}})
    },
    forwardError() {
      // this.$router.push({name: 'error', meta: {text: 'Нет контента'}})
    },
    checkLink() {
      if (this.$route.name === 'home') this.forwardCategory()
      if (this.$route.name === "category") {

        let category = Number(this.$route.params.category)
        if (this.getCategory.find(p => p.id === category)) this.forwardSubCategory()
        else this.forwardError()
      }
    },
    // forwardGoodValidation() {
    //   console.log(333)
    // }
  },
  mounted() {
    this.checkLink()
  },
  watch: {
    $route() {
      this.checkLink()
    }
  }

}
</script>

<style lang="scss" src="./Home.scss" scoped/>
