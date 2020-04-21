<template>
  <div class="componentsA">
    <p class="title">组件A</p>
    <p class="titleName">餐馆名称:{{resturantName}}</p>
    <div>
      <button class="btn" @click="modifyAName('A 餐馆')">修改为A餐馆</button>
    </div>
    <div class="marTop">
      <button class="btn" @click="turnToB">跳转到B页面</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['modifyAName']),
    turnToB () {
      this.$router.push({ path: '/componentsB' })
    }
  },
  computed: {
    ...mapGetters(['resturantName'])
  }
}
</script>

<style scoped>

</style>
