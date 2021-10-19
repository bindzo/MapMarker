import "./style.css";
import Map from "./map"
const map = new Map(document.getElementById('map'));

const yourLocationButton = document.getElementById("your-location");
// yourLocationButton.addEventListener("click", map.showCurrentLocation);

const handleFindNearbyMarkers = () => {
  map.nearbySearch({ lat: -42.734358, lng: 147.439506 });
}
yourLocationButton.addEventListener("click", handleFindNearbyMarkers);

const handleSearch = (event) => {
  event.preventDefault();
  const checkbox = document.getElementsByName('label');
  const textInput = document.getElementById('text-input')
  const checkedLabel = []
  for (var i = 0; i < checkbox.length; i++){
    if (checkbox[i].checked === true){
        checkedLabel.push(checkbox[i].value)
    }
  }
  console.log(checkedLabel);
  map.filterMarkers(checkedLabel, textInput.value);
}
document.getElementById('submit').addEventListener('click',handleSearch,false);