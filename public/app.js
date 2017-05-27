var app=angular.module("myContactApp",[]);

app.controller("myContactController",["$scope","$http",function($scope,$http){
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
}])