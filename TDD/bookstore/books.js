(function(){
    var books =[{id:1, author:"Kiran"}];
    function addBook(){
        //your logic goes here
    }
    function getBooks(){
        //get the complete list of books.
        return books;
    }
  window.bookStore= {
      addBook:addBook,
      getBooks:getBooks
  }
})();