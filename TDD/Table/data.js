// var elements = [{ author: "Dan Brown", book: "The Da Vinci Code", date: "2003-03-01"},
//                     { author: "J R R Tolkien", book: "The Lord of The Rings", date: "1954-07-25"}]

(function(){
    var books = [{ author: "Dan Brown", book: "The Da Vinci Code", date: "2003-03-01"},
                { author: "J R R Tolkien", book: "The Lord of The Rings", date: "1954-07-25"}]
    function addBook(book) {
        if (verifyDuplicateId(book.id)) {
            books.push(book);
            return getBooks();
        } else {
            return 'Duplicate id';
        }
    }

    function verifyDuplicateId(id) {
        return getBooks().findIndex(x => x.id == id);
    }
    function getBooks(){
        return books;
    }
    window.collection = {
        add: addBook,
        getBooks: getBooks
    }
})()