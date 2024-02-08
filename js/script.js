//get string from page
//controller function
function getValue() {
    document.getElementById("palindromeAlert").classList.add("invisible");
    
    let string = document.getElementById("regString").value;
    let palin = palindrome(string);
    
    isPalin(palin);
}

//reverse the string
//logic function
function palindrome(userString) {
    let trimString = userString.split(" ").join("");
    let reverse = "";
    let revString = "";
    let palindrome = false;

    for (let i = trimString.length - 1; i >= 0; i--) {
        reverse += trimString[i];
    }
    if (trimString == reverse) {
        palindrome = true;
        for (let i = trimString.length - 1; i >= 0; i--) {
            revString += trimString[i];
        }
        document.getElementById("palindromeAlert").classList.add("alert-success");
        document.getElementById("palindromeAlert").classList.remove("alert-danger");
        return `<strong>${userString}</strong> is a palindrome: <strong>${revString}</strong>.`;
    } else {
        palindrome = false
        document.getElementById("palindromeAlert").classList.remove("alert-success");
        document.getElementById("palindromeAlert").classList.add("alert-danger");
        return `<strong>${userString}</strong> is not a palindrome.`;
    } 
}

//display message
//view function
function isPalin(palin) {
    //write message to HTML and turn on alert
    document.getElementById("palindromeMessage").innerHTML = `${palin}`;
    document.getElementById("palindromeAlert").classList.remove("invisible");
}