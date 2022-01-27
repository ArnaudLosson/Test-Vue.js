let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

app.message = 'I have change the message'

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

let app3 = new Vue ({
    el: '#app-3',
    data: {
        seen: true
    }
})

let app4 = new Vue ({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn Javascript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

let app5 = new Vue ({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

let app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

let obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app-8',
    data: obj
})

let watchExampleVM = new Vue ({
    el: '#app-9',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop Typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          this.answer = 'Thinking...'
          var vm = this
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        }
      }
    })