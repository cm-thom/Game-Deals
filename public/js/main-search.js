//put the logic for the search bar here. upon submission, loads handlebars.search view in main layout and displays results.\
//take in value from search bar provided by user, assign to a variable, pass to search route
const router = require('express.router');

let searchNavbarEl = document.getElementById('search-navbar');

searchNavbarEl.addEventListener('keyup', () => {
    let searchInput = searchNavbarEl.value;
    console.log(searchInput);
    return searchInput
});

module.exports = router;