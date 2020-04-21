// 提交mutations是更改Vuex状态的唯一合法方法
export const modifyAName = (state, name) => { //A组件点击更改餐馆名称为A餐馆
  state.resturantName = name // 把方法传递过来的参数,赋值给State中的resturantName
}
export const modifyBName = (state, name) => {
  state.resturantName = name
}
