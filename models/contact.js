var mongoose=require("mongoose");
var contactSchema=mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	mobile:{
		type:String,
		required:true
	}
});
var Contact=module.exports=mongoose.model("contact",contactSchema,"contact")
// create contact
module.exports.createContact=function(contactObj,callback){
	return Contact.create(contactObj,callback)
}
// get all contacts
module.exports.getContact=function(callback){
	return Contact.find(callback)
}
// get specific contact
module.exports.getContactById=function(contactId,callback){
	return Contact.findById(contactId,callback)
}
// update contact
module.exports.updateContact=function(contactId,contactObj,callback){
	return Contact.update({_id:contactId},
		{$set:{
			name:contactObj.name,
			email:contactObj.email,
			mobile:contactObj.mobile
		}},callback)
}
// delete contact
module.exports.deleteContact=function(contactId,callback){
	return Contact.remove({_id:contactId},callback)
}