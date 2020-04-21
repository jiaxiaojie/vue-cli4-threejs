<template>
  <div class="parent">
    <input type="text" v-model="inputText">
    <children :input-val="inputText"></children>
  </div>
</template>
<script>
import Children from './componentsA'
export default {
  components: {
    Children
  },
  data () {
    return {
      inputText: ''
    }
  }
}
</script>
