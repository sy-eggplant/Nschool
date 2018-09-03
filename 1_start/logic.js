(function(){
    'use strict';
var fee;
var age = 16;
var isFemale = true;
if (age <= 15) {
    fee = 800;
} else if (isFemale ){
    fee = 1000;
} else {
    fee = 1800;
}

document.write(fee);
})();