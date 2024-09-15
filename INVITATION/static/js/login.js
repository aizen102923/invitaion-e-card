// login.js

const validUsers = [
    { name: "John", password: "birthday123", page: "birthday.html" },
    { name: "Jane", password: "wedding456", page: "wedding.html" },
    { name: "David", password: "invite789", page: "birthday.html" }
];

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const enteredName = document.getElementById('name').value.trim();
    const enteredPassword = document.getElementById('password').value.trim();
    
    const user = validUsers.find(user => 
        user.name.toLowerCase() === enteredName.toLowerCase() && user.password === enteredPassword
    );
    
    if (user) {
        // Redirect to the appropriate invitation page
        window.location.href = user.page;
    } else {
        // Show error message
        const errorMsg = document.getElementById('error-message');
        errorMsg.style.display = 'block';
    }
});
