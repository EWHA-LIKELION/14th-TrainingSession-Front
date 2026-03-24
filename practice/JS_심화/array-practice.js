const tags = ['JavaScript', 'HTML', 'CSS']

const hashTags = tags.map(tag => '#${tag}')

const tagListEl = document.querySelector('.tag')
tagListEl.innerHTML = ''

tags.map(tag => {
    const li = document.createElement('li')
    li.textContent = '#${tag}'
    tagListEl.append(li)
})
