//while document is completely is loaded execute the below function
$(document).ready(function(){
    'use strict';
    const countryApi = "https://restcountries.eu/rest/v2/all"
    $('#ddlCountry').bind('change',function(){
        alert(JSON.stringify(this.value))
    })
    function fetchCountries(){
        $.ajax({
            url: countryApi,
            // type: "GET",
            async: false,
        }).then(result => {
            console.log('got')
            bindCountries(result)
        }).catch(err => {
            console.log(err);
        })
        console.log('ok')
    }
    // function fetchCountries(){
    //     $.ajax({
    //         url: countryApi,
    //         // type: "GET",
    //         async: false,
    //         success: function(result){
    //             console.log('first')
    //             bindCountries(result)
    //         },
    //         failure: (err) => {
    //             console.log(err)
    //         }
    //     })
    //     console.log('ok')
    // }
    function bindCountries(data){
        data.forEach((x,i)=>{
            // console.log(x.name)
            console.log(x.alpha2Code)
            let option = $('<option/>').val(x.alpha2Code).text(x.region)
            $('#ddlCountry').append(option)
        })
    }
    fetchCountries();
});