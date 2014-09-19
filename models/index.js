'use strict';

var lname;
var address;
var phonenumber;
var url;

module.exports = function IndexModel(fname, lname, email, password, address, phn) {

	//var password = " hii".match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/) 
	//console.log("Password match:"+password);	

	//var email ="Email"		
    return {
        fname: fname, lname: lname, email: email, password: password, address:address, phonenumber:phn
    };
};
