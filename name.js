
let mee = 'MuriGI WijENJe';
//defines the variable mee as the string MuriGI WijENJe
let ans = mee.split('')
//splits the characters in mee to a substring and makes it an array
.map((m) =>
 m === m.toUpperCase() 
 ? m.toLowerCase()
 : m.toUpperCase()
).join('')
/*checks if the array has upper or lowercase characters and returns the opposite by comparing each character to 
their uppercase version*/

