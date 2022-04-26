// Написать функцию, к-рая вернет кол-во единиц, введя значение в десятичной и переведя на двоичную
var countBits = (n) =>  {
  const numArray = n.toString(2).split('0').join('');
  let sum = 0;
    console.log(numArray)
    for (let num of numArray) {
        if (num === '1') {
            sum+=1;
        }
    }
    console.log(sum)
};
countBits(4)