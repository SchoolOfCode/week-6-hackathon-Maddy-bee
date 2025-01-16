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


test("Selects player with a 6 character name", () => {
    const players1 = ['Alice', 'Vito', 'Hannah', 'Jerry'];

    expect(findTheTraitor(players1)).toBe('Hannah');

    const players2 = ['Freddy', 'James', 'Maddy'];

    expect(findTheTraitor(players2)).toBe('Freddy');

    const players3 = ['Harry', 'Georgia', 'Linda', 'Minah', 'Markus'];

    expect(findTheTraitor(players3)).toBe('Markus');


});





