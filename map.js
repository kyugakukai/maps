var map;
var initLatlng;
var currentInfoWindow;
var latLng = [];
var marker = [];
var infoWindow = [];
var restaurantName = ['Jelly fish', '善', '西銀座 潤和'];
var Name = ['S47松永正行', 'S39木下善成', 'S38宇佐美和男'];
var lat = [32.801716,32.801239,32.800216];
var lng = [130.706965,130.706965,130.706019];
var url = ['https://www.google.com/','https://www.yahoo.co.jp/'];
function initMap() {
    //地図の初期中央位置
    initLatlng = new google.maps.LatLng(32.800581, 130.708679);
    for(let i = 0; i < lat.length; i++){
        latLng[i] = new google.maps.LatLng(lat[i],lng[i]);
    }
    var opts = {
        zoom: 18,
        center: initLatlng,
        styles: [
        {
            "featureType": "landscape.man_made",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.attraction",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.place_of_worship",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.sports_complex",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        }
        ]
    };

    map = new google.maps.Map(document.getElementById("map"), opts);
    //var target = document.getElementById("searchLink");
    //marker作成
    
    for(let i = 0; i < latLng.length; i++)
    {
        //target.href = url[i];
        marker[i] = new google.maps.Marker({
            position: latLng[i],
            map: map,
            label: {
                text: (i + 1).toString(),
                fontWeight: 'bold',
                color: 'white'
            }
        });
        infoWindow[i] = new google.maps.InfoWindow({
            content: '<h1>' + restaurantName[i] + '<br>' + Name[i] + '<br>' + '<a id="searchLink" href="' + url[i] + '" target="_blank">リンク</a><br/>'
        });
        marker[i].addListener('click', function() {
            map.setCenter(latLng[i]);
            infoWindow[i].open(map, marker[i]);
            currentInfoWindow = infoWindow[i];
        });
        if(currentInfoWindow){
            currentInfoWindow.close();
        }
    }
}

function centerMarker(){
    var number = index_form.number.value;
    for(let i = 0; i < latLng.length; i++){
        if(number == i + 1){
            map.setCenter(latLng[i]);
        }
    }
}