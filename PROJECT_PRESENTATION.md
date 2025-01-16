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