import Vue from 'vue';
import components from './components/mm-card/';

Vue.component('mm-card');

const app = new Vue({
  el: '#app',
  components,
});
