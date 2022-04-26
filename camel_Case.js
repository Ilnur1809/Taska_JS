function toCamelCase (str) {
    if (str === '') {
        return ' ';
    }

    const splitArray = str.indexOf('-') !== -1 ? str.split('-'):str;
    const splitArrays = Array.isArray(splitArray) ? splitArray : splitArray.split('_');

    const array = [];
    for (let item of splitArrays) {
        const word = item[0].toUpperCase()+ item.slice(1);
        array.push(word)
    }
    // console.log(array.join(''));
    return array.join('');
}


// function toCamelCase(str) {
//     return str.replace(/[-_](.?)/g, function(match, p1) {
//         return p1.toUpperCase();
//     })
// }

console.log(toCamelCase('the_stealth_warrior'));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-stealth-warrior"));
console.log(toCamelCase(''));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(console.log(toCamelCase("A-B-C")));