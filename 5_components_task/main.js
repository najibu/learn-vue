Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks">{{ task.task }}</task>
    </div>`,

  data() {
    return {
      tasks: [
          { task: 'Go to the store', completed: true },
          { task: 'Go to the cafe', completed: false },
          { task: 'Go home', completed: false },
          { task: 'Go to the bank', completed: false },
          { task: 'Go to work', completed: false }
      ]
    }
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
});