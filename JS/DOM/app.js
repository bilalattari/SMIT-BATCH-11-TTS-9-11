<<<<<<< HEAD

// var body = document.getElementsByTagName('body')

// console.log("body=>", body[0].children[0].children[0])


// var btn = document.getElementById('addBtn')
// var historyDiv = document.getElementById('historyDiv')
// var todo = document.getElementById('todo')

// btn.addEventListener('click', function () {
//     if (todo.value.trim() === '') return alert('Please add todo.')

//     var now = new Date()
//     var time = now.toLocaleTimeString()

//     var li = `<li>${todo.value.trim()} ${time} <button onclick = "console.log(this.parentNode.remove())">Del </button>  </li>`
//     historyDiv.innerHTML += li

//     todo.value = ''

// })


// console.log(document)


// var parent = document.getElementById('parent')
// var child3 = document.getElementById('child3')

// console.log("parent=>", parent)
// console.log("children of parent=>", parent.children)
// console.log("dada abu of parent=>", parent.parentElement)
// console.log("3sre number ka", child3)
// console.log("is se pehle wala", child3.previousElementSibling)
// console.log("is ke baad wala", child3.nextElementSibling)



var input = document.getElementById('todo')
var add_btn = document.getElementById('add_btn')
var list = document.getElementById('list')
var delete_all_btn = document.getElementById('delete_all_btn')


delete_all_btn.addEventListener('click', function () {
    list.innerHTML = ''
})

add_btn.addEventListener('click', function () {
    var val = input.value.trim()
    if (!val) return alert('Sahi se item likhlo pehle')
    var li = `<li>
<span>${val}</span> 
<button onclick="edit(this)">Edit</button> 
<button onclick="deleteTodo(this)">Del</button> </li>`
    list.innerHTML += li

    input.value = ''
})

function edit(element) {
    console.log(element.previousElementSibling.innerText)

    var updated = prompt('Update value', element.previousElementSibling.innerText)

    element.previousElementSibling.innerText = updated
}


function deleteTodo(element) {
    console.log("element=>", element)
    element.parentElement.remove()
=======

// var body = document.getElementsByTagName('body')

// console.log("body=>", body[0].children[0].children[0])


// var btn = document.getElementById('addBtn')
// var historyDiv = document.getElementById('historyDiv')
// var todo = document.getElementById('todo')

// btn.addEventListener('click', function () {
//     if (todo.value.trim() === '') return alert('Please add todo.')

//     var now = new Date()
//     var time = now.toLocaleTimeString()

//     var li = `<li>${todo.value.trim()} ${time} <button onclick = "console.log(this.parentNode.remove())">Del </button>  </li>`
//     historyDiv.innerHTML += li

//     todo.value = ''

// })


// console.log(document)


// var parent = document.getElementById('parent')
// var child3 = document.getElementById('child3')

// console.log("parent=>", parent)
// console.log("children of parent=>", parent.children)
// console.log("dada abu of parent=>", parent.parentElement)
// console.log("3sre number ka", child3)
// console.log("is se pehle wala", child3.previousElementSibling)
// console.log("is ke baad wala", child3.nextElementSibling)



var input = document.getElementById('todo')
var add_btn = document.getElementById('add_btn')
var list = document.getElementById('list')
var delete_all_btn = document.getElementById('delete_all_btn')


delete_all_btn.addEventListener('click', function () {
    list.innerHTML = ''
})

add_btn.addEventListener('click', function () {
    var val = input.value.trim()
    if (!val) return alert('Sahi se item likhlo pehle')
    var li = `<li>
<span>${val}</span> 
<button onclick="edit(this)">Edit</button> 
<button onclick="deleteTodo(this)">Del</button> </li>`
    list.innerHTML += li

    input.value = ''
})

function edit(element) {
    console.log(element.previousElementSibling.innerText)

    var updated = prompt('Update value', element.previousElementSibling.innerText)

    element.previousElementSibling.innerText = updated
}


function deleteTodo(element) {
    console.log("element=>", element)
    element.parentElement.remove()
>>>>>>> b10aecdb679a9671175076c35d04771ac092773a
}