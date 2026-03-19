// Read: HTML에서 필요한 요소들 가져오기

const input = document.querySelector('#todo-input') // 입력창
const btn = document.querySelector('#todo-btn') // 추가버튼
const list = document.querySelector('#todo-list') // 목록(ul)
const countEl = document.querySelector('#todo-count') // 개수 표시

// 잘 가져왔는지 확인(개발자 도구로)
console.log(input)
console.log(list)

btn.addEventListener('click', function() {
    const text = input.value; 
    if (text.length === 0) {
        alert('할 일을 입력해주세요')
        return
    }

    // CREATE: 새 li 요소 만들기 (아직 화면에 없음)
    const newItem = document.createElement('Li')

    // 내용 채우기 - 지금은 텍스트 직접 입력
    newItem.textContent = text

    // 아직 화면에 안 나타남! console로 확인만
    console.log(newItem)

    // APPEND: 만든 요소를 목록에 붙이기
    list.append(newItem)

    //입력창 초기화
    input.value = ''
})

// 이제 화면에 나타남

// --------------------------------------------------------

// 데이터 타입 기본형 예시
const age = 20
const name = '아기사자'

// 데이터 타입 참조형 예시
const galaxy = {
    brand: 'Samsung',
    battery: 80
}

galaxy.brand
galaxy.battery

// 기본형끼리 묶어서 객체 생성
const ewhain = {
    name: '아기사자',
    age: 20
}

ewhain.name
ewhain.age