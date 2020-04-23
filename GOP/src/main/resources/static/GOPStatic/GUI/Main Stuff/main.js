function getLocation(lat, lng){
    map.setView([lat,lng], 7);
}

map.on('click', function(e) {
    //alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
});


function locate() {
      map.locate({setView: true, maxZoom: 16});
}


$(".dropdown-menu a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});