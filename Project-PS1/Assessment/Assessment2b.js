(function(){
    'use strict';
    let bookList = [];
    function addBook(){
        let book = { 
            author: $('author').val(),
            name: $('book').val(),
            date: $('date').val()
        }
        bookList.push(book);
    }
    function deleteBook(){

    }
    $('#add').bind('click',addBook);
});