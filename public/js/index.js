(function(){
    'use strict';
    $('#search').bind('click',function(){
        $('#item').val(function(index, value){
            alert(value)
            $.post('/api/search',value,function(data){
                alert(data)
                console.log(data)
            }
            )
        })
    })
})()