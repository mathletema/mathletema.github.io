var dark = '#231f20';
var light = '#fafafa'; 
var accent = '#4cb5ae';

var usaclicked = true;
var thingswelike = [];

$('a.interactive').click(function(){
    var id = $(this).attr('id');
    id = "." + id;
    if($.inArray( id, thingswelike ) == -1 ) {
        thingswelike.push(id);
        console.log(thingswelike);
        $(this).css('background-color', accent);
    } else {
        thingswelike.splice( $.inArray(id, thingswelike), 1 );
        console.log(thingswelike);
        $(this).css('background-color', dark);
    }
    console.log(thingswelike.length)
    if(thingswelike.length == 0) {
        console.log('yo')
        $('.tohide').show('slow');
    } else { 
        $(thingswelike.toString()).show('slow');
        $('.tohide:not(' +thingswelike.toString() + ')').hide('slow'); 
    }
})