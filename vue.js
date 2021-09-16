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