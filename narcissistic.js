function narcissistic(value) {
    // Code me to return true or false
    const arrayValue = value.toString().split('');


const exponentiation = arrayValue.
        map( (num) => Math.pow(num, arrayValue.length)).
        reduce( (acc, num) => acc+= num);
// return exponentiation
    if (exponentiation === value) {
        return true
    }
    return false;
}

console.log(narcissistic(7));

narcissistic(371)
console.log(narcissistic(3711));
// Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic" );
// Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic" );


const value = 3711;
