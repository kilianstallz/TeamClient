const SidebarStore = {
  showSidebar: false,
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {
  install (Vue) {
    let app = new Vue({
      data: {
        SidebarStore
      }
    })

    Vue.prototype.$sidebar = app.SidebarStore
  }
}

export default SidebarPlugin
