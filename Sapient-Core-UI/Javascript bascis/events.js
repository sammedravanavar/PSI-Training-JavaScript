(function () {
    'use strict';

    var btn = document.getElementById('btnTest');
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log(this);
    })

    var input = document.getElementById('inpuTest');
    input.addEventListener('keypress', function (e) {
        console.log(e);
        console.log(this);
        validateInput(e,/^[A-Za-z]+$/);
    })
    function validateInput(e,regex){
        if (regex.test(e.key)) {
            //condition ok.
        } else {
            e.preventDefault();
        }
    }
})();