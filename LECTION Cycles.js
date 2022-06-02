// Циклы ||, && ,while,For, Итерации

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// console.log(true && false)
// console.log(false && true)
// console.log(true && true)
// console.log(false && false)

// let item_2 = 20;
// let item_3 = 50;

// if(item_1 > 3 || item_2 == 100 || item_3 != 50) {
//     console.log("Go eat")
// } else {
//     console.log("Stay Hungry")
// }

// let temperature = 0;
// while(temperature < 40) {

//     if(temperature < 10){
//         console.log("temperature = ", temperature, "Cold")
// } else if (temperature >= 10 && temperature < 30){
//     console.log("temperature = ", temperature, "Chill")
// } else {
//     console.log("temperature = ", temperature, "Hot!!!")
// } temperature++
// }

    // console.log(item_1 + " = Go eat")
    // console.log(item_2 + " = Stay Hungry")
    // item_1++
    // item_2++

       //     // if(temperature < 3){
    //     //             console.log("temperature = ", temperature, "Cold")
    //     //     } else if (temperature >= 3 && temperature < 7){
    //     //         console.log("temperature = ", temperature, "Chill")
    //     //     } else {
    //     //         console.log("temperature = ", temperature, "Hot!!!")
    //     //     } 
    //         // console.log(temperature , "= FOR")
    // }

    let names = ['Kate', 
                'Alex' ,
                'Ivan',
                'Ignat',
                'Andey',
                'Vika']

                let items = names.length
                let count = -1
                // console.log(items)

                while(++count < items) {
                    console.log(names[count])
                    // count++
                }

        // for(item_1 of names) {
        //     if(item_1 == "Ignat"){
        //     break; }
        //     console.log(item_1)
        // }

// если нужно вывести в массив строки через 2
        // for(let item_1 in names) {
        //     if(item_1 % 2 == 0){
        //     console.log(names[item_1], item_1, 2)
        //     }
        // }

