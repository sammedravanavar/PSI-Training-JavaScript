(function(){
    'use strict';

    // <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
    // <div class="card-header">Header</div>
    // <div class="card-body">
    //   <h4 class="card-title">Info card title</h4>
    //   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    // </div>
    // </div>

    let products = [];

    $('#loader').hide();
    $('#search').bind('click',function(){
        let value= $('#item').val()
        $('#item').val(function(index, value){
            $('#loader').show();
            $.ajax({
                type: "POST",
                url: "api/search",
                data: {data:value},
                error: function(err){
                    $('#loader').hide();
                },
                success: function(result){
                    // console.log(result.data.response.items.length)
                    // for(var i=0;i<result.data.response.items.length;i++){
                    //     var items = result.data.response.items;
                    //     console.log(items[i].name)
                    //     var card = $('<div>').attr({
                    //         id: "card"+i,
                    //         class: "card text-white bg-info mb-3",
                    //         style: "max-width: 20rem;"
                    //     })
                    //     // card += $('</div>')
                    //     var cardHeader = $('<div>').attr({
                    //         class: "card-header"
                    //     })
                        
                    //     $(card).appendTo(".card-group")
                    //     $(cardHeader).appendTo('.card'+i)
                    //     // $(".card-group").prepend(card)
                    //     // $(".card").prepend(cardHeader)
                    //     $('#card'+i).html(items[i].name)
                    // }
                    $('#loader').hide();
                    console.log(result);
                    products = result.items;
                    $('.card-group').empty();
                    products.forEach((item,index) => {
                        let words = item.shortDescription.split(' ').slice(0,4).toString();
                        // var des = '';
                        // let i=0;
                        // function showMore(){
                        //     for( ;i<words.length && i<20 ;i++){
                        //         des += words[i]+' ';
                        //     }
                        // }
                        // showMore();
                        // console.log(words)
                        let card = `<div class="col-md-4">
                                    <div class="card mb-3">
                                        <h4 class="card-header"></h4>
                                        <div class="card-body">
                                            <h5 class="card-title"></h5>
                                        </div>
                                        <img style="height: 200px; width: 100%; display: block;" src="${item.largeImage}"
                                            alt="Card image">
                                        <div class="card-body">
                                            <p class="card-text">${words}</p>
                                        </div>
                                        <div class="card-body">
                                            <a href="#" id="more${index}" class="card-link onClick="showMore()">More${index}</a>
                                        </div>
                                    </div>
                                    </div>`
                        $('.card-group').append(card)
                        $('.card-link').click(function(event){
                            event.preventDefault();
                            showMore();
                            console.log(des)
                        })
                    })
                },
                // dataType: dataType
            });
        })
        // $.post('/api/search',{item:item})
        // .then(res=>{
        //     console.log(res);
        // }).catch(err=>{
        //     console.log(err);
        // })
    })
})()