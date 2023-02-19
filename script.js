document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});
function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // define the list of predefined users
    var users = [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
        { username: "user3", password: "password3" }
    ];

    // check if the username and password match any of the predefined users
    var authenticated = users.some(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticated) {
        // set the authenticated flag in session storage
        sessionStorage.setItem("authenticated", "true");
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("links").style.display = "block";
    } else {
        alert("Invalid username or password");
    }
}