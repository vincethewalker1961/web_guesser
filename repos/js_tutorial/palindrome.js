// Reverses a string
function reverse(string) {
    return string.split("").reverse().join("");
}

// Below: Returns true for a palindrome, false otherwise. But doesnt work if text is capitalised

//function palindrome(string) {
    //return string === reverse(string);
//   }

// Below: Returns true for a palindrome, false otherwise. But this will work if text is capitali

function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}