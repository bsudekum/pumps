$(function () {
  var map = new L.Map('map');
    tiles = new L.TileLayer('http://a.tiles.mapbox.com/v3/bobbysud.map-94xylfrd/{z}/{x}/{y}.png', {maxZoom: 17});

  map.addLayer(tiles);

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);

  map.locateAndSetView();

  function onLocationFound(e) {
    var radius = e.accuracy / 100;

    var marker = new L.Marker(e.latlng);
    map.addLayer(marker);
    marker.bindPopup("You are within " + radius + " meters from this point").openPopup();

    var circle = new L.Circle(e.latlng, radius);
    map.addLayer(circle);
  }

  function onLocationError(e) {
    alert(e.message);
  }

  function onLocationError(e) {
    map.setView(new L.LatLng(37.8043637, - 122.2711137), 13).addLayer(tiles);
  }

  function addPoints(data) {

    $.each(data, function(_, station) {
      if(!station.latitude || station.latitude == ""){
        return;
      }
      var markerLocation = new L.LatLng(station.latitude, station.longitude)
      var marker = new L.Marker(markerLocation)
      map.addLayer(marker);

      marker.bindPopup("<ul><li><b>Name:</b> " + station.name + "</li>" +
                       "<li><b>Address:</b><li> " + station.address + "</li>" +
                       "<li><b>Description:</b><li> " + station.description + "</li></ul>");

    });

  }

  $.ajax({
    url: 'http://oaklandpumpsitup.herokuapp.com/stations.json',
    dataType: 'json',
    success: function (data) {
      console.log(data)
      addPoints(data);
    }
  });
  


});