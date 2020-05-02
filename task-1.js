//На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.
String.prototype.firstLetterCaps = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

let str = "i am in the easycode";
let arr = str.split(' ');
let result = '';
for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
        result += arr[i].firstLetterCaps()
    } else {
        result += arr[i].firstLetterCaps() + ' '
    }
}
console.log(result); // I Am In The Easycode 