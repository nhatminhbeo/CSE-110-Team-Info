var app = angular.module('sociallyDynamic', []);

// Entries


app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.posts=[{text: "Get Sublime", id: "sublime", checked: false},
  				{text: "[Windows] Get Git Bash", id: "gitbash", checked: false},
  				{text: "Get Nodejs", id: "nodejs", checked: false},
  				{text: "Get Mongodb", id: "mongodb", checked: false},
  				{text: "Version Check", id: "check", checked: false},
  				{text: "Clone Git Repository", id: "clonegit", checked: false},
  				];
  				
  	var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
    $checkboxes = $("#checkbox-container :checkbox");

	$checkboxes.on("change", function(){
	  $checkboxes.each(function(){
	    checkboxValues[this.id] = this.checked;
	  });
	  
	  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
	});

	// On page load
	$.each(checkboxValues, function(key, value) {
	  $("#" + key).prop('checked', value);
	});

	console.log($checkboxes);
}]);

