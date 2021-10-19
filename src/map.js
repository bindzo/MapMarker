import { MarkerClusterer } from "@googlemaps/markerclusterer";


export default class Map {
  constructor(mapTag) {
    // The location of Uluru
    const uluru = { lat: -30.344, lng: 131.036 };
    // The map, centered at Uluru
    this.map = new google.maps.Map(
      mapTag,
      {
        zoom: 4,
        center: uluru,
      }
    );
  
    // this.addMarker(uluru);
  
    this.markers = this.addMarkerCluster(map);
  }
  
  addMarker(location) {
  
    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
    });
  
  }
  
  addMarkerCluster() {
    const labels = "1";
  
    // Add some this.markers to the map.
    const repairs = repair.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: 'repair',
        title: 'repair ' + i

      });
    });
    const showrooms = showroom.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: 'showroom',
        title: 'showroom ' + i

      });
    });
    const services = service.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        animation: google.maps.Animation.DROP,
        label: 'service',
        title: 'service ' + i
      });
    });
    // Add a marker clusterer to manage the this.markers.
    const outputMarkers = [...showrooms, ...repairs, ...services]
    this.clusters = new MarkerClusterer({ markers: outputMarkers, map: this.map });
    return outputMarkers;
  }
  
  filterMarkers = function(labels,title)
  {
     for (let i = 0; i < this.markers.length; i++) {
        let marker = this.markers[i];
        let isVisible = labels.some((label) => label === marker.label)
        if(title) {
          isVisible = isVisible && marker.title.includes(title);
        }
        marker.setVisible(isVisible);
      }  
      this.clusters.clearMarkers();
      this.clusters.addMarkers(this.markers);

  }
  
  showCurrentLocation = () => {
    const infoWindow = new google.maps.InfoWindow();
  
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
  
            infoWindow.setPosition(pos);
            infoWindow.setContent("Location found.");
            infoWindow.open(map);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter);
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter);
      }
    };
    nearbySearch(latLng) {
    const location = new google.maps.LatLng(latLng.lat, latLng.lng);

    for (i = 0; i < this.markers.length; i++) {
        let marker = this.markers[i];
        console.log(marker.position, location)
        var d = google.maps.geometry.spherical.computeDistanceBetween(marker.position, location);
        let isVisible = d < 5000;
        marker.setVisible(isVisible);
    }
    this.clusters.clearMarkers();
    this.clusters.addMarkers(this.markers);
  }
}



function handleLocationError(
  browserHasGeolocation,
  infoWindow,
  pos
) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

const repair = [
  { lat: -31.56391, lng: 147.154312 },
  { lat: -33.718234, lng: 150.363181 },
  { lat: -33.727111, lng: 150.371124 },
  { lat: -33.848588, lng: 151.209834 },
  { lat: -33.851702, lng: 151.216968 },
  { lat: -34.671264, lng: 150.863657 },
  { lat: -35.304724, lng: 148.662905 },
];

const showroom = [
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438 },
  { lat: -43.999792, lng: 170.463352 },
]

const service = [
  { lat: -36.817685, lng: 175.699196 },
  { lat: -36.828611, lng: 175.790222 },
  { lat: -37.75, lng: 145.116667 },
  { lat: -37.759859, lng: 145.128708 },
  { lat: -37.765015, lng: 145.133858 },
  { lat: -37.770104, lng: 145.143299 },
  { lat: -37.7737, lng: 145.145187 },
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: -38.330766, lng: 144.695692 },
  { lat: -39.927193, lng: 175.053218 },
]