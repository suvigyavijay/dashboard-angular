type = ['','info','success','warning','danger'];
var data = [];

demo = {
  initPickColor: function(){
    $('.pick-class-label').click(function(){
      var new_class = $(this).attr('new-class');  
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if(display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initChartist: function(){    

    var dataSales = {
      labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      series: [
      [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
      [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
      [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
      ]
    };

    var optionsSales = {
      lineSmooth: false,
      low: 0,
      high: 800,
      showArea: true,
      height: "245px",
      axisX: {
        showGrid: false,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
      }),
      showLine: false,
      showPoint: false,
    };

    var responsiveSales = [
    ['screen and (max-width: 640px)', {
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
    ];
    
    Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);

    
    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
      [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
      [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
      ]
    };

    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "245px"
    };

    var responsiveOptions = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
    ];

    Chartist.Bar('#chartActivity', data, options, responsiveOptions);
    
    var dataPreferences = {
      series: [
      [25, 30, 20, 25]
      ]
    };

    var optionsPreferences = {
      donut: true,
      donutWidth: 40,
      startAngle: 0,
      total: 100,
      showLabel: false,
      axisX: {
        showGrid: false
      }
    };
    
    Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

    Chartist.Pie('#chartPreferences', {
      labels: ['62%','32%','6%'],
      series: [62, 32, 6]
    });   
  },

  initGoogleMaps: function(){
    var myLatlng = new google.maps.LatLng(37.7749, -122.4194);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
         // styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
         styles: [
         {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
         {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
         {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
         {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
        ]
      }

      var players = [];

      firebase.database().ref('/PlayerData/').on('value',function(snap){

        snap.forEach(function(chSnap) {
          var childLat = chSnap.val().Latitude;
          var childLang = chSnap.val().Longitude;
          var childKey = chSnap.key;
          var player = [childKey, childLat, childLang];
          players.push(player);
        });
        //console.log(players);
        setTimeout(function () {
          loadMarkers();
        },5000);
      });

      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      data = players;
    // var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
      mapTypeId: 'roadmap'
    };

    // Display a map on the page
    // map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
    
    function loadMarkers() {
    // Multiple Markers
    var markers = players;
    //console.log(markers);


    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
      if (markers[i][1]==undefined || markers[i][2]==undefined){
        //console.log('skiped');
        continue;
      }
      var position = new google.maps.LatLng(markers[i][1]||0, markers[i][2]||0);
      bounds.extend(position);
      marker = new google.maps.Marker({
        position: position,
        map: map,
        title: markers[i][0]
      });
      //   var markerCluster = new MarkerClusterer(map, position,
      //       {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      // }
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infoWindow.setContent(infoWindowContent[i][0]);
            infoWindow.open(map, marker);
          }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
      }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
      this.setZoom(3);
      google.maps.event.removeListener(boundsListener);
    });
  }
},

showNotification: function(from, align){
 color = Math.floor((Math.random() * 4) + 1);

 $.notify({
   icon: "pe-7s-gift",
   message: "Welcome to Creatrix, the power behind covens!"

 },{
  type: type[color],
  timer: 4000,
  placement: {
    from: from,
    align: align
  }
});
}


}

