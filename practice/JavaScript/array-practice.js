const tags = ['JavaScript', 'HTML', 'CSS']

const hashTags = tags.map(tag => '#${tag')

const tagListEl = document.querySelector('.tag')
tagListEl.innerHTML = ''

tags.map(tag => {
    const li = document.createElement('li')
    li.textContent = '#${tag}'
    tagListEl.append(li)
})

console.log(score); // undefined
score = 80; // 값의 할당
var score; // 변수 선언

console.log(score); // ??