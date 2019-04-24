(function(){
    'use strict';
    $(document).ready(function () {
        var country = $('#country');
        $.get('https://restcountries.eu/rest/v2/all', function(data) {
            $.each(data, function (i, val) {
                var html = '<option>';
                html += val.name+ '</option>';
                $('#country').append(html);
            });
        })
    });
})()


