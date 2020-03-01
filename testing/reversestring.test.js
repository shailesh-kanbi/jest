const reverseString = require('./reversestring');

//function exists
test('Reverse string function exists', function(){
    expect(reverseString).toBeDefined();
});

test('If String reverses',function(){
    expect(reverseString('hello')).toEqual('olleh');
});