//Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
function reverseStr(str) {
    let newStr = '',
        i;
    for (i = str.length - 1; i >= 0; i--) {

        newStr += str.charAt(i);

    }
    return newStr;
}

console.log(reverseStr("tseb eht ma i")); //i am the best 