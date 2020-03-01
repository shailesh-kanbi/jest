const functions = require('./function');   
//toBe
test('Add 4+4 should be equal to 8',() =>{
    expect(functions.add(4,4)).toBe(8);
        
});
//not.toBe
test('Add 4+4 should not be equal to 9',() =>{
    expect(functions.add(4,4)).not.toBe(9);
        
});
//toBeNull
test('should be null',() =>{
    expect(functions.isNull()).toBeNull();
        
});
//toBeFalsy
test('should be falsy',() =>{
    expect(functions.checkValue(undefined)).toBeFalsy();
        
});
//toBe works fine for string
test('user name should be Sam Johnson', function(){
    expect(functions.createUser()).toBe('Sam Johnson');
});
// toEqual for Object comparison
test('user name as object should be Sam Johnson', function(){
    expect(functions.createUserObject()).toEqual({
        "firstName": "Sam", 
        "lastname": "Johnson"});
});
//less than or greater than
test('should be under 1600', function(){
    const num1 = 79;
    const num2 = 20;
    expect(num1+num2).toBeLessThan(100);
});
//Regex
test('There is no s in Mary',function(){
    expect('Mary').not.toMatch(/s/);
});
//Arrays
test('Jennifer should be in house name',function(){
    housename = ['Jennifer','Mary','Sam'];
    expect(housename).toContain('Jennifer');
});

//working with async data
//test('user name should be Leanne Graham',function(){
//expect.assertions(1);
//return functions.fetchUser()
//.then(data=>{
 //   expect(data.name).toEqual('Leanne Graham');
//});
//});
