// *  Before you start this task, don't forget to use command 'npm install'. *


// Faithful, you need to find the traitor in your midst. 

// There is a list of names in an array for you to choose from.

// Select the person's name from the array. Your only clue is that they have a hidden capital T in the middle of their name.


// An Example would be:   

// const players = [ 'davidL', 'monika', 'madTdy']

// Would have the answer of 'madTdy' .

// If you have already banished all of the traitors, throw the error 'No traitor found' .

// Happy hunting!  


export function findTheTraitor(players){
    for (const player of players) {
     const parts = player.split('T');
     if (parts.length === 2 && player.indexOf('T')> 0 && player.indexOf('T') < player.length - 1 ) {
           return player;
     }
    }
   
   throw new Error('No traitor found');
   
   };










