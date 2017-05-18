$(document).ready(function() {

    // Initialize the Select Element
    $('select').material_select();

    // Date Picker
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 2 // Creates a dropdown of 2 years to control year
    });

    // Side Mobile Navigation collapse 
    $(".button-collapse").sideNav();

    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    // slideshow 
    $('.slider').slider();
    $(document).on("click", ".blue", getTenantInfo);

    function getTenantInfo() {
        var tenantID = $(this).attr('id');
        console.log('that button was clicked');
        console.log($(this));
        var queryparam = '/manager/tenants/delete/' + tenantID;
        $.get(queryparam, function(data) {
            // console.log(data + ' +front end code');
            $('body').append(data);
        });
    };

    console.log("ready!");
});
