function loadPennsylvaniaPrecincts() {
   $.getJSON("PaMunicipalities2020.geojson", function(pennsylvaniaGeoJson){
    
        var pennsylvaniaLayer = L.geoJson(pennsylvaniaGeoJson,{
        onEachFeature:function(feature, featureLayer){
            
            featureLayer.state = "Pennsylvania";
            featureLayer.disctrict = "[1-11]";
            
            featureLayer.on('mouseover',function(e){
                this.openPopup();
                setGeneral(featureLayer._polygonId, featureLayer.disctrict, featureLayer.state);
                setElectionResults(1);
                setDemographicData(1);
                

            });
            
            featureLayer.setStyle({fillColor:'red'});
            featureLayer.setStyle({weight:1});
            
            // This code zooms the polygon on clicks
            featureLayer.on('click', function(e){
                pennsylvaniaLayer.setStyle({fillColor:'blue'});
                map.fitBounds(featureLayer.getBounds());
                featureLayer.setStyle({fillColor: 'red'});
            });
            
        }
        }).addTo(map);
    
        var id = 1;
        pennsylvaniaLayer.eachLayer(function (featureLayer) {
            featureLayer._polygonId = id;
            featureLayer.bindPopup('id: '+featureLayer._polygonId);
            id++;
        });
    });
}

function loadVirginiaPrecincts() {
   $.getJSON("VirginiaPrecincts2016.geojson", function(virginiaGeoJson){
    
        var virginiaLayer = L.geoJson(virginiaGeoJson,{
        onEachFeature:function(feature, featureLayer){
            
            featureLayer.state = "Virginia";
            featureLayer.disctrict = "[1-18]";
            
            featureLayer.on('mouseover',function(e){
                this.openPopup();
                setGeneral(featureLayer._polygonId, featureLayer.disctrict, featureLayer.state);
                setElectionResults(2);                            
                setDemographicData(2);
                
            });
            
            featureLayer.setStyle({fillColor:'red'});
            featureLayer.setStyle({weight:1});
            
            // This code zooms the polygon on clicks
            featureLayer.on('click', function(e){
                pennsylvaniaLayer.setStyle({fillColor:'blue'});
                map.fitBounds(featureLayer.getBounds());
                featureLayer.setStyle({fillColor: 'red'});
            });
            
        }
        }).addTo(map);
    
        var id = 1;
        virginiaLayer.eachLayer(function (featureLayer) {
            featureLayer._polygonId = id;
            featureLayer.bindPopup('id: '+featureLayer._polygonId);
            id++;
        });
    });
}


loadPennsylvaniaPrecincts();

loadVirginiaPrecincts();
