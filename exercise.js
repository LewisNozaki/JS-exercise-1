"use strict";

// Solution 1
function solution(str) {
  let arr = [];
  
   if (str.length % 2 === 0) {
     for (let i = 0; i < str.length; i++) {
       if (i % 2 === 0) {
         arr.push(str[i] + str[i + 1]);
       }
     }
   } else {
     str = str + "_"
     for (let i = 0; i < str.length; i++) {
       if (i % 2 === 0) {
         arr.push(str[i] + str[i + 1]);
       }
     }
   };
  
   return arr;
};

// Solution 2
function solution(str) {
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}