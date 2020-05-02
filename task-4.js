//На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

String.prototype.firstLetterCaps = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

let str = "JavaScript is a pretty good language";
let arr = str.split(' ');
let result = '';
for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
        result += arr[i].firstLetterCaps()
    } else {
        result += arr[i].firstLetterCaps()
    }
}
console.log(result); // JavaScriptIsAPrettyGoodLanguage