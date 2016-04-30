// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"


//gg

function printArray(array){
   
  return array.join(',');

}

console.log(printArray(["h","o","l","a"]));


///////////////////////////////////////


// Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34
// But can you do it in 1 line of code and without any conditionals?

function opposite(number) {
  
	return number * (-1);

}

console.log(opposite(1));
console.log(opposite(-34));



///////////////////////////////////////


// Task:

// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]

//apple=[["A","A","A","A","A"],
//		["A","A","A","A","A"],
//		["A","A","A","A","A"],
//		["A","A","A","B","A"],
//		["A","A","A","A","A"]];

//[3,3]

apple = [["A","A","A","A","A"],
		["A","A","A","A","A"],
		["A","A","A","A","A"],
		["A","A","A","B","A"],
		["A","A","A","A","A"]];

function sc(apple){

	var result = [];

	for(var i=0; i<apple.length; i++){
		for(var j=0; j<apple[i].length; j++){
			if(apple[i][j] === 'B'){

				result = [i,j];

			}
		}
	}
	return result;
}


console.log(sc(apple))


///////////////////////////////////////


/**
 * Using the JavaScript language, have the function LetterCapitalize(str) 
 * take the str parameter being passed and capitalize the first letter of each word. 
 * Words will be separated by only one space. 
 * example 1: letterCapitalize("hello world"); => "Hello World"
 * example 2: letterCapitalize("javascript is sexy") => "Javascript Is Sexy"
 */

var letterCapitalize = function(str) { 
	
	var strSplit = str.split(' ');
	var result = [];

	for(var i=0; i<strSplit.length; i++){
		result[i] = strSplit[i][0].toUpperCase() + strSplit[i].slice(1);
	}
	
	return result.join(' ');

};

console.log(letterCapitalize("hello world"));
console.log(letterCapitalize("javascript is sexy"));






/**
* Given an arbitrary input string, return the first nonrepeated character in
* the string. For example:
*
*   firstNonRepeatedCharacter('ABA'); // => 'B'
*   firstNonRepeatedCharacter('AACBDB'); // => 'C'
*/

var firstNonRepeatedCharacter = function(string) {
 
	var firstLetter = string[0];
	var result;

	for(var i=0; i<string.length; i++){
		if(firstLetter !== string[i]){
			result = string[i];
			break;
		}
	}
	return result;
};

console.log(firstNonRepeatedCharacter('AAAAPDDPP'));
console.log(firstNonRepeatedCharacter('DDDRRRVV'));
console.log(firstNonRepeatedCharacter('DFHTH'));






function ABCheck(str){

  var result;

  for(var i=0; i<str.length; i++){
    if(str[i] === 'a' && str[i+4] === 'b'){
      result = true;
      break;
    }
    else{
      result = false;
    }
  }
  return result;
}







/** 
 + * An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
 + * Implement a function that determines whether a string that contains only letters is an isogram. 
 + * Assume the empty string is an isogram. Ignore letter case.
 + * example 1: isIsogram("Dermatoglyphics"); => true
 + * example 2: isIsogram("aba"); => false
 + * example 3: isIsogram("moOse"); => false // -- ignore letter case
 + 
 +
 +var isIsogram = function(str) {
 +  //Your code here
 +};
*/


 var isIsogram = function(str){

 	var result = false;
	var strCount = 0;
	var lowerLetter = str.toLowerCase();
	var splitStr = lowerLetter.split("")

	for(var i=0; i<splitStr.length; i++){
	  for(var j=0; j<splitStr.length; j++){
	    if(splitStr[i] == splitStr[j]){
	      strCount += 1;
	   	   };
	    };
	}

	  if(strCount === splitStr.length){
	    result = true;
	  }

	  return result;

};







+/**
 + * In this exercise, you are required to, given a string, 
 + * replace every letter with its position in the alphabet. 
 + * If anything in the text isn't a letter, ignore it 
 + * and don't return it. a being 1, b being 2, etc.
 + * example 1: alphabetPosition("The sunset sets at twelve o' clock."); => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 + 
 +
 +var alphabetPosition = function(text) {
 +  // Your code here
 +  return text;
 +};
*/



var alphabetPosition = function(text){

  var result = [];
  var abc = 'abcdefghijklmnopqrstuvwxyz';
  var textLower = text.toLowerCase();
  var makeText = textLower.split(" ").join('');
  
  for(var i=0; i<makeText.length; i++){
    for(var j=0; j<abc.length; j++){
      if(makeText[i] == abc[j]){
        result.push(j);
      }
    }
  }
  return result.join(" ");
};







/*
Using the JavaScript language, have the function RunLength(str) take the str parameter 
 +// being passed and return a compressed version of the string 
 +// using the Run-length encoding algorithm. 
 +// This algorithm works by taking the occurrence of each repeating character 
 +// and outputting that number along with a single character of the repeating sequence. 
 +// For example: "wwwggopp" would return 3w2g1o2p. 
 +// The string will not contain any numbers, punctuation, or symbols. 
 +
 +function RunLength(str) { 
 +
 +  // code goes here  
 +  return str; 
 +         
 +}
*/



function RunLength(str){

  var strCount = 1;
  var result = "";

  for(var i=0; i<str.length; i++){
    if(str[i] === str[i+1]){
      strCount += 1;
    }
    else{
      result += strCount;
      result += str[i];
      strCount = 1; // count 리셋!
    }
  }
  return result;
}






/*
+// Using the JavaScript language, have the function PowersofTwo(num) take the num parameter 
 +// being passed which will be an integer and return the string true 
 +// if it's a power of two. If it's not return the string false. 
 +// For example if the input is 16 then your program should return the string true 
 +// but if the input is 22 then the output should be the string false.
 +
 +function PowersofTwo(num) { 
 +
 +  // code goes here  
 +  return num; 
 +         
 +}
*/

function PowersofTwo(num){

  var result = false;

  do{
    num/=2;
    if(2>num>=1){
      if(num === 1){
        return true;
      }else{
        return false;
      }
    }
  }while(num > 1);
}







/*
+// Using the JavaScript language, have the function ThreeFiveMultiples(num) 
 +// return the sum of all the multiples of 3 and 5 that are below num. 
 +// For example: if num is 10, the multiples of 3 and 5 
 +// that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, 
 +// so your program should return 23. The integer being passed will be between 1 and 100. 
 +
 +function ThreeFiveMultiples(num) { 
 +
 +  // code goes here  
 +  return num; 
 +         
 +}
 */



function ThreeFiveMultiples(num){

  var numThree = [];
  var numFive = [];
  for(var i=1; i<num; i++){
    numThree.push(3*i) ;
    numFive.push(5*i) ;
  }

  var result = 0;
  for(var i=0; i<numThree.length; i++){
    if(numThree[i] < num){
      result += numThree[i];
    }
    if(numFive[i] < num){
      result += numFive[i];
    }
  }
  return result;
}


