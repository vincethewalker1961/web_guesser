function reverse(string) {
    return string.split("").join("");
}

function emailParts(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}