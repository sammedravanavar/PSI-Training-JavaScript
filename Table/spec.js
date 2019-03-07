describe('Verify Books', function(){
    it('Check if collection exists',function(){
        expect(collection).toBeDefined();
    })
    it('Check if there is getBooks function',function(){
        expect(collection.getBooks).toBeDefined();
    })
    it('Check if there is addBook function',function(){
        expect(collection.add).toBeDefined();
    })
    it('GetBooks should return an Array',function(){
        expect(collection.getBooks().length).toBeGreaterThan(-1)
    })
})
describe('Add Book Feature',function(){
    it('It should add a book to the array',function(){
        let b = {id:1,author:'jjjj'};
        expect(collection.add(b).length).toBeGreaterThan(0);
    });
    it('should verfiy the duplicate ID doesnot exist',function(){
        let b = {id:1,author:'jjjj'};
        expect(collection.add(b)).toBe('Duplicate id');
    });
})