// script.js

// --- READ: HTML에서 필요한 요소들 가져오기 ---

const input = document.querySelector('#todo-input')     // 입력창
const btn = document.querySelector('#todo-btn')         // 추가 버튼
const list = document.querySelector('#todo-list')       // 목록(ul)
const countEl = document.querySelector('#todo-count')   // 개수 표시 

// 잘 가져왔는지 확인(개발자 도구로!)
console.log(input)
console.log(list)

btn.addEventListener('click', function () {
    // 1. READ - 입력창에 써있는 값 읽기 
    const text = input.value 
    // 2. 빈 값이면 중단
        if (text.length === 0) {
            alert('할 일을 입력해주세요!')
            return
        }
    // 3. CREATE (새 li 만들고 내용 채우기)
    const newItem = document.createElement('li')
    newItem.textContent = text  // 하드코딩했던 것 변경 

    // 4. APPEND - 목록에 붙이기
    list.append(newItem)
    // 5. 입력창 초기화 
    input.value = ''
})