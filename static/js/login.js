// login.js

const validUsers = [
    { name: "adrix", password: "admin123", page: "birthday.html" },
    { name: "Jane", password: "wedding456", page: "wedding.html" },
    { name: "David", password: "invite789", page: "birthday.html" }
];

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const enteredName = document.getElementById('name').value;
    const enteredPassword = document.getElementById('password').value;
    
    const user = validUsers.find(user => user.name === enteredName && user.password === enteredPassword);
    
    if (user) {
        // Redirect to the appropriate invitation page
        window.location.href = user.page;
    } else {
        alert("Invalid username or password!");
    }
});
