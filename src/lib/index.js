import vueCopyBoard from './vue-copy-board.vue';
const copyBoard = {
  install(Vue, options) {
    Vue.component(vueCopyBoard.name, vueCopyBoard)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(copyBoard);
}
export default copyBoard;
