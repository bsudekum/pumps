$(function () {
  var map = new L.Map('map');

  var cloudmadeUrl = 'http://a.tiles.mapbox.com/v3/bobbysud.map-94xylfrd/{z}/{x}/{y}.png',
    cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    cloudmade = new L.TileLayer(cloudmadeUrl, {
      maxZoom: 18,
      attribution: cloudmadeAttribution
    });

  map.addLayer(cloudmade);

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);

  map.locateAndSetView();

  function onLocationFound(e) {
    var radius = e.accuracy / 2;

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
    map.setView(new L.LatLng(37.8043637, - 122.2711137), 13).addLayer(cloudmade);
  }

  function addPoints(data) {
    console.log(data)
  }

  /*$.ajax({
    url: 'http://www.govhub.org/',
    dataType: 'json',
    success: function (data) {

      addPoints(data);

    }
  });*/

  data = [{"address":"6124 Telegraph Ave. Oakland, CA","bearing":45.0,"created_at":"2012-07-21T19:50:29Z","description":"Hours are 11-5 Tuesday-Friday, 11-6 Saturday-Sunday.","distance":0.0,"id":2,"latitude":37.847803,"longitude":-122.2606935,"name":"The Spoke Cyclery","station_type":"Bike Shop","updated_at":"2012-07-21T19:50:29Z"},{"address":"2424 Webster St Oakland, CA","bearing":225.0,"created_at":"2012-07-21T19:50:31Z","description":"Mon-Fri 10 am - 7 pm. Sat 10 am - 6 pm. Sun 12 pm - 5 pm","distance":1.8249525722405944,"id":4,"latitude":37.8138747,"longitude":-122.2646485,"name":"Bay Area Bikes","station_type":"Bike Shop","updated_at":"2012-07-21T19:50:31Z"},{"address":"300 Lakeshore Oakland, CA","bearing":135.0,"created_at":"2012-07-21T19:50:30Z","description":"Pump chained to park bench at corner of lakeshore and 20th.","distance":2.518519432718994,"id":3,"latitude":37.79984839999999,"longitude":-122.2565425,"name":"Lakeshore Repair Station","station_type":"Citizen Sponsored","updated_at":"2012-07-21T19:50:30Z"}]
  addPoints(data)

  


});