var app1 = new Vue({
    el: '#app1',
    data: {
      message: 'Primeira vez programando em Vue!'
    }
  })

  var app2 = new Vue({
    el: '#app2',
    data: {
      message: 'Você está acessando essa página no dia: ' + new Date().toLocaleString()
    }
  })

  var app3 = new Vue({
    el: '#app3',
    data: {
      seen: true
    }
  })

  var app4 = new Vue({
    el: '#app4',
    data: {
      pendentes: [
        { text: 'Com o console aberto' },
        { text: 'Digite "app4.todos.push({ text: "Nome do item" })"' },
        { text: 'Para adicionar um novo item na lista!' },
        { text: 'Substitua as aspas duplas por aspas simples!' }
      ]
    }
  })

  var app5 = new Vue({
    el: '#app5',
    data: {
      message: '!AOSSEP AMITÓ AMU É ÊCOV'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  var app6 = new Vue({
    el: '#app6',
    data: {
      message: 'Deixa sua Mensagem aqui'
    }
  })

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

  Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">Você já clicou em mim {{ count }} vezes.</button>'
  })
  
  var app7 = new Vue({
    el: '#app7',
    data: {
      todo: [
        { id: 0, text: 'Aprender Vue.js' },
        { id: 1, text: 'Combinar Vuejs e laravel' },
        { id: 2, text: 'Criar o site do projeto de progmação para web' },
        { id: 3, text: 'Me dar bem na disciplina e não deixar ela para trás!' }
      ]
    }
  })