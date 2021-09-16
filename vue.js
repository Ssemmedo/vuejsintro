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