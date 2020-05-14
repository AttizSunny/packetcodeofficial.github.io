
(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var fname = $('.validate-input input[name="fname"]');
    var lname = $('.validate-input input[name="lname"]');
    var phone = $('.validate-input input[name="phone"]');
    var vehicle = $('.validate-input input[name="vehicle"]');
    var registeration = $('.validate-input input[name="registeration"]');

    $("#mainform").submit(function(e) {
    e.preventDefault();
    });

    $('.validate-form').on('submit',function(){
        var check = true;

        if($(fname).val().trim() == ''){
            showValidate(fname);
            check=false;
        }

        if($(lname).val().trim() == ''){
            showValidate(lname);
            check=false;
        }

        if($(phone).val().trim() == ''){
            showValidate(phone);
            check=false;
        }

        if($(vehicle).val().trim() == ''){
            showValidate(vehicle);
            check=false;
        }

        if($(registeration).val().trim() == ''){
            showValidate(registeration);
            check=false;
        }

        /* Submit form - generate QR Code*/
        if (check) {
            var qrApi = 'https://api.qrserver.com/v1/create-qr-code/?data=' + phone[0].value + '&amp;size=200x200'
            $('#barcode').attr('src', qrApi )  

            fname = fname[0].value
            lname = lname[0].value
            phone = phone[0].value
            vehicle = vehicle[0].value
            registeration = registeration[0].value

            var dataString = 'fname='+ fname + '&lname=' + lname + '&phone=' + phone + '&vehicle' + vehicle + 'registeration' + registeration;
        /*  $.ajax({
                type: "POST",
                url: "process.php", 
                data: dataString,
                success: function() {
                        $('#barcode').attr('src', qrApi )
                        $('#barcode').css('display', 'block')
                }
            });*/
            
            $('#barcode_div').css('display', 'block')

        } /*if end*/

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }

    /* Modal */
    var modal = document.getElementById("myModal");
    var img = document.getElementById("barcode");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      $('')
      captionText.innerHTML = this.alt;
    }
    var span = document.getElementsByClassName("close")[0];
    $('#myModal').on('click', function(){
        modal.style.display = "none";
    })

    span.onclick = function() {
      modal.style.display = "none";
    }   

})(jQuery);