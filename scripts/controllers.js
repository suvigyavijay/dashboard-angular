'use strict';

var globalVar;
var token;

angular.module('adminApp')
    .controller('MainController', ['$rootScope', '$location', '$state', function ($rootScope, $location, $state) {

        $rootScope.title = "Login";
        $rootScope.loggedIn = false;
        if (!$rootScope.loggedIn)
            $location.path('/');
        $rootScope.stateCheck = function (selected) {
            if ($state.current.url == selected) {
                return true;
            } else {
                return false;
            }
        }

    }])

.controller('LoginController', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {

    $scope.userLogin = {
        username: "",
        password: ""
    }

    $scope.login = function () {
        firebase.auth().signInWithEmailAndPassword($scope.userLogin.username, $scope.userLogin.password)
            .then(function () {
                $rootScope.loggedIn = true;
                $state.go('app.dashboard');
                $rootScope.title = "Dashboard";
                $.notify({
                    icon: 'pe-7s-power',
                    message: "Login Successful"
                }, {
                    type: 'success',
                    timer: 3000
                });
            }).catch(function (error) {
                console.log(error);
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                $.notify({
                    icon: 'pe-7s-refresh-2',
                    message: error.message
                }, {
                    type: 'danger',
                    timer: 3000
                });
            });
    }

    $scope.logout = function () {
        firebase.auth().signOut().then(function () {
            $rootScope.title = "Login";
            $.notify({
                icon: 'pe-7s-power',
                message: "Logout Successful"
            }, {
                type: 'info',
                timer: 3000
            });
        }, function (error) {
            $.notify({
                icon: 'pe-7s-power',
                message: "Some error occured. Please try again"
            }, {
                type: 'warning',
                timer: 3000
            });
        });
    }
    }])

.controller('PlayerDataController', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {

    $scope.players = [];

    firebase.database().ref('/PlayerData/').on('value', function (snap) {

        snap.forEach(function (chSnap) {
            var player = [chSnap.key, chSnap.val().Buff, chSnap.val().Coins, chSnap.val().Coven, chSnap.val().Disabled, chSnap.val().DisabledTime, chSnap.val().Dominion, chSnap.val().Email, chSnap.val().Energy, chSnap.val().FIELD28, chSnap.val().FIELD29, chSnap.val().Flight, chSnap.val().FlightTime, chSnap.val().Gems, chSnap.val().Gender, chSnap.val().ImmuneList, chSnap.val().ImmuneListTimeStamp, chSnap.val().InviteCoven, chSnap.val().InviteName, chSnap.val().Latitude, chSnap.val().Longitude, chSnap.val().LunarPhase, chSnap.val().PlayerLevel, chSnap.val().Rank, chSnap.val().Shield, chSnap.val().ShieldTime, chSnap.val().TimeStamp, chSnap.val().XP];
            $scope.players.push(player);
        });
        console.log($scope.players);
        $scope.$apply();
    });



}])

.controller('GlobalVarController', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {

    $scope.globalvars = [];

    firebase.database().ref('/GlobalVariables/').on('value', function (snap) {

        snap.forEach(function (chSnap) {
            var globalvar = [chSnap.key, chSnap.val().Val, chSnap.val().zDiscription];
            $scope.globalvars.push(globalvar);
        });
        console.log($scope.globalvars);
        $scope.$apply();
    });



}])

