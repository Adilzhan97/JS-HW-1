// 1.Написать скрипт, который посчитает и выведет цифру 2 в степень от 1 до 10

// 1 решение
for(let i = 1; i <11; i++) {
    console.log(2 ** i)
}

// 2 решение
// for(let i = 1; i < 11; i++) {
//     console.log(Math.pow(2,i))
// }

// 3 решение
// const pow = function(counter) {
//     for(let i = 1; i <=counter; i++) {
//         console.log(2 ** i)
//     }
// }
// pow(10)


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строке выводилось ;), во второй ;);) и так далее до 5ти.
// let result = ''
// let smile = ';)'
// // for(let i = 1; i<6; i++) {
// //     console.log(result += smile)
// // }

// // for(let i = 1; i<6; i++) {
// //     console.log(smile.repeat(i))
// // }

// function smilik(str, numberOfRows) {
//     for(let i = 1; i<=numberOfRows; i++) {
//         console.log(str.repeat(i))
// }
// }
// smilik(':(', 5)


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку , которая и будет выводится в консоль
// function printSmile(stroka, numberOfRows)

// Вариант номер 1 
// function printSmile(stroka , numberOfRows) {
//     let result = '' ;
//     for(let i =1 ; i <= numberOfRows ; i ++) {
//         result+=stroka
//         console.log(result)
//     }
// }
// printSmile(':)', 5)

// // Вариант  номер 2
// function printSmile2(stroka, numberOfRows){
//     for(let i =1; i<= numberOfRows; i ++)
//     console.log(stroka.repeat(i))
// }
//  printSmile2(':)', 6)


