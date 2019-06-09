//sort html//
//make check box look better and//
//make it so you can only choose one. can you pre populate it?//
//sort css and table//
// sort nav bar//

//global variables//
var allMarkers = [];
var infoWindow;
var addResult;
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

var map;

function initMap() {
    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

$('input[type="checkbox"]').on('change', function() {
   $('input[type="checkbox"]').not(this).prop('checked', false);
});
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();
        var new_location = new google.maps.LatLng(places[0].geometry.location.lat(), places[0].geometry.location.lng());
        map.setCenter(new_location);

        var accomodationCheckBox = document.getElementById('accomodation-box').checked;
        console.log(accomodationCheckBox);

        if (accomodationCheckBox == true) {
            var searchType = "lodging";
        }
        
          var request = {
            location: new_location,
            radius: '500',
            type: [searchType]
        };

        var barCheckBox = document.getElementById('bar-box').checked;
        console.log(barCheckBox);

        if (barCheckBox == true) {
            var searchType = "restaurant";
            var searchType = "bar";
        }

  var request = {
            location: new_location,
            radius: '500',
            type: [searchType]
        };
        
        var museumCheckBox = document.getElementById('attraction-box').checked;
        console.log(museumCheckBox);

        if (museumCheckBox == true) {
            var searchType = "museum";
        }

        var request = {
            location: new_location,
            radius: '500',
            type: [searchType]
        };


        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
    });

    // Clear out the old markers.
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];
}



function callback(results, status) {
    clearMarkers();
    if (status == google.maps.places.PlacesServiceStatus.OK) {

        var htmlString = '';

        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            console.log(place);

            createMarker(results[i]);
            htmlString += `<tr>
                <td>${place.name}<td>
                <td>Column 2<td>
                <td>Column 3<td>
                <td>Column 4<td>
            </tr>`

        }

        console.log(htmlString);
        $('#results').html(htmlString);
    }


}

function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        label: labels[labelIndex++ % labels.length],
        position: place.geometry.location
    });

    allMarkers.push(marker);
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






// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -33.8688, lng: 151.2195 },
//         zoom: 13,
//         mapTypeId: 'roadmap'
//     });


//     // Create the search box and link it to the UI element.
//     var input = document.getElementById('pac-input');
//     var searchBox = new google.maps.places.SearchBox(input);

//     // Bias the SearchBox results towards current map's viewport.
//     map.addListener('bounds_changed', function() {
//         searchBox.setBounds(map.getBounds());
//     });



//     var markers = [];
//     // Listen for the event fired when the user selects a prediction and retrieve
//     // more details for that place.
//     searchBox.addListener('places_changed', function() {
//     var places = searchBox.getPlaces();

//     var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var labelIndex = 0;

//     if (places.length == 0) {
//         return;
//     }

//     // Clear out the old markers.
//     markers.forEach(function(marker) {
//         marker.setMap(null);
//     });

//     markers = [];

//     // For each place, get the icon, name and location.
//     var bounds = new google.maps.LatLngBounds();
//     places.forEach(function(place) {
//         if (!place.geometry) {
//             console.log("Returned place contains no geometry");
//             return;
//         }
//         var icon = {
//             url: place.icon,
//             size: new google.maps.Size(71, 71),
//             origin: new google.maps.Point(0, 0),
//             anchor: new google.maps.Point(17, 34),
//             scaledSize: new google.maps.Size(25, 25)
//         };

//         // Create a marker for each place.
//         markers.push(new google.maps.Marker({
//             map: map,
//             icon: icon,
//             title: place.name,
//             position: place.geometry.location
//         }));

//         if (place.geometry.viewport) {
//             // Only geocodes have viewport.
//             bounds.union(place.geometry.viewport);
//         }
//         else {
//             bounds.extend(place.geometry.location);
//         }
//     });
//     map.fitBounds(bounds);

//     var request = {
//         location: bounds.getCenter(),
//         radius: '500',
//         type: ['restaurant']
//     };



