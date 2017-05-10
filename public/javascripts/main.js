$(document).ready(function() {

    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 2 // Creates a dropdown of 2 years to control year
    });
    $(".button-collapse").sideNav();
    console.log("ready!");

    var firstName = $("#author-name");
    var lastName = $("#last_name");
    var email = $("#email");
    var phone = $('#icon_telephone');
    var rooms = $('#rooms');
    var moveIn = $('#Move-in');
    var textarea1 = $('#textarea1');



    $(document).on("submit", "#contact", handleContactSubmit);


    function handleContactSubmit(event) {
        event.preventDefault();

        if (!firstName.val() || !lastName.val() || !email.val() || !moveIn.val()) {
            alert('missing information');
            return;
        }

        postApplicant({
            firstname: firstName.val.trim(),
            lastname: lastName.val.trim()


        });
    }



    function postApplicant(userData){
    	$.post("/applicants", userData)
    	.then(console.log('thank you for submiting'));
    }


});
