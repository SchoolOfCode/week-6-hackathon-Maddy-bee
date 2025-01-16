import {
    findTheTraitor
  } from "./main.js";
  
  import {expect, test} from "vitest";



test("Selects player with a 'T' in the middle", () => {
    const players1 = ['MinTah', 'Vito', 'Jerry'];
    expect(findTheTraitor(players1)).toBe('MinTah'); 
  
    const players2 = ['Freddy', 'James', 'Maddy', 'LinTda'];
    expect(findTheTraitor(players2)).toBe('LinTda');  
  
    const players3 = ['HarTry', 'GeorTgia', 'Linda', 'Minah', 'Markus'];
    expect(findTheTraitor(players3)).toBe('HarTry');  
  });


test("Every player is faithful", () => {
    const players5 = ['David', 'Monika', 'Maddy'];
    expect(() => findTheTraitor(players5)).toThrowError('No traitor found');

    const players6 = ['Freddy', 'James', 'Maddy', 'MarTina'];
    expect(() => findTheTraitor(players6)).toThrowError('No traitor found');
});

