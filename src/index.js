module.exports = function toReadable(number) {
const numFrom0to19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundreds = ['hundred'];
let result = '';

if (0 > number){
    result = 'The number entered is less than zero';
}
if (number < 20) {
    result = numFrom0to19[number];
}

let arr = Array.from(number.toString());

if (20 <= number && number < 100) {
    if (arr[1] === '0') {// if second digit of number is '0'//go from end
        result = tens[arr[0]];//->for 20,30 ... 90 ['2' & '0']
    }else{
        result = tens[arr[0]] + ' ' + numFrom0to19[arr[1]];//if second digit of number is NOT '0' -> for 21 ['2' & '1']..22, 23
    }
}else if (100 <= number && number < 1000) {
    if (arr[1] === '0' && arr[2] === '0') {// if second digit of number is '0' && third is '0'
        result = numFrom0to19[arr[0]] + ' ' + hundreds[0];//-> for 100 'one hundred', 200...900
    }else if (arr[1] === '0' && arr[2] !== '0') {
        result = numFrom0to19[arr[0]] + ' ' + hundreds[0] + ' ' + numFrom0to19[arr[2]];//101->[1]100[1], 102->[1]100[1]
    }else if (arr[1] !== '0' && arr[2] === '0') {
        result = numFrom0to19[arr[0]] + ' ' + hundreds[0] + ' ' + tens[arr[1]];//110->[1]hundred[ten], 120[1]hundred[twenty]
    }else if (arr[1] === '1' && arr[2] !== '0') {
        let sumOf2And3Digits = arr[1] + arr[2];//1 & 1
        result = numFrom0to19[arr[0]] + ' ' + hundreds[0] + ' ' + numFrom0to19[sumOf2And3Digits];//111->[1]hundred[1&1],112...119,211...219,...911..919
    }else if (arr[1] !== '0' && arr[2] !== '0') {
        result = numFrom0to19[arr[0]] + ' ' + hundreds[0] + ' ' + tens[arr[1]] + ' ' + numFrom0to19[arr[2]];//121->[1]hundred[twenty][1],122...129,131..139,...991..999
    }else{
        result = 'The number entered is more than 999';
    }
}

return result;
}
