var app=angular.module("myContactApp",[]);
app.controller('myContactController',['$scope','$http','contactFactory',function($scope,$http,contactFactory){
getContact();
function getContact(){
	contactFactory.getContact()
	.then(function(response){
		console.log(response.data)
		$scope.contactList=response.data
	})
}

$scope.createContact=function(){
	contactFactory.createContact($scope.contact)
.then(function(response){
	console.log("from post"+response.data)
	getContacts();
	$scope.contact={};
})
}
$scope.updateContact=function(){
	contactFactory.updateContact($scope.contact._id,$scope.contact)
	.then(function(response){
		console.log(response.data)
	})
}
$scope.editContact=function(id){
	contactFactory.editContact(id)
	.then(function(response){
		console.log(response.data)
		$scope.contact=response.data
		getcontacts();
	})
	$scope.deleteContact=function(id){
		contactFactory.deleteContact(id)
		.then(function(response){
			console.log(response.data)
			$scope.contact=response.data
			getContacts()
		})
	}
}
}])
































/*app.controller("myContactController",["$scope","$http",function($scope,$http){
refresh()
$scope.createContact=function(){
	$http.post("/createContact",$scope.contact)
	.then(function(response){
		$scope.contact={};
		refresh()
	})
}
function refresh(){
	$http.get("/getContacts")
	.then(function(response){
		console.log(response)
		$scope.contactList=response.data

	})
}
$scope.editContact=function(id){
	$http.get("/getContactById/"+id)
	.then(function(response){
		$scope.contact=response.data
	})
}
$scope.updateContact=function(){
$http.put("/updatecontact/"+$scope.contact._id,$scope.contact)
.then(function(response){
	refresh()
})
}
$scope.deleteContact=function(id){
$http.delete("/deletecontact/"+id)
.then(function(response){
	refresh()
})
}
}])*/