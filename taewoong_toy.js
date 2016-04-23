// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"




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
