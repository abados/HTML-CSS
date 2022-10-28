"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "your article is in queue";
let strArray = [...str];
str = "" + strArray[0];
for (let i = 1; i < strArray.length; ++i) {
    if ("aeiou".indexOf(strArray[i - 1]) !== -1 && "aeiou".indexOf(strArray[i]) !== -1) {
    }
    else {
        str += strArray[i];
    }
}
console.log(str);
