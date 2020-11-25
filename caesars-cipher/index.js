function rot13(str) {

    let all = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let regEx = /[\s|\*|\-|\#|\_|\.|\,|\\|\||\/|\:|\(|\)|\!|\?]/;

    for (let i = 0; i < str.length; i++) {

        if (str[i].match(regEx)) {
            result += str[i];
        } else {
            let index = all.indexOf(str[i]);
            let moveTo;

            if (26 - index <= 13) {

                let remainder = 26 - index;
                moveTo = 13 - remainder;

            } else {
                moveTo = index + 13;
            }
            result += all[moveTo];

        }
    }
    return result;
}


console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
