/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  },

  save : function(data, cb){
  	User.create(data).exec(function(err, user){
  		if(!err){
  			return cb(null, user);
  		}else{
  			return cb(err)
  		}
  	});
  },


  get : function(email, cb)
  {
    User.find({email : email }).exec(function(err, user){
      if(!err){
        return cb(null, user);
      }else{
        return cb(err)
      }
    });
  },  


   put: function(idone,data,cb){
    console.log("MODEL-->");
    User.update({id: idone},data).exec(function(err, user){
      if(!err) {
        return cb(null, user);
      } else {
        return cb(err);
      }
    });
   },

  des : function(email, data, cb)
  {
       User.destroy(data, {email : email}).exec(function(err, user)
       {
            if(!err)
            {
               return cb(null, user);
            }
            else {
              return cb(err)
            }
       });
  },
};

