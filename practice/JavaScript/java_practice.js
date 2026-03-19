const tages = [ 'coffee', 'tea', 'water']
const hashTags = tags.map(tag => '#${tag}')
const tagListEl = document.querySelector('.tag')
tagListEl.innerHTML = ''

tags.map(tag => {
    const li = document.createElement('li')
    li.textContent = '#${tag}'
    tagListEl.append (li)
}) 



const btn = document.querySelector('button')

btn.addEventListener('click', function()
alert('구매'))