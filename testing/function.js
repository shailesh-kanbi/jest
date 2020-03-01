//const axios = require('axios');

const functions = {
    add: function(num1, num2) {
        return num1+num2;        
    },
    sub: (num1,num2) => num1-num2,
    isNull : () => null,
    checkValue : x=>x,
    createUser : function (){
        const user = {firstName : 'Shailesh'};
        user['lastname'] = 'Kanbi'; 
        return user.firstName +" "+ user.lastname;
    },
    createUserObject : function (){
        const user = {firstName : 'Shailesh'};
        user['lastname'] = 'Kanbi'; 
        return user;
    },
    // fetchUser : function(){
    //     axios.get('https://jsonplaceholder.typicode.com/users/1').
    //     then( res =>res.data).
    //     catch(err=>'error')
    // }

};
module.exports = functions;