function palindrome(str) {
    let cleanedStr = cleanStr(str);
    let strPaliArr = [];

    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        strPaliArr.push(cleanedStr[i]);
    }

    return cleanedStr === strPaliArr.join('');

}

function cleanStr(str) {
    return str.toLowerCase().replace(/[\s|\*|\-|\#|\_|\.|\,|\\|\||\/|\:|\(|\)]/g, '');
}

(palindrome("eye"));