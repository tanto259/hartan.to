var list, index;
list = document.getElementsByClassName("javascript-required");

for (index = 0; index < list.length; ++index) {
    list[index].style.setProperty('display', 'block');
}

function rot47(inputString) {
    let strAsCodeArray = [];
    let charCode;
    
    for (let i=0; i < inputString.length; i++) {
        charCode = inputString.charCodeAt(i);
        if (charCode < 32 || charCode > 127) {return false;}
        if (charCode === 32) {
            strAsCodeArray.push(charCode);
        } else {
            strAsCodeArray.push(charCode>79 ? charCode-47 : charCode+47);
        }
    }

    return String.fromCharCode.apply(null, strAsCodeArray);
}

var email = document.getElementsByClassName("contact-button");

if (email) {
    email[0].setAttribute("href", "mailto:" + rot47(email[0].getAttribute("data")));
}