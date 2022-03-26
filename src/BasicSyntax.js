export function romanToInteger(str) {
    const numbers_compr = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0,
        last_numb = 0;
    str.split('')
        .reverse()
        .forEach((element) => {
            if (numbers_compr[element] >= last_numb) {
                result = numbers_compr[element] + result;
            } else {
                result = result - numbers_compr[element];
            }
            last_numb = numbers_compr[element];
        });
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    return result;
}
