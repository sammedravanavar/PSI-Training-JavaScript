describe('I want to test', function(){

    it('Should have an add function',function(){
        expect(add(1,2)).toBe(3);
    })
    it('Should throw an error',function(){
        expect(add(1,true)).toBe("pass only numbers");
    })
    it('Should throw an error',function(){
        expect(add(true,true)).toBe("pass only numbers");
    })
})
