const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */


function createDreamTeam(members) {
    let first = members[0].charAt(),
        second = members[1].charAt(),
        third =  members[2].charAt(),
        forth =  members[3].charAt();

      let join = first.concat(second,third,forth);


      if (typeof join === 'string') {

       return join.split('').sort().join('');

      }
}


createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']);

module.exports = {
  createDreamTeam
};
