import Card from './Card.vue'

const GlobalComponents = {
  install (Vue) {
    Vue.component('c-card', Card)
  }
}

export default GlobalComponents
export { GlobalComponents }
