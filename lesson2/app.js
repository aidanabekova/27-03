var inn = '70810100107803'
var firstNum = Number(inn[0])
if ((firstNum === 1 || firstNum === 2 || firstNum === 0) && inn.length === 14) {
    console.log('ИНН найден')
} else {
    console.error('ИНН не найден')
}

//switch..case
var day = '';
switch (new Date().getDay()) {
    case 0:
        day = 'Понедельник'
        break
    case 1:
        day = 'Вторник'
        break
    case 2:
        day = 'Среда'
        break
    case 3:
        day = 'Четверг'
        break
    case 4:
        day = 'Пятница'
        break
    case 5:
        day = 'Суббота'
        break
    case 6:
        day = 'Воскресенье'
        break
    default:
        console.log('error')
}
console.log(day)

var euSize = 's'
switch (euSize) {
    case 'S':
    case 's':
        console.log('42')
        break
    case 'M':
    case 'm':
        console.log('44')
        break
    case 'L':
    case 'l':
        console.log('46')
        break
    default:
        console.log('unknow size')
}

//4)null
var address = null
console.log(typeof null)
//5)undefined
let name;
console.log(typeof name)
//6)object
var objectUser = {
    name: 'Aidana',
    surname: 'Bekova',
    number: 876543,
    address: null,
    isMarried: false,
    object: {
        undef: undefined
    }
}

console.log(objectUser)
console.log(objectUser.surname)
console.log(objectUser.object.undef)
//методы
objectUser.course = 'GEEKS' //добавление
objectUser['object']['undef'] = 89 //изменение
delete objectUser.isMarried //удаление
console.log(objectUser)

console.log(Object.keys(objectUser))
console.log(Object.values(objectUser))
console.log(Object.entries(objectUser))
console.log(objectUser.hasOwnProperty('name'))

//7)bigint
var int = 78n
console.log(typeof int)
//8)symbol

//Not A Number
var number = 90
var text = 'qwerty'
var result = number / text
console.log(typeof result)






