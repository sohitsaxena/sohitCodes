/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
create : function(req, res){
		var userData = req.body;
		User.save(userData, function(err, resUser){
			if(!err){
				res.json(resUser);
			}
      else{
				res.json(err);
			}
       

		});
},


getUser : function(req, res){
       console.log('--------->GET body',req.params.all());
    	 var email = req.param('email');
          
       User.get(email, function(err, user){
            if(!err){
            res.json(user);
          }
          else{
            res.json(err);
          }
       });
    	
},

putUser : function(req, res){
        console.log('PUT BODY-------->');
        var idone = req.param('id');
        console.log(idone)
        var data = req.body;
        console.log(data);
           User.put(idone, data, function(err, user){
            if(!err){
              console.log(user);
            res.json(user);
                   }
          else{
            res.json(err);
              }
          });  
},


deleteUser: function(req, res, next){
    var email = req.param('email');
        var data = req.body;
       User.des(email, data, function(err, user)
       {
           if(!err){
                res.json(user);
              }

              else {
                res.json (err);
              }
              });

           },

};


