
// var body = document.getElementsByTagName('body')

// console.log("body=>", body[0].children[0].children[0])


var btn = document.getElementById('addBtn')
var historyDiv = document.getElementById('historyDiv')
var todo = document.getElementById('todo')

btn.addEventListener('click', function () {
    if (todo.value.trim() === '') return alert('Please add todo.')

    var now = new Date()
    var time = now.toLocaleTimeString()

    var li = `<li>${todo.value.trim()} ${time} <button onclick = "console.log(this.parentNode.remove())">Del </button>  </li>`
    historyDiv.innerHTML += li

    todo.value = ''

})