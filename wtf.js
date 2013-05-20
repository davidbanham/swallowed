var OPTS, p, propagit;

propagit = require('propagit');

OPTS = {
  hub: '127.0.0.1:7000'
};

p = propagit(OPTS);

p.hub.on('up', function(hub) {
  console.log("Hub is up");
  var x = die; // die is undefined, however no ReferenceError is thrown
  throw 'fail'; // This doesn't work either
});

p.on('error', function(err) {
  return console.log("there was an error"); // Never gets called
});

p.on('fail', function(err) {
  return console.log("something failed"); // Never gets called
});
