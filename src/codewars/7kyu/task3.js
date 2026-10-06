const oddOrEven = (array) => {
    const sum = array.reduce((a, b) => a + b, 0)
    return sum % 2 === 0 ? "even" : "odd"
}

oddOrEven([0, 1, 2, 3])


// Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"


// Дан список целых чисел. Определите, является ли сумма его элементов нечётной или чётной. Ответ представьте в виде строки, соответствующей "odd" или "even".
//     Если входной массив пуст, считайте его: [0] (массив с нулями).