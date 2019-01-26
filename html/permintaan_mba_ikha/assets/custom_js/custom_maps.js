var latt = $('[name="lat"]');
var lngt = $('[name="lng"]');
var initAutocomplete = () => {
    if (latt.val() == '' || lngt.val() == '') {
        var myLatlng = new google.maps.LatLng(0.5070677, 101.44777929999998);
    } else {
        var myLatlng = new google.maps.LatLng(parseFloat(latt.val()), parseFloat(lngt.val()));
    }
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatlng,
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    //default marker
    var def_marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        draggable: true,
        title: 'Pindahkan marker, kemudian klik untuk mendapatkan lokasi'
    });
    google.maps.event.addListener(def_marker, "click", function(event) {
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        document.getElementById('lat').value = latitude;
        document.getElementById('lng').value = longitude;
    }); //end addListener
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
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
            var _marker = new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                draggable: true,
                title: 'Pindahkan Marker dan Klik Untuk Mendapatkan Data Lokasi'
            });
            google.maps.event.addListener(_marker, "click", function(event) {
                var latitude = event.latLng.lat();
                var longitude = event.latLng.lng();
                document.getElementById('lat').value = latitude;
                document.getElementById('lng').value = longitude;
            }); //end addListener
            markers.push(_marker);
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}
// ketika dibuka dengan pop up maka dia akan menutup sendiri
const CloseMySelf = () => {
    try {
        let lat = latt.val();
        let lng = lngt.val();
        console.log('Latitude :'+lat);
        console.log('Longitude :'+lng);
        // untuk menghendel nilai dari lat dan long
        window.opener.HandlePopupResult(lat, lng);
    } catch (err) {}
    // Untuk menutup tab nya
    window.close();
    return false;
}