var CONFIG = {
    charset: 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789',
}

$(document).ready(function() {
    $.updatePassword();
    // General event handlers
    
    // Pressing the generate button
    $( ".generate-button" ).on( "click", function(event, ui) {
        $.updatePassword();
    });
    
    // Changing the slider value
    $( ".slider-char-number" ).on( "change", function(event, ui) {
        $(".pass-type").text($.setPassTypeValue($('.slider-char-number').val())); 
    });
    
    // Pressing the Copy button
    $( ".copy-button" ).on( "click", function(event, ui) {
    	$.selectInputText("pass-field");
    });
    
    // Pressing the security notes button
    $( ".security-notes-button" ).on( "click", function(event, ui) {
        $('#security-notes-popup').popup();
    });
    
});

// Methods

$.generateRandomPassword = function(limit, charCase) {  
    limit = limit || 8;  
    var password = '';  
    var charset = CONFIG.charset;
    var list = charset.split('');
    var len = list.length, i = 0;
    
    do {
    
      i++;
    
      var index = Math.floor(Math.random() * len);
      
      password += list[index];
    
    } while(i < limit);
    
    switch(charCase)
	{
		case "lowercase":
		  password = password.toLowerCase();
		  break;
		case "uppercase":
		  password = password.toUpperCase();
		  break;
		default:
	}
    
    return password;
 
};

$.updatePassword = function() {
    var password = $.generateRandomPassword($('.slider-char-number').val(), $(".case-options :radio:checked").val());
    $('#pass-field').val(password);
};

$.setPassTypeValue = function (value) {
    var PassType = '';
    if (value <= 8) {
	    PassType = 'good';
    } else if (value >= 12) {
	    PassType = 'XXL strong';
    } else if (value >= 10){
	    PassType = 'XL strong';
    } else {
	    PassType = 'strong';
    }
    
    return PassType;
}

$.selectInputText = function (elementID) {
	    $("#" + elementID).focus().select();
        input = document.getElementById(elementID);
        input.setSelectionRange(0,20);
}