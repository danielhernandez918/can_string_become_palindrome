// ---------- palindrome -----------
// tacocat
const str1 = "";
// expected1 = false;

const str2 = "a";
// expected2 = true;

const str3 = "ddaa"; //
// expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
// expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
// expected5 = true;
// Explanation: "daaad" "adada"

const str6 = "abc";
// expected6 = false;


// Given an unordered string
//return whether or not it's possible to make a palindrome out of the string's characters.
function canStringBecomePalindrome(str) {
    if (str === "") {
        return false;
    }
    
    const freq = {};

    for (letter of str) {
        // console.log(letter);
        freq.hasOwnProperty(letter) ?
            freq[letter]++ :
            freq[letter] = 1
    }
    // console.log(freq)
    let odds = 0;

    for (key of Object.keys(freq)) {
        // console.log(freq[key]);
        if (freq[key] % 2 !== 0) {
            odds++;
        }
    }

    return odds > 1 ? false : true

}
console.log(canStringBecomePalindrome(str1))
console.log(canStringBecomePalindrome(str2))
console.log(canStringBecomePalindrome(str3))
console.log(canStringBecomePalindrome(str4))
console.log(canStringBecomePalindrome(str5))
console.log(canStringBecomePalindrome(str6))
