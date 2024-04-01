function Prime(num) {
    if (num < 2) {
        return false;
    }
    for (let divider = 2; divider <= Math.sqrt(num); divider++) {
        if (num % divider === 0) {
            return false;
        }
    }
    return true
}
/*The first function called Prime checks if the number is less than two and returns false if it is,
 as numbers lower than 2 are not considered Prime numbers, then it checks if the number is divisible by 2 
 and it's square root. Ultimately this is just to confirm whether or not the number in question is a prime number*/
function primeNumber(n) {
    const primes = [];
    for (let divider = 2; divider <= n; divider++) {
        if (Prime(divider)) {
            primes.push(divider);
        }
    }
return primes;
}
/*The second function called primeNumber takes a number n is an input, and makes an empty array called primes. 
Then it uses a for loop to iterate from 2 to n, it checks using the Prime function above for prime numbers.
If it is a prime number, it gets added to the array with .push. The function will return all prime number up to n.*/