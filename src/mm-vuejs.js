import Vue from 'vue';
import components from './components/';

import './styles/mm-vuejs.css';

const app = new Vue({
  el: '#app',
  components,
});

export default {
  components,
};
