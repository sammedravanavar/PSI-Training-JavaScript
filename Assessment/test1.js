(function(){
    'use strict';
    function removeChar(){
        
        var text = document.getElementById('text')
        text.value = text.value.slice(1,-1)
        // return a.slice(1,-1)
    }
    document.getElementById('btn').addEventListener('click',removeChar)
})();
