$(document).ready(function() {

    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 2 // Creates a dropdown of 2 years to control year
    });
    $(".button-collapse").sideNav();
    console.log("ready!");
});
