//Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in

let list = {
    name: "denis",
    work: "easycode",
    age: 29
}

for (let key in list) {
    result = list[key];
    if (typeof (result === String)) {
        let resupp = (String(list[key])).toUpperCase();
        list[key] = resupp;

    }
}
console.log(list);