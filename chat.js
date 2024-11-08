// Load the user information from localStorage
const userName = localStorage.getItem('firstName');
document.getElementById('userName').textContent = userName || 'User';

// Function to add a message to the chat box
function addMessageToChatBox(message, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat
}

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message) {
        // Display user message
        addMessageToChatBox(message, 'user');
        messageInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botResponse = `You said: ${message}`;
            addMessageToChatBox(botResponse, 'bot');
        }, 500);
    }
}
