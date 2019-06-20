//sticky nav bar//


// W3 schools
// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}
// W3 schools

// google maps api documentatation used
//global variables//
var allMarkers = [];
var infoWindow;
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
            radius: '1500',
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

        var htmlString = `<tr>
                <td> <b>Location<td>
                <td> <b>Name<td>
                <td> <b>Rating<td>
                <td> <b>Number of Ratings<td>
                
            </tr>`;

        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            console.log(place);

            createMarker(results[i]);

            var mapLetter = labels[labelIndex - 1];
            var name = place.name;
            var rating = place.rating;
            var totalRating = place.user_ratings_total;


            if (rating == undefined) {
                rating = "no rating avilable";
            }

            if (totalRating == undefined) {
                totalRating = "no rating avilable";
            }


            htmlString += `<tr>
                <td>${mapLetter}<td>
                <td>${name}<td>
                <td>${rating}<td>
                <td>${totalRating}<td>
                
            </tr>`;
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
    labelIndex = 0;
}
