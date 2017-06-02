var express=require("express");
var app=express();
var router=express.Router();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var path=require("path");
var Contact=require("./models/contact");
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost/contact-list-app",function(){
	console.log("Connected succesfully to database")
})
router.get("/",function(request,response){
	response.json("this is mean stack app")
})
/*router.get("/getContacts",function(request,response){
Contact.getContact(function(err,contactObj){
	if(err){
		throw err;
	}
	response.json(contactObj)
})
})
router.get("/getContactById/:id",function(request,response){
	var contactid=request.params.id;
Contact.getContactById(contactid,function(err,contactObj){
	if(err){
		throw err;
	}
	response.json(contactObj);
})
})
router.post("/createContact",function(request,response){
	var contactObj=request.body;
	Contact.createContact(contactObj,function(err,contactObj){
		if(err){
			throw err;
		}
		response.json(contactObj)
	})
})


router.put("/updateContact/:id",function(request,response){
var contactId=request.params.id;
var contactObj=request.body;
Contact.updateContact(contactId,contactObj,function(err,contactObj){
	if(err){
		throw err;
	}
	response.json(contactObj)
})
})
router.delete("/deleteContact/:id",function(request,response){
var contactId=request.params.id;
Contact.deleteContact(contactId,function(err,contactObj){
if(err){
	throw err;
}
response.json(contactObj)
})
})
*/
app.use("/",router)
var PORT=process.env.PORT||1337;
app.listen(PORT,function(){
	console.log("Server is listening at PORT:"+PORT)
})