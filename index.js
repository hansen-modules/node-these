'use strict';

//var pr;
//if (typeof Promise == 'undefined') {
//  var _g = (function*(...strs) {
//    var index = 0;
//    while (strs[index]) {
//      yield strs[index++];
//    }
//  })(
//    'any-promise',
//    'es6-promise',
//    'promise',
//    'native-promise-only',
//    'bluebird',
//    'rsvp',
//    'when',
//    'q',
//    'pinkie',
//    'lie',
//    'vow'
//  );
//  while (!pr) {
//    try {
//      pr = require(_g.next());
//    } catch (e) {/*empty*/}
//  }
//} else {
//  pr = Promise;
//}

module.exports = (...promises) => {
  return new Promise(async (resolve, reject) => {
    let results = [];
    for (let promise of promises.map(Promise.resolve, Promise)) {
      results.push(await promise.then(async resolvedData => await resolvedData, reject));
      if (results.length === promises.length) {
        resolve(results);
      }
    }
  });
};