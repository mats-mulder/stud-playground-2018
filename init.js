RandomColor = function() {
    colors = ['#36a253', '#086b38', '#159bc6', '#107ab3']
    return colors[Math.floor(Math.random()*colors.length)];
}

RandomColor2 = function() {
    colors1 = ['#36a253', '#086b38', '#159bc6', '#107ab3']
    return colors1[Math.floor(Math.random()*colors1.length)];
}

Randomfacebook = function() {
    colors2 = ['url(elements/facebook1.png','url(elements/facebook2.png','url(elements/facebook3.png','url(elements/facebook4.png','url(elements/facebook5.png','url(elements/facebook6.png','url(elements/facebook7.png']
    return colors2[Math.floor(Math.random()*colors2.length)];
}



$(".navpick").hover(function(){
    $(this).css("color", RandomColor);
    }, function() {
    $(this).css("color", 'white');
});

$("#iconfacebook").hover(function(){
    $(this).css("background-image", Randomfacebook);
    }, function() {
    $(this).css("background-image", 'url(elements/facebook.png');
});

$(".artistinfobox").hover(function(){
    $(this).css("background-color", RandomColor2);
});

$(".buttonblack").hover(function(){
    $(this).css("background-color", RandomColor);
    }, function() {
    $(this).css("background-color", 'white');
});

$(".timeslot").hover(function(){
    $(this).css("background-color", RandomColor);
    }, function() {
    $(this).css("background-color", '');
});

$('#mobilenavbutton').hover(function(){
    $(this).css("color", RandomColor);
    }, function() {
    $(this).css("color", '#000');
});

$('.collapsible-header').hover(function(){
    $(this).css("color", RandomColor);
    }, function() {
    $(this).css("color", 'white');
});


$(".input-field").hover(function(){
    $(this).css("background-color", RandomColor);
    }, function() {
    $(this).css("background-color", '#fff');
});

 $("#navbutton").click(function() {
    $('#mobilenav').css("visibility", 'initial');
});

  $(".navpick").click(function() {
    $('#mobilenav').css("visibility", 'hidden');
     $('#navbutton').css("visibility", 'initial');
    $('#closebutton').css("visibility", 'hidden');
});

  $("#navbutton").click(function() {
    $('#navbutton').css("visibility", 'hidden');
    $('#closebutton').css("visibility", 'initial');
});

$("#closebutton").click(function() {
    $('#mobilenav').css("visibility", 'hidden');
    $('#navbutton').css("visibility", 'initial');
    $('#closebutton').css("visibility", 'hidden');
});


  


    $(".lineupbutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#section1").offset().top
    }, 800);
});
    $(".timetablebutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 800);
});
    $(".ticketsbutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#section3").offset().top
    }, 800);
});
    $(".infobutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#section4").offset().top
    }, 800);
});
    $(".contactbutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#section5").offset().top
    }, 800);
});




 // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 13,
                    scrollwheel: false,
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(52.004431, 4.3651), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"transit.line","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');
                var infowindow1 = new google.maps.InfoWindow({
                content: 'Lijm & Cultuur'
                });
                var infowindow2 = new google.maps.InfoWindow({
                content: 'Station Delft'
                });

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                position: new google.maps.LatLng(51.997013, 4.370354),
    
                map: map,
    
                title: 'Lijm & Cultuur',
                animation: google.maps.Animation.DROP,
                icon: 'http://www.googlemapsmarkers.com/v1/e45382/'
                });
                
                marker.addListener('click', function() {
                infowindow1.open(map, marker);
                });



                
  
            }