$(document).ready(function() {
  console.log('I am here, the login.js got loaded');
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("click", function(event) {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });
  console.log('2 I am here, the login.js got loaded');

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, password) {
    $.post("/users/login", {
      username: username,
      password: password
    }).then(function(data) {
      console.log(data);
      window.location.replace(data);
      // If there's an error, log the error
    });//.catch(function(err) {
    //   console.log(err);
    // });
    console.log(username + password);
  }


  console.log('3 I am here, the login.js got loaded');

});
