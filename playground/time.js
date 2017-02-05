const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());
// console.log(date.getYear());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment(someTimestamp);

// date.subtract(4, 'hours');
console.log(date.format('h:mm a'));
