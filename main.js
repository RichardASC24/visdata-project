let data = dataObj.results; // Assign the results array to the data variable
console.log(data); // Check if obj exists

// Select the DOM elements
let userGenderDiv = document.getElementById('user_gender');
let userNameDiv = document.getElementById('user_name');
let userTitleDiv = document.getElementById('user_title');
let userFirstDiv = document.getElementById('user_first');
let userLastDiv = document.getElementById('user_last');
let userEmailDiv = document.getElementById('user_email');
let userLocationDiv = document.getElementById('user_location');
let userDobDiv = document.getElementById('user_dob');
let userPictureImg = document.getElementById('user_picture');
let randomButton = document.getElementById('random-btn');

// Function to change the user data
function changeUser() {
    // Generates a random user
    let randomUser = Math.floor(Math.random() * data.length);
    console.log(randomUser);

    // Selects the user
    let selectedUser = data[randomUser];
    console.log(selectedUser);

    // Create variables to store user-related values
    let userGender = selectedUser.gender;
    let userName = `${selectedUser.name.title} ${selectedUser.name.first} ${selectedUser.name.last}`;
    let userTitle = selectedUser.name.title;
    let userFirst = selectedUser.name.first;
    let userLast = selectedUser.name.last;
    let userEmail = selectedUser.email;

    // Update the DOM/HTML with user information
    userGenderDiv.innerText = `Gender: ${userGender}`;
    userNameDiv.innerText = `Name: ${userName}`;
    userTitleDiv.innerText = `Title: ${userTitle}`;
    userFirstDiv.innerText = `First Name: ${userFirst}`;
    userLastDiv.innerText = `Last Name: ${userLast}`;
    userEmailDiv.innerText = `Email: ${userEmail}`;
}

// Add event listener to the button
randomButton.addEventListener('click', changeUser);
