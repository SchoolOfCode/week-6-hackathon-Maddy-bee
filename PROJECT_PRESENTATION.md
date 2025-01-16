Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)





export function findTheTraitor(players){
    return 'Hannah'

}


test("Selects player with a 6 character name", () => {
    const players1 = ['Alice', 'Vito', 'Hannah', 'Jerry'];

    expect(findTheTraitor(players1)).toBe('Hannah');


});

test("Selects player with a 6 character name", () => {
    const players1 = ['Alice', 'Vito', 'Hannah', 'Jerry'];

    expect(findTheTraitor(players1)).toBe('Hannah');

    const players2 = ['Freddy', 'James', 'Maddy'];

    expect(findTheTraitor(players2)).toBe('Freddy');

    const players3 = ['Harry', 'Georgia', 'Linda', 'Minah', 'Markus'];

    expect(findTheTraitor(players2)).toBe('Markus');


});


test("Selects player with a 6 character name", () => {
    const players1 = ['Alice', 'Vito', 'Hannah', 'Jerry'];

    expect(findTheTraitor(players1)).toBe('Hannah');

    const players2 = ['Freddy', 'James', 'Maddy'];

    expect(findTheTraitor(players2)).toBe('Freddy');

    const players3 = ['Harry', 'Georgia', 'Linda', 'Minah', 'Markus'];

    expect(findTheTraitor(players3)).toBe('Markus');


});


export function findTheTraitor(players){
    return players.find(player => player.length === 6);
}



export function findTheTraitor(players){
    for (let i = 0; i < players.length; i++) {
        if (players[i].length === 6) {
          return players[i];
        }
    }
}



export function findTheTraitor(players){
    return players.find(player => player.length === 6 && player.slice(1, 5).includes('T'));
}


test("Selects player with a 6 character name and a 'T' in the middle", () => {
    const players1 = ['MinTah', 'Vito', 'Jerry'];
    expect(findTheTraitor(players1)).toBe('MinTah'); 
  
    const players2 = ['Freddy', 'James', 'Maddy', 'LinTda'];
    expect(findTheTraitor(players2)).toBe('LinTda');  
  
    const players3 = ['HarTry', 'GeorTgia', 'Linda', 'Minah', 'Markus'];
    expect(findTheTraitor(players3)).toBe('HarTry');  
  });


export function findTheTraitor(players){
    const traitor = players.find(player => player.length === 6 && player.slice(1, 5).includes('T'));
    return traitor || 'All players are faithful';
};


test("Every player is faithful", () => {
    const players4 = ['David', 'Monika', 'Maddy'];
    expect(findTheTraitor(players4)).toBe('All players are faithful')

});


export function findTheTraitor(players){
    const traitor = players.find(player => player.length === 6 && player.slice(1, 5).includes('T'));

    if (!traitor){
        throw new Error ('No traitor found');
    }
    return traitor;
};

//test 3.v2
// if there is no traitor, throw an error instead
//same test case 
// different message 'No traitor found' 

test("Every player is faithful", () => {
    const players5 = ['David', 'Monika', 'Maddy'];
    expect(() => findTheTraitor(players5)).toThrowError('No traitor found');
});


// test 3.v1
// test case needs to have no traitors present 

// test("Every player is faithful", () => {
//     const players4 = ['David', 'Monika', 'Maddy'];
//     expect(findTheTraitor(players4)).toBe('All players are faithful')

// });


//test 3.v2
// if there is no traitor, throw an error instead
//same test case 
// different message 'No traitor found' 

// on review, I found it could pass with just the T rule, so I added a new throw error for a case where the t was there, but the length didn't match 


// test 1 
// think of 3 test cases - considerations 
// different lengths of the array, different positions in the array, 
// ['Alice', 'Vito', 'Hannah', 'Jerry']
// ['Freddie', 'James', 'Maddy'] = Freddy
// ['Harry', 'Georgia', 'Linda', 'Minah', 'Markus']  = Markus


// end result has to be the one selected name 


// test("Selects player with a 6 character name", () => {
//  const players1 = ['Alice', 'Vito', 'Hannah', 'Jerry', 'Antonio', 'Penelope',];
//  expect(findTheTraitor(players1)).toBe('Hannah')
// });



//     expect(findTheTraitor(players1)).toBe('Hannah');

//     const players2 = ['Freddy', 'James', 'Maddy'];

//     expect(findTheTraitor(players2)).toBe('Freddy');

//     const players3 = ['Harry', 'Georgia', 'Linda', 'Minah', 'Markus'];

//     expect(findTheTraitor(players3)).toBe('Markus');


// });

// no traitors present? 

// must return undefined? 

// Test 2 
// The traitors have a capitol T hidden in their name to mark them out e.g. MinTah
// Test cases
// One T and one 6, Two Ts and one 6, two 6's and one T


// test 3.v1
// test case needs to have no traitors present 

// test("Every player is faithful", () => {
//     const players4 = ['David', 'Monika', 'Maddy'];
//     expect(findTheTraitor(players4)).toBe('All players are faithful')

// });


//test 3.v2
// if there is no traitor, throw an error instead
//same test case 
// different message 'No traitor found' 

// on review, I found it could pass with just the T rule, so I added a new throw error for a case where the t was there, but the length didn't match 

//   if (!traitor) {
//         throw new Error('No traitor found');
//     }


// aiming for a 7 or 8 kata 
// 
//
//
//