.controller('MapController', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {

    console.log('yes');

    var demo = {
        initPickColor: function () {
            $('.pick-class-label').click(function () {
                var new_class = $(this).attr('new-class');
                var old_class = $('#display-buttons').attr('data-class');
                var display_div = $('#display-buttons');
                if (display_div.length) {
                    var display_buttons = display_div.find('.btn');
                    display_buttons.removeClass(old_class);
                    display_buttons.addClass(new_class);
                    display_div.attr('data-class', new_class);
                }
            });
        },

        initChartist: function () {

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
                labels: ['62%', '32%', '6%'],
                series: [62, 32, 6]
            });
        },

        initGoogleMaps: function () {
            var myLatlng = new google.maps.LatLng(37.7749, -122.4194);
            var mapOptions = {
                zoom: 13,
                center: myLatlng,
                scrollwheel: true, //we disable de scroll over the map, it is a really annoing when you scroll through page
                // styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
                styles: [
                    {
                        elementType: 'geometry',
                        stylers: [{
                            color: '#242f3e'
                        }]
                    },
                    {
                        elementType: 'labels.text.stroke',
                        stylers: [{
                            color: '#242f3e'
                        }]
                    },
                    {
                        elementType: 'labels.text.fill',
                        stylers: [{
                            color: '#746855'
                        }]
                    },
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{
                            color: '#d59563'
                        }]
        },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{
                            color: '#d59563'
                        }]
        },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{
                            color: '#263c3f'
                        }]
        },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{
                            color: '#6b9a76'
                        }]
        },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{
                            color: '#38414e'
                        }]
        },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                        stylers: [{
                            color: '#212a37'
                        }]
        },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.fill',
                        stylers: [{
                            color: '#9ca5b3'
                        }]
        },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{
                            color: '#746855'
                        }]
        },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{
                            color: '#1f2835'
                        }]
        },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{
                            color: '#f3d19c'
                        }]
        },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{
                            color: '#2f3948'
                        }]
        },
                    {
                        featureType: 'transit.station',
                        elementType: 'labels.text.fill',
                        stylers: [{
                            color: '#d59563'
                        }]
        },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{
                            color: '#17263c'
                        }]
        },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{
                            color: '#515c6d'
                        }]
        },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.stroke',
                        stylers: [{
                            color: '#17263c'
                        }]
        }
        ]
            }

            var players = [];
            var actualMarkers = [];

            firebase.database().ref('/PlayerData/').on('value', function (snap) {

                snap.forEach(function (chSnap) {
                    var childLat = chSnap.val().Latitude;
                    var childLang = chSnap.val().Longitude;
                    var childKey = chSnap.key;
                    var player = [childKey, childLat, childLang];
                    players.push(player);
                });
                //console.log(players);
                setTimeout(function () {
                    loadMarkers();
                }, 100);
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
                var infoWindow = new google.maps.InfoWindow(),
                    marker, i;

                // Loop through our array of markers & place each one on the map  
                for (i = 0; i < markers.length; i++) {
                    if (markers[i][1] == undefined || markers[i][2] == undefined) {
                        //console.log('skiped');
                        continue;
                    }
                    var position = new google.maps.LatLng(markers[i][1] || 0, markers[i][2] || 0);
                    bounds.extend(position);
                    var image = {
                        url: 'http://i.imgur.com/wftyDQA.png',
                        size: new google.maps.Size(32,32)
                    };
                    marker = new google.maps.Marker({
                        position: position,
                        icon: image,
                        title: markers[i][0]
                    });
                    
                    actualMarkers.push(marker);
                     
                    // Allow each marker to have an info window    
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                      
                            var player = [];
                        return function () {
                            console.log(marker.title.toString());
                          firebase.database().ref('/PlayerData/'+marker.title+'/').on('value', function (snap) {
                                player = [snap.key, snap.val().Buff, snap.val().Coins, snap.val().Coven, snap.val().Disabled, snap.val().DisabledTime, snap.val().Dominion, snap.val().Email, snap.val().Energy, snap.val().FIELD28, snap.val().FIELD29, snap.val().Flight, snap.val().FlightTime, snap.val().Gems, snap.val().Gender, snap.val().ImmuneList, snap.val().ImmuneListTimeStamp, snap.val().InviteCoven, snap.val().InviteName, snap.val().Latitude, snap.val().Longitude, snap.val().LunarPhase, snap.val().PlayerLevel, snap.val().Rank, snap.val().Shield, snap.val().ShieldTime, snap.val().TimeStamp, snap.val().XP];
                              
                            var htmlput = '<table><tr><th> Buff </th> <td>' + player[1] + '</td></tr> <tr><th> Coins </th> <td>' + player[2] + '</td></tr> <tr><th> Coven </th> <td>' + player[3] + '</td></tr> <tr><th> Disabled </th> <td>' + player[4] + '</td></tr> <tr><th> DisabledTime </th> <td>' + player[5] + '</td></tr> <tr><th> Dominion </th> <td>' + player[6] + '</td></tr> <tr><th> Email </th> <td>' + player[7] + '</td></tr> <tr><th> Energy </th> <td>' + player[8] + '</td></tr> <tr><th> FIELD28 </th> <td>' + player[9] + '</td></tr> <tr><th> FIELD29 </th> <td>' + player[10] + '</td></tr> <tr><th> Flight </th> <td>' + player[11] + '</td></tr> <tr><th> FlightTime </th> <td>' + player[12] + '</td></tr> <tr><th> Gems </th> <td>' + player[13] + '</td></tr> <tr><th> Gender </th> <td>' + player[14] + '</td></tr> <tr><th> ImmuneList </th> <td>' + player[15] + '</td></tr> <tr><th> ImmuneListTimeStamp </th> <td>' + player[16] + '</td></tr> <tr><th> InviteCoven </th> <td>' + player[17] + '</td></tr> <tr><th> InviteName </th> <td>' + player[18] + '</td></tr> <tr><th> Latitude </th> <td>' + player[19] + '</td></tr> <tr><th> Longitude </th> <td>' + player[20] + '</td></tr> <tr><th> LunarPhase </th> <td>' + player[21] + '</td></tr> <tr><th> Playerel </th> <td>' + player[22] + '</td></tr> <tr><th> Rank </th> <td>' + player[23] + '</td></tr> <tr><th> Shield </th> <td>' + player[24] + '</td></tr> <tr><th> ShieldTime </th> <td>' + player[25] + '</td></tr> <tr><th> TimeStamp </th> <td>' + player[26] + '</td></tr> <tr><th> XP </th> <td>' + player[27] + '</td></tr><table>';
                            infoWindow.setContent(htmlput);
                            infoWindow.open(map, marker);
                            });
                        }
                    })(marker, i));

                    // Automatically center the map fitting all markers on the screen
                    map.fitBounds(bounds);
                }

                // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
                var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
                    this.setZoom(3);
                    google.maps.event.removeListener(boundsListener);
                });
                // Add a marker clusterer to manage the markers.
                var markerCluster = new MarkerClusterer(map, actualMarkers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            }
        },

        showNotification: function (from, align) {
            color = Math.floor((Math.random() * 4) + 1);

            $.notify({
                icon: "pe-7s-gift",
                message: "Welcome to Creatrix, the power behind covens!"

            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                }
            });
        }


    }

    $().ready(function () {
        demo.initGoogleMaps();
    });


    }])

;