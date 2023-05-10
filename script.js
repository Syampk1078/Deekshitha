function login(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check if the username and password match the expected values
  if (username === 'Deekshitha' && password === 'password') {
    // Redirect to the target page
    window.location.href = 'nav1.html';
  } else {
    console.log('Invalid username or password.');
  }
}

function navigateToInput(event) {
    event.preventDefault(); // Prevent the default link behavior
  
    var input = document.getElementById('username');
    input.focus(); // Set focus to the input field
  }
  