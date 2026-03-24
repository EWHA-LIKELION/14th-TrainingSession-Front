const input = document.querySelector ('#todo-input')
const btn = document.querySelector('#todo-btn')
const list = document.querySelector('#todo-list')
const countEl = document.querySelector('#todo-count')

btn.addEventListener('click', function () {
    const text= input.value
    if (text.length === 0) {
        alert('할 일을 입력해 주세요.')
        return
    }

    
const newItem = document.createElement('li')
newItem.textContent = text

list.append(newItem)

input.value = ''
}) //입력창 초기화

console.log(input)
console.log(list)
console.log(newItem)


