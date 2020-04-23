// This function saves the drawn shapes on the map to a JSON file

function saveShapeToJSON(){
  // Extract GeoJson from featureGroup
            var data = drawnItems.toGeoJSON();

            // Stringify the GeoJson
            var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));

            // Create export
            document.getElementById('export').setAttribute('href', 'data:' + convertedData);
            document.getElementById('export').setAttribute('download','data.geojson');

}