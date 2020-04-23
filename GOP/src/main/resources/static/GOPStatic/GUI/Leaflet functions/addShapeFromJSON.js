			
	// Adds shape from json to the map		
		function addShapeFromJSON(){	
			
			var myLayer = L.geoJson().addTo(map);
			var names = ["tl_2016_51_cousub.json", "Pennsylvania House Districts Boundaries.geojson", "tl_2012_55_vtd10.json"];
            
			var i;
			for (i = 0; i < names.length; i++) {


				$.ajax({
					type: 'GET',
					url : 'FILE:///C:/Users/cebo4/OneDrive/College/_Spring20/416/GOP/CSE416/GUI/geoJSON/'+names[i],
					success: function(data) {
						console.log('success',data);
						var ourData = JSON.parse(data);
						myLayer.addData(ourData);
					}
				});

			}
		}


					/*url : 'file:///C:/Users/Shahzeel/Documents/Stony Brook University/Spring 2020/CSE 416/Github/CSE416/GUI/geoJSON/'+names[i],*/
 
