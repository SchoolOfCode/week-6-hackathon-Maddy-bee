import {
    findTheTraitor
  } from "./main.js";
  
  import {expect, test} from "vitest";



// test 1 
// think of 3 test cases - considerations 
// different lengths of the array, different positions in the array, 
// ['Alice', 'Vito', 'Hannah', 'Jerry']
// ['Freddie', 'James', 'Maddy'] = Freddy
// ['Harry', 'Georgia', 'Linda', 'Minah', 'Markus']  = Markus


// end result has to be the one selected name 


// test("Selects player with a 6 character name", () => {
//     const players1 = ['Alice', 'Vito', 'Hannah', 'Jerry'];

//     expect(findTheTraitor(players1)).toBe('Hannah');

//     const players2 = ['Freddy', 'James', 'Maddy'];

//     expect(findTheTraitor(players2)).toBe('Freddy');

//     const players3 = ['Harry', 'Georgia', 'Linda', 'Minah', 'Markus'];

//     expect(findTheTraitor(players3)).toBe('Markus');


// });

// no traitors present? 

// must return undefined? 


// The traitors have a capitol T hidden in their name to mark them out 
// either tell them what letter it is or not, just that it's a capitol
// it is the 6 including the T 
// One T and one 6, Two Ts and one 6, two 6's and one T
// test cases
// scenarios a case with just one with a capitol T in the middle 
// multiple with capitol T's in the middle, but different lengths
// 
// MinTah


test("Selects player with a 6 character name and a 'T' in the middle", () => {
    const players1 = ['MinTah', 'Vito', 'Jerry'];
    expect(findTheTraitor(players1)).toBe('MinTah'); 
  
    const players2 = ['Freddy', 'James', 'Maddy', 'LinTda'];
    expect(findTheTraitor(players2)).toBe('LinTda');  
  
    const players3 = ['HarTry', 'GeorTgia', 'Linda', 'Minah', 'Markus'];
    expect(findTheTraitor(players3)).toBe('HarTry');  
  });

