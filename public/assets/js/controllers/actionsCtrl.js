function sendRequest($http) {
  return $http.get('app/models/MockupData.json')
  .success(function(data) {
      return data;
  })
  .error(function(error) {
      return error;
  });
}
app.controller('bannersCtrl', function($scope, $http) {
  sendRequest($http).success(function(data) {
    $scope.banners = data.bannersMockupData;
  });
});
app.controller('offersCtrl', function($scope, $http) {
  sendRequest($http).success(function(data) {
    $scope.offers = data.offersMockupData;
  });
});
app.controller('servicesCtrl', function($scope, $http) {
  sendRequest($http).success(function(data) {
    $scope.services = data.servicesMockupData;
  });
});
app.controller('sectionsCtrl', function($scope, $http) {
  sendRequest($http).success(function(data) {
    $scope.sections = data.sectionsMockupData;
  });
});
app.controller('teamCtrl', function($scope, $http) {
  sendRequest($http).success(function(data) {
    $scope.team = data.teamMockupData;
  });
});
app.controller('mediaCtrl', function($scope, $http) {
  sendRequest($http).success(function(data) {
    $scope.media = data.mediaMockupData;
    $scope.latestNews = data.latestNewsMockupData;
  });
});
app.controller('newsCtrl', function($scope, $http) {
  sendRequest($http).success(function(data) {
    $scope.news = data.newsMockupData;
  });
});
app.controller('contactCtrl', function($scope, $http) {
  sendRequest($http).success(function(data) {
    $scope.contacts = data.contactMockupData;
    $scope.askDoctor = function()
    {
      params = {
        email: $scope.form.email,
        name: $scope.form.name,
        number: $scope.form.number,
        comment: $scope.form.comment
      };
      $scope.form.name = '';
      $scope.form.email = '';
      $scope.form.number = '';
      $scope.form.comment = '';
      console.log(params);
      // return $http.post('app/controllers/??',params)
      // .success(function(data) {
      //   if(data)
      //   {
      //   //Do some stuff
      //   }
      // })
    }
    // function initMap() {
      // var contacts = $scope.contacts
      // for (var i = 0; i < contacts.length; i++) {
      //   var address = {lat: contacts[i].lat, lng: contacts[i].lng};
      //   var map = new google.maps.Map(document.getElementById(contacts[i].index), {
      //     zoom: 17,
      //     center: address
      //   });
      //   var marker = new google.maps.Marker({
      //     position: address,
      //     map: map,
      //     title: contacts[i].title
      //   });
      // }
    // }

  });
});
app.controller('subscribeCtrl', function($scope, $http) {
  $scope.subscribe = function()
  {
    params = {
      email: $scope.form.email
    };
    $scope.form.email = '';
    console.log(params);
    // return $http.post('app/controllers/??',params)
    // .success(function(data) {
    //   if(data)
    //   {
    //   // Do some stuff
    //   }
    // })
  }
});
