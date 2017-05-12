$(document).ready(function() {
    
    // Initialize the Select Element
    $('select').material_select();
    // Date Picker
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 2 // Creates a dropdown of 2 years to control year
    });
    // Side Navigation collapse 
    $(".button-collapse").sideNav();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    
    


    // var firstName = $("#first_name").val().trim();
    // var lastName = $("#last_name").val().trim();
    // var email = $("#email").val().trim();
    // var phone = $('#telephone').val();
    // var rooms = $('#bedrooms').val(); // testing this jquery to get checked value 
    // var moveIn = $('#move-in').val();
    // var textarea1 = $('#textarea1').val().trim();



    // // Event listener for Submit Button on Contact Form 
    // $("form").submit(function(){
    //     console.log("submitted");
    //     handleContactSubmit();
    // });
    



    // // $("#contactForm").on("click", "#contactForm", handleContactSubmit);

    // function handleContactSubmit(event) {
    //     event.preventDefault();

    //     if (!firstName.val() || !lastName.val() || !email.val() || !moveIn.val()) {
    //         alert('missing information');
    //         return;
    //     }

    //     postProspect({
    //         firstname: firstName,
    //         lastname: lastName,
    //         email: email,
    //         phone: phone,
    //         rooms: rooms,
    //         moveIn: moveIn,
    //         textarea1: textarea1
    //     });
    // }


    //     if (!firstName.val() || !lastName.val() || !email.val() || !moveIn.val()) {
    //         alert('missing information');
    //         return;
    //     }

    //     postProspect({
    //         firstname: firstName,
    //         lastname: lastName,
    //         email: email,
    //         phone: phone,
    //         rooms: rooms,
    //         moveIn: moveIn,
    //         textarea1: textarea1
    //     });
    // }



    // function postProspect(userData){
    // 	$.post("/prospects", userData)
    // 	.then(console.log('thank you for submiting'));
    // }

    console.log("ready!");
});
