//arrow-function
const sayHello = (text) => {
    return console.log(text)
}

sayHello('Hello world')

//lambda функция
const sayHello2 = text => console.log(text)
sayHello2('Hello world')



const getMax = (n1, n2) => console.log(n1 > n2 ? n1 : n2)
getMax(4, 2)

const printSome = message => {
    let num = 90;
    return message + num
}
console.log(printSome('number '))

const groups = ['24-03', '25-03', '26-03', '27-03']
// const allGroup = groups.map(i => `group ${i}`)
// console.log(allGroup)

const allGroup = groups.map(function (i) {
    return `group ${i}`
})
console.log(allGroup)
//замыкание
function createPlayer(name) {
    let score = 0
    return function scoreCount() {
        score ++
        return `${name} - ${score} балла`
    }
}
const player1 = createPlayer('Kirill')
const player2 = createPlayer('Bektur')


//DOM- элементы

document.querySelector('.btn').addEventListener('click', () => {
    console.log('вы нажали на кнопку')
})

const btn = document.querySelectorAll('.btn')
console.log(btn)

const div = document.createElement('div')
div.classList.add('wrapper')
const body = document.body
body.appendChild(div)
const header = document.createElement('h1')
header.textContent = 'Frontend 27-03'
body.appendChild(header)

const ul = `
<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
`

div.innerHTML = ul

const input = document.querySelector('input')
const increment = document.querySelector('#increment')
const decrement = document.querySelector('.decrement')









