'use strict';

var pr;
if (typeof Promise == 'undefined') {
  var _g = (function*(...strs) {
    var index = 0;
    while (strs[index]) {
      yield strs[index++];
    }
  })(
    'any-promise',
    'es6-promise',
    'promise',
    'native-promise-only',
    'bluebird',
    'rsvp',
    'when',
    'q',
    'pinkie',
    'lie',
    'vow'
  );
  while (!pr) {
    try {
      pr = require(_g.next());
    } catch (e) {/*empty*/}
  }
} else {
  pr = Promise;
}

module.exports = (...args) => {
  return pr.all(args);
};