// Select the HTML elements we'll be interacting with
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const userInfo = document.getElementById('user-info');
const avatar = document.getElementById('avatar');
const username = document.getElementById('username');
const repoCount = document.getElementById('repo-count');
const login = document.getElementById('login');
const bio = document.getElementById('bio');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const userLocation  = document.getElementById('location');
const createdAt = document.getElementById('created-at');
const updatedAt = document.getElementById('updated-at');

// Add an event listener to the search button
searchBtn.addEventListener('click', () => {
  // Get the username from the search input
  const username = searchInput.value;

  // Fetch user data from the GitHub API
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {

      console.log(data)

      // Update the UI with the user data
      avatar.src = data.avatar_url;
      username.textContent = data.login;
      login.textContent = `Username: ${data.login}`;
      repoCount.textContent = `Repositories numbers: ${data.public_repos}`;
      bio.textContent = `Bio: ${data.bio}`;
      followers.textContent = `Followers numbers: ${data.followers}`;
      following.textContent = `Following numbers: ${data.following}`;
      userLocation.textContent = `Location: ${data.location}`;
      createdAt.textContent = `Created at: ${data.created_at}`;
      updatedAt.textContent = `Updated at: ${data.updated_at}`;

      // Show the user info container
      userInfo.classList.remove('hidden');
    })
    .catch(error => {
      // Log any errors to the console
      console.error('Error:', error);
    });
});
