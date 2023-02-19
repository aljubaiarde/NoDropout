// Define predefined users
const users = [
    {username: 'user1', password: 'password1'},
    {username: 'user2', password: 'password2'},
    {username: 'user3', password: 'password3'}
  ];
  
  // Define login function
  function login() {
    const username = prompt('Username:');
    const password = prompt('Password:');
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.reload();
    } else {
      alert('Invalid username or password');
    }
  }
  
  // Check if user is logged in on page load
  const loggedInUser = sessionStorage.getItem('loggedInUser');
  if (!loggedInUser && window.location.pathname !== '/index.html') {
    login();
  }
  
  // Disable right-click context menu
  document.addEventListener('contextmenu', event => event.preventDefault());
  
