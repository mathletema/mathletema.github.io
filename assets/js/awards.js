var usaclicked = true;
var thingswelike = [];

$('a.interactive').click(function(){
    var id = $(this).attr('id');
    id = "." + id;
    if($.inArray( id, thingswelike ) == -1 ) {
        thingswelike.push(id);
        console.log(thingswelike);
    } else {
        thingswelike.splice( $.inArray(id, thingswelike), 1 );
        console.log(thingswelike);
    }
    
    /** 
    if (thingswelike.length == 0) {
        $('.tohide').show('slow');
        alert('yo');
    }   
    else {
        $(thingswelike.toString()).hide('slow');
        $('.tohide:not(' +thingswelike.toString() + ')').show('slow'); 
    }  
    */
    $(thingswelike.toString()).hide('slow');
    $('.tohide:not(' +thingswelike.toString() + ')').show('slow'); 
})