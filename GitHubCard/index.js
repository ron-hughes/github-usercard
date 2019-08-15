/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


function MyFunction(data) {
  // adding elements to DOM
  const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

  const image = document.createElement('img')
    
  const cardInfoDiv = document.createElement('div')
    cardInfoDiv.classList.add('card-info')
    
  const name = document.createElement('h3')
    name.classList.add('name')

  const userName = document.createElement('p')
    userName.classList.add('username')

  const location = document.createElement('p')
  const profile = document.createElement('p')
  const link = document.createElement('a')
    
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  
  // params

  image.src = data.avatar_url
  name.textContent = data.name
  userName.textContent = data.login
  location.textContent = `Location: ${data.location}`
  profile.textContent = `Profile: ${data.html_url}`
  link.href =  data.html_url
  followers.textContent = `Followers: ${data.followers} `
  following.textContent = `Following: ${data.following}`
  bio.textContent = `Bio: ${data.bio}`

  // dom appends

  cardDiv.appendChild(image)
  cardDiv.appendChild(cardInfoDiv)
  cardInfoDiv.appendChild(name)
  cardInfoDiv.appendChild(userName)
  cardInfoDiv.appendChild(location)
  cardInfoDiv.appendChild(profile)
  profile.appendChild(link)
  cardInfoDiv.appendChild(followers)
  cardInfoDiv.appendChild(following)
  cardInfoDiv.appendChild(bio)

  return cardDiv;
}

let cards = document.querySelector('.cards')

// console.log(axios.get('https://dog.ceo/api/breed/husky/images/random/12'))

axios.get('https://api.github.com/users/ron-hughes')
.then((response) => {
  let data = response.data;
  console.log(data.avatar_url)
  Object.keys(data).forEach(e => {
    // let gitData = MyFunction(e)
    // cards.appendChild(gitData)
  })
  // let gitData = MyFunction(data);
  // cards.appendChild(gitData);
  // console.log(data)
  // data.forEach(element => {
  // let myFunc = MyFunction(element);
  // cards.appendChild(myFunc)  
}
)

// console.log(MyFunction())

// console.log(axios.get('https://api.github.com/users/ron-hughes'))
