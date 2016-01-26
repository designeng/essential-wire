var when = require('when');

module.exports = function Log(str){
    return when.promise(function(resolve, reject, notify) {
        resolve(str);
    });
}