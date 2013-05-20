var OPTS, p, propagit, spawn;

propagit = require('propagit');
spawn = require('child_process').spawn;

server = spawn('./node_modules/.bin/propagit', ['--port=7002', 'hub']);

OPTS = {
  hub: '127.0.0.1:7002'
};

p = propagit(OPTS);

p.hub.on('up', function(hub) {
  console.log("Hub is up");
  var x = die; // die is undefined, however no ReferenceError is thrown
  throw new Error('fail'); // This doesn't work either
  console.log("This never happens"); // It really doesn't
});

p.on('error', function(err) {
  return console.log("there was an error"); // Never gets called
});

p.on('fail', function(err) {
  return console.log("something failed"); // Never gets called
});
