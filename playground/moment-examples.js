var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1487808041;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('D MMM, YY @ h:mm a'));

// February 3er, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ H:mm A'));