//     service = new google.maps.places.PlacesService(map);
//     service.nearbySearch(request, callback);

//     //does the server work - e.g. no errors, if ok proceed with create marker function//
//     function callback(results, status) {
//         clearMarkers();
//         if (status == google.maps.places.PlacesServiceStatus.OK) {
//             for (var i = 0; i < results.length; i++) {
//                  var place = results[i];
//                  createMarker(results[i]);
//             }
//             map.setZoom(14);
//         }
//     }
//     console.log("test");

//     function createMarker(place) {
//         var marker = new google.maps.Marker({
//         map: map,
//         label: labels[labelIndex++ % labels.length],
//         position: place.geometry.location
//     });

//     allMarkers.push(marker);

//     // adds info window on click//
//     infoWindow = new google.maps.InfoWindow({
//     content: document.getElementById('info-content')
//     });


//     //trying to get the information to load  in a table //
//     google.maps.event.addListener(markers, 'click', function() {
//      markers[i].placeResult = results[i];
//      google.maps.event.addListener(markers[i], 'click', showInfoWindow);
//      addResult(results[i], i);
//     }

//     );
//     }
//     console.log("test3");
//  });
// }

// function clearMarkers() {
//  for (var i = 0; i < allMarkers.length; i++) {
//   if (allMarkers[i] != null) {
//   allMarkers[i].setMap(null);
//   }
//  }
//  allMarkers = [];

//  function addResult(result, i) {
//   var results = document.getElementById('results');
//   var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
//   var markerIcon = MARKER_PATH + markerLetter + '.png';

//   var tr = document.createElement('tr');
//   tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
//   tr.onclick = function() {
//   google.maps.event.trigger(markers[i], 'click');
//   };

//   var iconTd = document.createElement('td');
//   var nameTd = document.createElement('td');
//   var icon = document.createElement('img');
//   icon.src = markerIcon;
//   icon.setAttribute('class', 'placeIcon');
//   icon.setAttribute('className', 'placeIcon');
//   var name = document.createTextNode(result.name);
//   iconTd.appendChild(icon);
//   nameTd.appendChild(name);
//   tr.appendChild(iconTd);
//   tr.appendChild(nameTd);
//   results.appendChild(tr);
//  }

//  function clearResults() {
//   var results = document.getElementById('results');
//   while (results.childNodes[0]) {
//   results.removeChild(results.childNodes[0]);
//   }

//  }
//  // Get the place details for a hotel. Show the information in an info window,
//  // anchored on the marker for the hotel that the user selected.
//  function showInfoWindow() {
//   var marker = this;
//   places.getDetails({ placeId: marker.placeResult.place_id },
//   function(place, status) {
//     if (status !== google.maps.places.PlacesServiceStatus.OK) {
//      return;
//     }
//     infoWindow.open(map, marker);
//     buildIWContent(place);
//   });
//  }

//  // Load the place information into the HTML elements used by the info window.
//  function buildIWContent(place) {
//   document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
//   'src="' + place.icon + '"/>';
//   document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
//   '">' + place.name + '</a></b>';
//   document.getElementById('iw-address').textContent = place.vicinity;

//   if (place.formatted_phone_number) {
//   document.getElementById('iw-phone-row').style.display = '';
//   document.getElementById('iw-phone').textContent =
//     place.formatted_phone_number;
//   }
//   else {
//   document.getElementById('iw-phone-row').style.display = 'none';
//   }


//   // The regexp isolates the first part of the URL (domain plus subdomain)
//   // to give a short URL for displaying in the info window.
//   if (place.website) {
//   var fullUrl = place.website;
//   var website = hostnameRegexp.exec(place.website);
//   if (website === null) {
//     website = 'http://' + place.website + '/';
//     fullUrl = website;
//   }
//   document.getElementById('iw-website-row').style.display = '';
//   document.getElementById('iw-website').textContent = website;
//   }
//   else {
//   document.getElementById('iw-website-row').style.display = 'none';
//   }
//  }
// }






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
