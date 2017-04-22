Vue.component('task', {
  template: '<li><slot></slot></li>'

  data() {
    return {
      message: 'Foobar'
    }
  }
});

new Vue({
  el: '#root'
});