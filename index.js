import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const databox = [];

fifaData.forEach(function(item){
    if((item["Year"] === 2014) & (item["Stage"] === "Final")){
        databox.push(item['Home Team Name']);
        return databox
    };
});
console.log(databox)

const databox2 = [];

fifaData.forEach(function(item){
    if((item["Year"] === 2014) & (item["Stage"] === "Final")){
        databox2.push(item['Away Team Name']);
        return databox2
    };
});
console.log(databox2)

const databox3 = [];

fifaData.forEach(function(item){
    if((item["Year"] === 2014) & (item["Stage"] === "Final")){
        databox3.push(item['Home Team Goals']);
        return databox3
    };
});
console.log(databox3)

const databox4 = [];

fifaData.forEach(function(item){
    if((item["Year"] === 2014) & (item["Stage"] === "Final")){
        databox4.push(item['Away Team Goals']);
        return databox4
    };
});
console.log(databox4)

const databox5 = [];

fifaData.forEach(function(item){
    if((item["Year"] === 2014) & (item["Stage"] === "Final") & (item["Home Team Goals"] > item["Away Team Goals"])){
        databox5.push(item['Home Team Name']);
    }else if((item["Year"] === 2014) & (item["Stage"] === "Final") & (item["Home Team Goals"] < item["Away Team Goals"])){
        databox5.push(item["Away Team Name"]);
        
    }; return databox5 
});
console.log(databox5)

/* Task 2: Create a function called  getFinals that takes `data` as an argument
 and returns an array of objects with only finals data */


function getFinals(list) {
    const finalData = list.filter(function(item){
        return item["Stage"] === "Final";    
    }); return finalData
};

console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that
 accepts the callback function `getFinals`, and returns an array called
  `years` containing all of the years in the dataset */
const finalYears = [];

function getYears(cb) {
    let finalData = cb(fifaData);
    finalData.forEach(function(item){
        return finalYears.push(item['Year'])
    }); console.log(finalYears);
};

getYears(getFinals);


/* Task 5: Implement a higher-order function called `getWinners`, that
 accepts the callback function `getFinals()` and determine the
  winner (home or away) of each `finals` game. Return the name of all
   winning countries in an array called `winners` */ 
const finalWinners = [];

function getWinners(cb) {
    let finalData = cb(fifaData);
    finalData.forEach(function(item){
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            finalWinners.push(item['Home Team Name']);
        }else if(item["Home Team Goals"] < item["Away Team Goals"]){
            finalWinners.push(item["Away Team Name"]);
            
        }; return finalWinners 
    });
    console.log(finalWinners);
};

getWinners(getFinals);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that
 accepts the following parameters and returns a set of 
 strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

let champions = [];

function getWinnersByYear(cb, cb2) {
    let finalWinners = cb(getFinals);
    let finalYears = cb2(getFinals);
    for(i=0;i<finalYears.length;i++){
    return champions.push(`In ${finalYears[i]}, ${finalWinners[i]} won the world cup!`)
    };
};

getWinnersByYear(getWinners, getYears);

/* Task 7: Write a function called `getAverageGoals` that accepts a
 parameter `data` and returns the the average number of home team goals and 
 away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
