//Starting with javaScript

//var let const
//variable declaration
//VAR
var a;
a=10;
console.log(a);
a="hello";
console.log(a);
//typeof operator->tells type of data stored 
console.log(typeof a);

a=true;
console.log(a);
console.log(typeof a)

a=null;
console.log(a);
console.log(typeof a)


//var
var num=10;
console.log(num);
var float=2.4;
console.log(float);

//Boolean
var t=true;
var f=false;
console.log(t);
console.log(f);

//String
// ' '," ",``
//single double and backtick
var str='a';
console.log(typeof str);
str="How you doin \n I'm fine";
console.log(str);

var num=100;
console.log(`half of ${num} is ${num/2} `)


//Redeclaration Of var is allowed -problem with Var
var r=100;
console.log(r);

var r="Hello";
console.log(r);

//Let keyword
let l=1000;
console.log(l);

let l="2000";
console.log(l);
//Output can be reinitialized but not re declared
//SyntaxError: Identifier 'l' has already been declared
