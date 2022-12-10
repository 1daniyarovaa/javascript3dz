//1(задача)

function sravnenie(number1,number2){
   if(number1<number2){
    return number1
   }else{
    return number2
   }
}
console.log(sravnenie(19,98))

//2(задача)

let mass1=[1,2,3,4];
let mass2=[1,2,3,4]

function twoMass(){
    if(mass1.length > mass2.length){
     console.log("mass1 больше");
    }else if(mass2.length > mass1.length){
        console.log("mass2 больше");
    }else{
        console.log("они равны");
    }
}
console.log(twoMass());

//3(задача)

let str1 = 'string45'
let res = str1.length
function countChar(arg1){
    return arg1.length
}
console.log(countChar(str1))