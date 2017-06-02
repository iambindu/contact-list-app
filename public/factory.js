app.factory("contactFactory",['$http',function($http){
	var factory={};
	factory.getContact=function(){
		return $http.get('/getContacts');
		console.log(response)
	}
	factory.createContact=function(id,contact){
		return $http.post('/createContact');
		console.log(response)
	}
	factory.updateContact=function(id){
		return $http.put('/updateContact');
		console.log(response)
	}
	factory.deleteContact=function(id){
		return $http.delete('/removeContact'+id);
		console.log(response)
	}
	return factory;
}]);