const input = document.querySelector ('#todo-input')
const btn = document.querySelector('#todo-btn')
const list = document.querySelector('#todo-list')
const countEl = document.querySelector('#todo-count')

const newItem = document.createElement('li')
newItem.textContent = '자바스크립트 공부하기'

list.append(newItem)


console.log(input)
console.log(list)
console.log(newItem)