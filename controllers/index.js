'use strict';


var IndexModel = require('../models/index');
var fs = require('fs');

module.exports = function (router) {

    router.get('/', function (req, res) {

    	var model = new IndexModel('First Name','Last Name', 'Email', 'Password', 'Address', 'Phone');
        
        res.render('index', model);
        
        
    });

    router.post('/registration', function (req, res) {

        console.log("Request: "+req.body.first_name);
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var email_text = req.body.email_text;
        var password_text = req.body.password_text;
        var address_text = req.body.address_text;
        var phonenumber_text = req.body.phonenumber_text;

        var xml = '<?xml version="1.0" encoding="UTF-8"?>\n\t<data>\n';
        for (var data in req.body) {
            if (!(data == '_csrf')){ 
                xml += "\t\t<"+data+">"+req.body[data]+"</"+data+">\n";
            }    
        }
        xml += '\t</data>'

        
        fs.writeFile("/tmp/data.xml", xml, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log(" The file was saved!");
            }
        }); 

        //var model = new IndexModel(first_name, last_name, email_text, password_text, address_text, phonenumber_text);
        
        res.render('success', {layout:false});
    }); 

};
