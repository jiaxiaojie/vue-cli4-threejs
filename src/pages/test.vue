<template>
  <div>hello</div>
</template>
<script>
export default {
  created () {
  	let myObj = { size: 10, label: 'Size 10 Object' }
    this.hello(myObj)
  },
  methods: {
    hello (labelledObj) {
      console.log(labelledObj.label)
    }
  }
}
</script>
