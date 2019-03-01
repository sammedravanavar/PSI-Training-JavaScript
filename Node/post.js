$(document).ready(function(){
    let payload = {country:"", email: "", number:""}
    $('#add').bind('click',function(){
        payload.country = $('#code').val()
        payload.email = $('#email').val()
        payload.number = $('#ph').val()
        $.ajax({
            url: 'http://ec2-52-15-82-159.us-east-2.compute.amazonaws.com/gigx/api/signup',
            type: 'POST',
            data: payload
        }).then(result=>{
            console.log(result)
        }).catch(err=>{
            console.log(err)
        })
    })
    
})