myApp.controller('mainCtrl', function($scope, $http, $sce, $interval, $rootScope, $timeout) {

	$scope.$watch('online', function(newStatus) { 
    	if($rootScope.online == false){
    		$scope.elOnline = "wifi OFF";
    	}
    	else{
            $scope.elOnline = "wifi ON";
    	}
    });

	this.setDates = function(){
		$scope.newsArray = [];
		this.inicio = limitar(this.dateRange.startDate);
		this.fin =  limitar(this.dateRange.endDate);
	}

	$scope.newsArray = [];
	this.dateRange = {
			startDate: "",
			endDate: ""
	};

	this.Offices = ["all", "us", "uk"];
	//ESTOY EN TG_Fe
	this.inicio = "";
	this.fin = "";
	this.office = "all";
});

myApp.controller('newsApi', function($scope, $http, $timeout){
	this.flags  = {
		loading:0,
		status:"nada"
	};
	this.getNews = function(arrayObjects, office, startDate, endDate){
		flags = this.flags;
		flags.loading = 1;
		console.log(office);
		console.log(startDate);
		console.log(endDate);
		$http.get(URL.host + 'getArticles/'+office+'/'+startDate+'/'+endDate+'/')
		.then(function successCallback(response) {
			if(response.data.news.length > 0){
				for (var i = 0; i < response.data.news.length; i++) {
						arrayObjects.push(response.data.news[i]);
					}
					flags.loading = 0;
					flags.status = "ok";
				}
			}
		, function errorCallback(response) {
			flags.loading = 0;
			flags.status = "error";
		});
	}
});

myApp.controller("BarCtrl", function ($scope) {

	this.options = { 
			legend: { display: true },
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			},
			pan: {
				enabled: true,
				mode: 'x'
			},
			zoom: {
				enabled: true,
				mode: 'x',
			}
	};

	this.secciones = [];
	this.counter = []
	finalArray = [];

	this.graficar = function(){
		if($scope.newsArray.length > 0){
			if(!angular.equals(finalArray, $scope.newsArray)){
				var copyArray = $scope.newsArray.slice(0);
				for (var ctr_NA = 0; ctr_NA < $scope.newsArray.length; ctr_NA++){
					var countElem = 0;
					for (var ctr_cmp = 0; ctr_cmp < copyArray.length; ctr_cmp++){
						if(copyArray[ctr_cmp] != undefined){
							if($scope.newsArray[ctr_NA].sectionName == copyArray[ctr_cmp].sectionName){
								countElem++;
								delete copyArray[ctr_cmp];
							}
						}
					}
					
					if (countElem > 0){
						var a = new Object();
						a.value = $scope.newsArray[ctr_NA].sectionName;
						a.count = countElem;
						finalArray.push(a);

						this.secciones.push($scope.newsArray[ctr_NA].sectionName);
						this.counter.push(countElem);
					}
				}
				delete $scope.newsArray;
				angular.copy(finalArray, $scope.newsArray);
			}
			return true;
		}
		else
			return false;
	}
});