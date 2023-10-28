8
1846

8
1846, 1659

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
  getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?
  
//your name is alejandro and you like purple
//your name is Melissa and you like green
//your name is undefined and you like green

//maya
//Marisa
//CHi

//raindrops on roses
//whiskers on kittens
//[ "Bright copper kettles",
 // "warm woolen mittens",
//"Brown paper packages tied up with strings"]
  
//[10,30,20]

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
var b = obj.numbers.b;
  
let { a, b } = numbers

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

let arr = [1, 2];

[arr[0], arr[1]] = [arr[1], arr[0]];

const results = ([first, second, third, ...rest]) =>
    ({ first, second, third, rest });