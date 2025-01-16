//MVP 1
// Faithful, you need to find the traitor in your midst. 

// There is a list of names in an array for you to choose from 

// The traitor is the person with 6 characters in their name 

// select the person's name from the array 

// MVP 2

// The traitor has a capitol T in the middle of their name


// MVP 3
// the traitor's name is a palindrome 











export function findTheTraitor(players){
    for (let i = 0; i < players.length; i++) {
        if (players[i].length === 6) {
          return players[i];
        }
    }
}


