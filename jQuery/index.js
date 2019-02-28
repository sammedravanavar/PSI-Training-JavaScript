(function(){
    'use strict';
    $('#btn').bind('click',function(){
        $('#p').toggle();
    })
    $('#btn').addClass('btn btn-primary')
    $('#text').addClass("form-control")
    $('#btn').append('paragraph')
    // $('#btn').html('paragraph')
    $('#btn').prepend('this');
    // $('#btn').remove();
})();