import {
    findTheTraitor
  } from "./main.js";
  
  import {expect, test} from "vitest";

//test cases
// T in the middle only 
// T at the middle and the start 
// T at the middle and the end 
// T in the middle and L at the end 
// T in the middle and L in the middle 


test("Selects player with a 'T' in the middle", () => {
    const players1 = ['minTah', 'vito', 'jerry'];
    expect(findTheTraitor(players1)).toBe('minTah'); 
  
    const players2 = ['freddy', 'Tjames', 'maddy', 'linTda'];
    expect(findTheTraitor(players2)).toBe('linTda');  
  
    const players3 = ['harTry', 'georgia', 'linda', 'minahT', 'markus'];
    expect(findTheTraitor(players3)).toBe('harTry');  

    const players4 = [ 'davidL', 'monika', 'madTdy'];
    expect(findTheTraitor(players4)).toBe('madTdy');  

    const players5 = ['damian', 'madLdy', 'madTdy'];
    expect(findTheTraitor(players5)).toBe('madTdy'); 
  });

//test cases
// T at the end
// T at the start 
// Wrong letter in the middle
// lower case t in the middle



test("No traitors are left", () => {
    const players6 = ['david', 'monika', 'maddy'];
    expect(() => findTheTraitor(players6)).toThrowError('No traitor found');

    const players7 = ['harry', 'georgia', 'linda', 'minahT', 'markus'];
    expect(() => findTheTraitor(players7)).toThrowError('No traitor found');

    const players8 = ['freddy', 'Tjames', 'maddy', 'linda']
    expect(() => findTheTraitor(players8)).toThrowError('No traitor found');

    const players9 = ['freddy', 'jamMes', 'maddy', 'linda'];
    expect(() => findTheTraitor(players9)).toThrowError('No traitor found');

    const players10 = ['Chtris', 'Anna-Marie', 'Faisal' ];
    expect(() => findTheTraitor(players10)).toThrowError('No traitor found');

});

