// var starbucks = {
//     drinks:{
//         coffee:{
//             latte:'latte',
//             cappuccino: 'Cappuccino',
//         },
//         tea:{
//            black:'black',
//            green:'green',
//             'name':'name',
//             12: '12',
//             [3]:{}
//         }
//     }
// }
//
// var order = prompt('order')
// if(order in starbucks.drinks.coffee || order in starbucks.drinks.tea){
//     console.log('заказ принят')
// }else{
//     console.error('error')
// }

//тернарные операторы
// var age = prompt('enter your age')
// console.log(age >= 18 ? 'ok' : 'error')
// if(age >= 18){
//     console.log('ok')
// }else{
//     console.log('error')
// }

//truthy and falsy - выражения
//falsy -> 0, -0, 0n, '', "", ``, null, undef, NaN, false

var element = 9
console.log(element ? 'true': 'false')

//переопределение переменных
var number = 90
number = 'qwerty'
console.log(number);

//array
// JSON
var array = ['qwerty', 654, null, undefined, NaN, true, {}, []]
console.log(array)
console.log(array.length - 1)
console.log(array[0][3])
array[9] = 'frontend'
console.log(array[9])
//методы массива
var numbers = [1, 2, 3, 4, 5]
//1)push - добавление в конец
// numbers.push(7, 8)
// console.log(numbers)
//2) concat
var newArr = numbers.concat([0,0])
console.log(newArr)
console.log(numbers)
//3)unshift
numbers.unshift(3)
console.log(numbers)
//4)pop
var lastNum = numbers.pop()
console.log(numbers)
console.log(lastNum)
//5) join
var joinNum = numbers.join()
console.log(joinNum)

//циклы
//while
// var count = 0
//count = count + 1
//count += 1
//count ++

// while (true){
//     console.log(count)
//     count++
// }

//for
// for(var i = 0; i <= 20; i++){
//     console.log(i)
// }


var names = [ 'Kirill', 'Bektur', 'Nursen', 'Aigen', 'Amantur', 'Manap']
var blacklist = ['aigen', 'john', 'adela', 'bektur']
for(var i = 0; i < names.length; i++){
    if(blacklist.includes(names[i].toLowerCase())){
        console.warn(`${names[i]} в черном списке`)
        continue
    }
    console.log(`Добро пожаловать, дорогой гость ${names[i]}`)
}


























