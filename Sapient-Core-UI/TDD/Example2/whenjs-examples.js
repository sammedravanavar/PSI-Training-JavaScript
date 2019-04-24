function createClient() {
    return {
        
        // Classic async method which returns an un-resolved promise.
        fetchAsync: function () {
            var dfd = when.defer();
            
            // This contrived example isn't the important bit, replace this
            // with a jQuery.get call, or any other async action which yeilds
            // a promise to the caller.
            setTimeout(function () { 
                dfd.resolve("Response");
            }, 1500);
            
            return dfd.promise;
        },
        
        // Slightly different take, this time a Promise resolver is supplied
        // to the method.
        asyncInit: function (completionPromise) {
            
            // Again, the implementation isn't important - but after an async
            // delay this method will either resolve, or reject the supplied
            // connection promise.
            setTimeout(function () { 
                completionPromise.resolve("I'm done!");
            }, 1500);
            
            // Note the lack of return statement.
        }
    }
};


// QUnit's way of defining a TestSuite.  The 'setup' method below will be
// invoked before each 'test' case.
module("when.js examples", {
    
    // Setup is invoked before each test run.
    setup: function () {
        
        // Create a fresh test client instance to work with.
        this.client = createClient();
    }
});

test("Stub a promise to always return a resolved Promise", function () { 
    
    // Stub the promise so it returns a fully resolved promise.
    var expectedResponse = "what we expect to get back... eventaully";
    sinon.stub(this.client, 'fetchAsync').returns(when(expectedResponse));
    
    // Call the method and run the assertion
    this.client.fetchAsync().then(function (actualResponse) { 
        strictEqual(actualResponse, expectedResponse, "fetchAsync() returned a"
            + " resolved Promise with the expected response");
    });
});

test("Stub a promise to always return a rejected Promise", function () { 
    
    // This time we make 'fetchAsync' return a rejected promise
    var expectedError = new Error("KaBOOM!");
    sinon.stub(this.client, 'fetchAsync').returns(when.reject(expectedError));
    
    // Call the method and expect it to fail.
    this.client.fetchAsync().otherwise(function (actualError) { 
        strictEqual(actualError, expectedError, "fetchAsync() returned a" 
            + " rejected Promise with the expected error");
    });
});

test("Stub a promise so the testcase has control over it", function () { 
    
    // Sometimes you want the testcase to hold onto the Promise so you can 
    // assert the state of other parts of the system while the Promise is
    // still un-resolved.  Start by creating a new Promise.
    var fetchPromise = when.defer();
    
    // Now stub fetchAsync so it returns this Promise.
    sinon.stub(this.client, 'fetchAsync').returns(fetchPromise);
    
    // Some example state, just to show we have control over the Promise.
    var didWeResolveThePromiseYet = false;
    
    // Call the method, but it won't have resolved yet...
    this.client.fetchAsync().then(function () { 
        equal(didWeResolveThePromiseYet, true, "Test case dictated when the"
            + " Promise resolved");
    });
    
    // Ok, now let's flip that flag.
    didWeResolveThePromiseYet = true;
    
    // ... and resolve the promise.
    fetchPromise.resolve("Go for it!");
});

test("Stub a method so it resolves the supplied promise", function () { 
    
    // Stub the asyncInit method so it calls the 'resolve' method of the 
    // supplied promise.
    var expectedResult = "we get this back once asyncInit's done it's thing";
    sinon.stub(this.client, 'asyncInit').yieldsTo("resolve", expectedResult);
    
    // This is the promise we supply to asyncInit().
    var initDeffered = when.defer();

    // Attach our assertion to the completion handler.
    initDeffered.promise.then(function (actualResult) {
        strictEqual(actualResult, expectedResult, "asyncInit() resolves the"
            + " supplied Promise with the expected result");
    });

    // Invoke the client supplying the resolver
    this.client.asyncInit(initDeffered.resolver);
});

test("Stub a method is it rejects the supplied promise", function () { 
    
    // This time asyncInit will always reject the supplied Promise.
    var expectedError = new Error("Ain't gonna happen");
    sinon.stub(this.client, 'asyncInit').yieldsTo("reject", expectedError);
    
    // This is the deffered we supply to asyncInit().
    var initDeffered = when.defer();
    
    // Attach our assertion to the error handler.
    initDeffered.promise.otherwise(function (actualError) { 
        strictEqual(actualError, expectedError, "asyncInit() rejects the"
            + " supplied Promise with the expected error");
    });
    
    // Invoke the client supplying the resolver.
    this.client.asyncInit(initDeffered.resolver);            
});
