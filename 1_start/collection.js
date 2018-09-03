(function(){
    'use strict';

    var char = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
    for(var i=0; char.length > i; i++){
        for(var j=0; char.length > j; j++){
            document.write(char[i] + char[j] + '<br>');
        }
    }
})();