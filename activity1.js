var Num = 324;
var numOutput ="";

function onesWord(ones){
switch(ones){
    case "1" :
        return "one"
        break;
    case "2" :
        return "two"
        break;
    case "3" :
        return "three"
        break;
    case "4" :
        return "four"
        break;
    case "5" :
        return "five"
        break;
    case "6" :
        return "six"
        break;
    case "7" :
        return "seven"
        break;
    case "8" :
        return "eight"
        break;
    case "9" :
        return "nine"
        break;
}
}

function tensWord(tens){
    if(tens[1]===0){
        switch(tens[0]){
            case "1" :
                return "ten"
                break;
            case "2" :
                return "twenty"
                break;
            case "3" :
                return "thirty"
                break;
            case "4" :
                return "fourty"
                break;
            case "5" :
                return "fifty"
                break;
            case "6" :
                return "sixty"
                break;
            case "7" :
                return "seventy"
                break;
            case "8" :
                return "eighty"
                break;
            case "9" :
                return "ninety"
                break;
        }
    }
    else if (tens[0] >= 2){
        switch(tens[0]){
            case "2" :
                return "twenty " + onesWord(tens[1])
                break;
            case "3" :
                return "thirty " + onesWord(tens[1])
                break;
            case "4" :
                return "fourty " + onesWord(tens[1])
                break;
            case "5" :
                return "fifty " + onesWord(tens[1])
                break;
            case "6" :
                return "sixty " + onesWord(tens[1])
                break;
            case "7" :
                return "seventy " + onesWord(tens[1])
                break;
            case "8" :
                return "eighty " + onesWord(tens[1])
                break;
            case "9" :
                return "ninety " + onesWord(tens[1])
                break;
        }
    }
    else if(tens[0] == 1){
        switch(tens[1]){
            case "1" :
                return "eleven"
                break;
            case "2" :
                return "twelve"
                break;
            case "3" :
                return "thrirteen"
                break;
            case "4" :
                return "fourteen"
                break;
            case "5" :
                return "fifteen"
                break;
            case "6" :
                return "sixteen"
                break;
            case "7" :
                return "seventeen"
                break;
            case "8" :
                return "eighteen"
                break;
            case "9" :
                return "nineteen"
                break;
        }
    }

}

if (Num >= 1 && Num < 1000){

strNum = Num.toString();
 if (strNum.length == 1){
    numOutput = onesWord(strNum)
 }
 else if (strNum.length == 2){
    numOutput = tensWord(strNum)
 }
 else if (strNum.length == 3){
    numOutput = onesWord(strNum[0]) + " hundred " + tensWord(strNum.slice(1))
 }
 else{
    console.log("INVALID");
 }
};
console.log(numOutput);