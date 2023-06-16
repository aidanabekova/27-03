function getCoffee() {
    var drinkName = prompt('What do you want to drink? (coffee)').toLowerCase()
    if (drinkName === 'coffee') {
        var coffee = prompt('How do you want your coffee? (black/with milk)').toLowerCase()
        switch (coffee) {
            case 'black':
                alert('One black coffee coming right up!')
                break
            case 'with milk':
                alert('One with milk coffee coming right up!')
                break
            default:
                alert('We do not have that coffee')
        }
    } else {
        alert('Sorry, we do not have')
    }
}

// getCoffee()


//ES6+
// console.log(name)
// var name = 'Aidana'   //hoisting
// console.log(name)
//
// console.log(name2)
// let name2 = 'qwert'
// console.log(name2)
//
const array = [2345, 'dfvsd', true]
array.push(9)
console.log(array)
// array = ''

// for(let i=0; i< array.length; i++){
// }

//rest-параметры , arguments
function getAllSum() {
    console.log(arguments)
    let sum = Array.from(arguments).reduce((n1, n2) => n1 += n2)
    console.log(sum)
}

getAllSum(2, 3)

//rest
function getAllSum2(...numbers) {
    let sum = numbers.reduce((n1, n2) => n1 += n2)
    console.log(sum)
}
getAllSum2(4, 5, 6, 7, 8,9 )

function convertUSD(usd, ...som){
    console.log(usd, som)
    return som.map(i => i / usd)
}

console.log(convertUSD(87, 6000, 90000, 80000, 23000))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [n1, n2, n3, n4, ...others] = numbers
console.log(n1, n2,n3, n4, others)

const el1 =[1, 2 ,3]
const el2 = [4, 5 , 6]
const el3 = [...el1, ...el2]
console.log(el3)

//this

const objectUser = {
    name: 'Aidana',
    surname: 'Bekova',
    number: 876543,
    address: null,
    isMarried: false,
    object: {
        undef: undefined
    },
    showInfo(){
        // console.log(`${objectUser.name} ${objectUser.surname} and other info`)
        // console.log(`${this.name} ${this.surname} and other info`)
    },
    showInfo2(){
        function info(){
            console.log(`${this.name} ${this.surname} and other info`)
        }
        info()
    }
}
//
// objectUser.showInfo()
// objectUser.showInfo2()

//default-params
let arr = [1, 1, 1]
let newArr = arr.join()
console.log(newArr)

function joinArray(array, separator = ',') {
    let result = ''
    for(let i = 0; i< array.length; i++){
        const el = array[i]
        result += el + (i === array.length - 1 ? '': separator)
    }
    return result
}

console.log(joinArray([1, 1, 2, 3, 4], '/'))
