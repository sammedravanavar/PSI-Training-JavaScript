$(document).ready(() => {
    $('#button').bind('click', function () {
       
        
        const searchAPI = '/getData';
        $.ajax({
            url: '/getStream',
            type: "GET",
        }).then(result => {
           $('#data').append(result);
        }).catch(err => {
            console.log(err);
        });
    });
});
