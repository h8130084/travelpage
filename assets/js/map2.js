//global variables//
var allMarkers = [];


function initMap() {
 var map = new google.maps.Map(document.getElementById('map'), {
  center: { lat: -33.8688, lng: 151.2195 },
  zoom: 13,
  mapTypeId: 'roadmap'
 });



 // Create the search box and link it to the UI element.
 var input = document.getElementById('pac-input');
 var searchBox = new google.maps.places.SearchBox(input);

 // Bias the SearchBox results towards current map's viewport.
 map.addListener('bounds_changed', function() {
  searchBox.setBounds(map.getBounds());
 });

 var markers = [];
 // Listen for the event fired when the user selects a prediction and retrieve
 // more details for that place.
 searchBox.addListener('places_changed', function() {
  var places = searchBox.getPlaces();

var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var labelIndex = 0;
      
  if (places.length == 0) {
   return;
  }

  // Clear out the old markers.
  markers.forEach(function(marker) {
   marker.setMap(null);
  });
  markers = [];

  // For each place, get the icon, name and location.
  var bounds = new google.maps.LatLngBounds();
  places.forEach(function(place) {
   if (!place.geometry) {
    console.log("Returned place contains no geometry");
    return;
   }
   var icon = {
    url: place.icon,
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25)
   };

   // Create a marker for each place.
   markers.push(new google.maps.Marker({
    map: map,
    icon: icon,
    title: place.name,
    position: place.geometry.location
   }));

   if (place.geometry.viewport) {
    // Only geocodes have viewport.
    bounds.union(place.geometry.viewport);
   }
   else {
    bounds.extend(place.geometry.location);
   }
  });
  map.fitBounds(bounds);

  var request = {
   location: bounds.getCenter(),
   radius: '500',
   type: ['restaurant']
  };


  
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  //does the server work - e.g. no errors, if ok proceed with create marker function//
  function callback(results, status) {
   clearMarkers();
   if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
     var place = results[i];
     createMarker(results[i]);
    }
    map.setZoom(14)
   }
  }
  console.log("test");

  function createMarker(place) {
   var marker = new google.maps.Marker({
    map: map,
    label: labels[labelIndex++ % labels.length],
    position: place.geometry.location
   });

allMarkers.push(marker)
   // adds info window on click//
   infoWindow = new google.maps.InfoWindow;

   google.maps.event.addListener(marker, 'click', function() {
    infoWindow.setContent(place.name);
    infoWindow.open(map, this);
    console.log("test3");
   });
  }
  
   function clearMarkers() {
  for (var i = 0; i < allMarkers.length; i++) {
   if (allMarkers[i] != null) {
    allMarkers[i].setMap(null);
   }
  }
  allMarkers = [];
 }

 });

}

/*
//global vairables//
var map;
var service;
var infoWindow;
var markers = [];

//function to load initial map at Leeds center//
function initMap() {
  var Leeds = new google.maps.LatLng(53.8008, -1.5491);

  map = new google.maps.Map(document.getElementById('map'), {
    center: Leeds,
    zoom: 15
  });

var input = document.getElementById('pac-input');
  //trying to include a search box - adds the search box 
  //but brings an error stating search box not defined - 
  /*search box work but does not link to map//
    
   searchBox = new google.maps.places.SearchBox(input); 


      //loads up all restaurants within  x meter radius of leeds/ location from line 10//
      var request = {
        location: Leeds,
        radius: '300',
        type: ['restaurant']
      };

      //callback//
      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
    }


    // function to check there are no errors such as a server error, if ok run create marker function//
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker(results[i]);
        }
      }
    }

    //function to create markers//
    function createMarker(place) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      // adds info window on click//
      infoWindow = new google.maps.InfoWindow;

      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(place.name);
        infoWindow.open(map, this);
      });
    }
  

  // addthe rest of the code in trying to include a search bar//
  /*
 searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      }
      else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });













/*  you tube code below
var map;

function initMap() {
  var center = new google.maps.LatLng(53.8008, -1.5491);
  map = new google.maps.Map(document.getElementById("map"), {
    center: leeds,
    Zoom: 12
  });

  var request = {
    location: Leeds,
    radius: 8000,
    type: ['cafe']
  };

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);


  function callback(results, status) {
    if (status = google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.gemoetry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.gemoetry.location
    });

  }
}


// youtube code above//



  function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 16,
      mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);


    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());

    });


    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();
        console.log(places);
        if (places.length == 0) {
          return;
        }


        // Clear out the old markers.
        markers.forEach(function(marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }

          var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };



          service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, callback);
        });
      }
    



  /*
    // Create a marker for each place.
    markers.push(new google.maps.Marker({
      map: map,
      icon: icon,
      title: place.name,
      position: place.geometry.location
    }));

    if (place.geometry.viewport) {
      // Only geocodes have viewport.
      bounds.union(place.geometry.viewport);
    }
    else {
      bounds.extend(place.geometry.location);
    }
  });
  map.fitBounds(bounds);

  var request = {
    location: bounds.getCenter(),
    radius: '500',
    type: ['lodging']
  };

      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            console.log(place);
            createMarker(results[i]);
          }
        }
      }

      function createMarker(result) {
        var markers = places.map(function(place, i) {
          return new google.maps.Marker({
            position: result['geometry']['location']
             
          });
          console.log("test");
        });
      }
  */
