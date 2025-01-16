//MVP 1
// Faithful, you need to find the traitor in your midst. 

// There is a list of names in an array for you to choose from 

// The traitor is the person with 6 characters in their name 

// select the person's name from the array 

// MVP 2

// The traitor has a capitol T in the middle of their name


// MVP 3
// throw an error 

//   if (!traitor) {
//         throw new Error('No traitor found');
//     }


// aiming for a 7 or 8 kata 
// 
//
//
//


export function findTheTraitor(players){
    const traitor = players.find(player => player.length === 6 && player.slice(1, 5).includes('T'));
   if (!traitor){
    throw new Error ('No traitor found');
 }
  return traitor;    
};


