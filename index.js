Adding two strings

var mynm = "Malik"
var mystr = "My Name Is " + mynm + " I Am Good"
console.log(mystr)

var som = " worthwhile";
var add = "Learning Code Is"
add += som
console.log(add)

Adding two strings

No OF Words

var no = "0"
var nm = "Hammad"
no = nm . length
console.log(no)

No OF Words

Letter No eg. First No starts with 0 is first then 1 is second then 2 is third then 3 is forth

var no = ""
var nm = "Hammad"
no = nm [0]
console.log(no)

Letter No

Changing Name In Result

var str = "Jammad"
str = "Hammad"
console.log(str)

Changing Name In Result

Bracket Notation To Find Last Character In String

var nm = "Hammad"
var no = nm[nm.length-1]
console.log(no)

Bracket Notation To Find Last Character In String

Word Blanks

function  words(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store"
  return result;
}

console.log(words("dog", "big", "ran", "quickly"));

Word Blanks

Store Multiple Values With Arrays

var str = ["Hammad" , 20];
console.log(str)

Store Multiple Values With Arrays

Nested Arrays

var nest = [["Hammad", 20], ["Works", 1] ];
console.log(nest);

Nested Arrays

Access Array Data with Indexes

var data = [50, 60, 70]
var out = data [2]
console.log(out)

Access Array Data with Indexes

Modify Array Data With Indexes

var myno = [60, 56, 45]
myno[1] = 65
console.log(myno)

Modify Array Data With Indexes

Access Multidimensional Arrays With Indexes

var data = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];
var net = data[1][0] 0 box shoes inner num while 1 box shoes 4,5,6 box means whole box
console.log(net)

Access Multidimensional Arrays With Indexes

// Manipulate Arrays With Push ()

var mynam = ["Hammad", "20"]
mynam.push(["Ahmed" , "7thClub"])
console.log(mynam)

// Manipulate Arrays With Push ()

// Manipulate Arrays With Pop ()

var my = [1,2,3]
var result = my.pop()
console.log(my)

// Manipulate Arrays With Pop ()

// Manipulate Arrays With Shift ()

var myar = ["Hammad", "Huzaifa", ["Js"] ]
var result = myar.shift()
console.log(myar)

// Manipulate Arrays With Shift ()

// Manipulate Arrays With UnShift ()

var myar = ["Hammad", "Huzaifa", "Js"]
myar.shift();
myar.unshift("Abdul");
console.log(myar)

// Manipulate Arrays With UnShift ()

// Shopping List

var list = [["Olper", 3], ["Dairy", 2], ["Juice", 5], ["Lilac", 5]]

// Shopping List

// Resuable Code With Fuctions

function h1() {
  console.log("Hello");
}

h1();

// Resuable Code With Fuctions

// Passing Values To Fuctions with Arguments
// Sub

function values1 (a, b) {

  console.log(a-b)
}
values1(10, 5);
// Sub

// Sum
function val2 (a,b) {
console.log(a+b)
}
val2(15,5);
// Sum
// Passing Values To Fuctions with Arguments

// Local Scope And Fuctions

function myloc() {
  var myvar = 10;
  console.log(myvar);
}
myloc();

// Local Scope And Fuctions

// Global VS Local Scope In Fuctions

var out = "Iphone 15";

function myloc() {

  var out = "Pro Max"
  return out;
}
console.log(myloc()); This IS For Pro Max
console.log(out) This IS For Iphone 15

// Global VS Local Scope In Fuctions

Return A Value From A Fuction With Return

function value(nm) {
  return nm - 5;
}
console.log(value(25));

function value(nm) {
  return nm * 5;
}
console.log(value(5));
Return A Value From A Fuction With Return

// Understanding Undefined Value Retured From A Fuction

var sum = 0;
function add() {
  sum = sum + 5
}

var sub = 0;
function sub() {
  sub -= 6
}
console.log(sub)

// Understanding Undefined Value Retured From A Fuction

// If Statement

function trfal(tru) {
  if (tru) {
    return "Yes, its true";
  }
  return "No, its false";
}
console.log(trfal(true)); True
console.log(trfal(false)); False

// If Statement

// Comparison With The Equality Operator

function eq(no) {
  if (no == 5) { We Us double equal to assign no as 5 value while single sign represents the equality fuction
    return "Equal";
  }
  return "Not Equal";
}
console.log(eq(5)); "Equal"
console.log(eq(6)); "Not Equal"

// Comparison With The Equality Operator

// Comparison With Strict Eqaulity Operator

function str(no) {
  if (no === '2') False  if (no === 2) True {
    return "Equal";
  }
  return "Not Equal"
}
console.log(str(2))

/*
3 === 3 It is strict Equality Operator It Doesnot do same thing as double equal do but It going to evaluate true
3 === '3' With The String On sides is going to evaluate false
Both Of These Could Be True If The Situation IS
3 == 3
3 == '3'
*/

// Comparison With Strict Eqaulity Operator

// Practice Comparing Different Values

function eq(a, b) {
  if (a == b) { With The Double It Goes True But With Three It Goes False At That Place
    return "Equal";
  }
  return "Not Equal"
}
console.log(eq(10 ,'10'));

// Practice Comparing Different Values

// Comparison With The Inequality Operator

function noteq(no) {
  if (no != 50) {
    return "Not Equal";
  }
    return "Equal";
}
console.log(noteq(10));

// Comparison With The Inequality Operator

// Comaprison With Strict Inequality Operator

function strnoteq(no) {
  if (no !== 10) { If No Not Equal 10
    return "Not Equal";
  }
  return "Equal";
}
console.log(strnoteq(5))

// Comaprison With Strict Inequality Operator

// Comaprison With The Logical And Operator

function grtthen (no) {
  if (no > 100) {
    return "100"
  }
  if (no > 50) {
    return "50"
  }
  return "50 or Under "
}
console.log(grtthen(110))

// Comaprison With The Logical And Operator

// Comaprison With The Greater Than Or Equal To Operator

function grtoreq (no) {
  if (no >= 20) {
    return "20"
  }
    if (no >= 10) {
      return "10"
   }
  return "Less Than 10"
}
console.log(grtoreq (10))

// Comaprison With The Greater Than Or Equal To Operator

Comaprison With Less Than Operator

Comaprison With Less Than Operator
