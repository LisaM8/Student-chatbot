// Select the form and input elements
const form = document.querySelector('.form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');

// Function to handle form submission
function continueToChat(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the inputs
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();

    // Simple validation
    if (firstName && lastName && email) {
        // Store the user data in localStorage (for use in the chat area)
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);

        // Redirect to the chat area
        window.location.href = 'chat.html';
    } else {
        alert('Please fill in all fields');
    }
}
