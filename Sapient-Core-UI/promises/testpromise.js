    test('should test the user is existing',function(assert){
        userList=['abc123','xyz'];
        assert.expect(1);
        let checkUser = isAuthorizedPromise('abc123');
        return checkUser.then((result)=>{
            assert.equal(result,true);
        })
    })
