$(document).ready(function(){
    
    $("#infocontent1").hide();
    $("#infocontent1").children().children().hide();
    $("#infocontent2").hide();
    $("#infocontent2").children().children().hide();
    $("#infocontent3").hide();
    $("#infocontent3").children().children().hide();

   
    $('#linkwrapper1 a[id]').click(function(){
        
        var vsubmen = this.id +"content";  
        
        if( $("#infocontent1").is(":visible") == false ) {
            $("#" + vsubmen).show('fast',function() {
                $("#infocontent1").slideDown();
            });
        } else if ( $("#" + vsubmen).is(":visible") == false ) {
        $("#infocontent1").slideUp('slow',function(){
            $("#infocontent1").children().children().hide();
            $("#" + vsubmen).show();
            $("#infocontent1").slideDown('slow');    
            });
        } else {
        $("#infocontent1").slideUp('slow',function(){
            $("#infocontent1").children().children().hide();
        });
        }
        return false;
    });

    $('#linkwrapper2 a[id]').click(function(){
        
        var vsubmen = this.id +"content";  
        
        if( $("#infocontent2").is(":visible") == false ) {
            $("#" + vsubmen).show('fast',function() {
                $("#infocontent2").slideDown();
            });
        } else if ( $("#" + vsubmen).is(":visible") == false ) {
        $("#infocontent2").slideUp('slow',function(){
            $("#infocontent2").children().children().hide();
            $("#" + vsubmen).show();
            $("#infocontent2").slideDown('slow');    
            });
        } else {
        $("#infocontent2").slideUp('slow',function(){
            $("#infocontent2").children().children().hide();
        });
        }
        return false;
    });

    $('#linkwrapper3 a[id]').click(function(){
        
        var vsubmen = this.id +"content";  
        
        if( $("#infocontent3").is(":visible") == false ) {
            $("#" + vsubmen).show('fast',function() {
                $("#infocontent3").slideDown();
            });
        } else if ( $("#" + vsubmen).is(":visible") == false ) {
        $("#infocontent3").slideUp('slow',function(){
            $("#infocontent3").children().children().hide();
            $("#" + vsubmen).show();
            $("#infocontent3").slideDown('slow');    
            });
        } else {
        $("#infocontent3").slideUp('slow',function(){
            $("#infocontent3").children().children().hide();
        });
        }
        return false;
    });

});