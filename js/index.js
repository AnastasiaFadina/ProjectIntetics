jQuery.validator.addMethod("laxEmail", function(value, element) {
    return this.optional( element ) || /^[A-Za-z]+$/.test( value );
}, 'Please enter only letters.');

jQuery.validator.addMethod("pass", function(value, element) {
    return this.optional( element ) || /(?=.*[0-9])[^!@#$%^&*](?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}/.test( value ); //(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}
}, 'The password must consist of uppercase letters, lowercase letters, numbers, minimal characters 6.');

$(function () {
    $("#jquery_form").validate({
        rules:{
            form_name:{
                laxEmail:true,
                required:true
            },
            form_email:{
                required:true,
                email:true
            },
            form_pswd1:{
                pass:true,
                required:true,
                minlength: 6
            }
        }
    });
});

$(function () {
    $("#jquery_f").validate({
        rules:{
            form_name:{
                laxEmail:true,
                required:true
            },
            form_email:{
                required:true,
                email:true
            },
            form_pswd1:{
                pass:true,
                required:true,
                minlength:6
            },
            form_pswd2:{
                required:true,
                equalTo:"#form_pswd1",
                minlength:6
            }
        }
    });
});

$(document).ready(function() {
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');

    open_modal.click( function(event){
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '65%'}, 200);
            });
    });

    close.click( function(){
        modal
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});

$(document).ready(function() {
    $('a#go').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '7%'}, 200);
            });
    });
    $('#modal_close, #overlay').click( function(){
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
});

jQuery(function($) {
    var t, $tag_box;
    t = $( "#tag" ).tagging();

});
