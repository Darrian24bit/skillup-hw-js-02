//Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 321, 5! = 54321. С помощью циклов вычислить факториал числа 10. Использовать for.
let n = 10;
let i;
let result = 1;
for (i = 1; i <= n; i++) {
    result = result * i;
}
console.log(result); // 3628800 