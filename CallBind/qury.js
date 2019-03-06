(function(){
    'use strict';
    //get the element by id selector.
    let bookList =[];
    function addBook(){
        let book = {
            name:$('#txtName').val(),
            author:$('#txtAuthor').val(),
            date:$('#txtData').val(),
        }
        bookList.push(book);
    }
    function deleteBook(){

    }
    function editBook(){

    }
    $('#btnAddBook').bind('click',addBook);
})();