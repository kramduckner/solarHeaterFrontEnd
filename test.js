var Rx  = require('rx');


var source = Rx.Observable.range(1, 3)
  .scan(function (acc, x, i, source) { 

	console.log(acc);
	console.log(x);
	return acc + x;
 
});

var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });

