var map, infoWindow, marker;
        var myLatLng = { lat: 13.7276674, lng: 100.76364379999995};
        var myLatLng2 = { lat: 13.7290321, lng: 100.7794192};
        var myLatLng3 = { lat: 13.7305768, lng: 100.7776824};
        var myLatLng4 = { lat: 13.7318057, lng: 100.78284020000001};
        var myLatLng5 = { lat: 13.7276674, lng: 100.76364379999995};

        var pos = {
            lat: 13.7301169,
            lng: 100.78084749999994
        };


        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 13.7301169, lng: 100.78084749999994 },
                zoom: 16,
                disableDefaultUI: true,
                gestureHandling: 'cooperative'
            });

            directionsService = new google.maps.DirectionsService,
            directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        })

            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
            });

            marker2 = new google.maps.Marker({
                position: myLatLng2,
                map: map,
                title: 'Hello World!'

            });
            marker3 = new google.maps.Marker({
                position: myLatLng3,
                map: map,
                title: 'Hello World!'

            });
            marker4 = new google.maps.Marker({
                position: myLatLng4,
                map: map,
                title: 'Hello World!'

            });

            google.maps.event.addListener(marker, 'click', function() {
            $('.hover_bkgr_fricc').show();
            infoWindow.open(map); //fetch
            });
    
            google.maps.event.addListener(marker2, 'click', function() {
            alert('test');
            infoWindow.open(map); //fetch
            });

            google.maps.event.addListener(marker3, 'click', function() {
            alert('test');
            infoWindow.open(map); //fetch
            });

            google.maps.event.addListener(marker4, 'click', function() {
            alert('test');
            infoWindow.open(map); //fetch
            });
            

            $('.popupCloseButton').click(function(){
                $('.hover_bkgr_fricc').hide();
            });


            infoWindow = new google.maps.InfoWindow;
            
            // Try HTML5 geolocation.
           if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    
                    infoWindow.setPosition(pos);
                    infoWindow.setContent('You are here!');
                    infoWindow.open(map);
                    map.setCenter(pos);
                }, function () {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
        }

        function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
            directionsService.route({
              origin: pointA,
              destination: pointB,
              travelMode: google.maps.TravelMode.DRIVING
            }, function(response, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
              } else {
                window.alert('Directions request failed due to ' + status);
              }
            });
          }

       

        
    
