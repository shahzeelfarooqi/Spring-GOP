function fixCrossedEdges(id1, id2){
    
    
}

$("#merge").click(function() {
   console.log('Merge Request !');
   var merged;
   var selected = [];
   geojson.on('click', function(e) {
      selected.push(e.layer.toGeoJSON());
      if (selected.length == 2){
         var pol = turf.union(selected[0], selected[1]);
         var merged = L.geoJson(pol,{'style': function() {
               return {
                  'color': 'white',
               }
            }
         }).addTo(map);
         merged.bringToFront();

         selected = [];
         selected.push(pol);
      }
   });
});