//put the logic for the search bar here. upon submission, loads handlebars.search view in main layout and displays results.\
//take in value from search bar provided by user, assign to a variable, pass to search route

    
 async function submitSearch() {
    let userSearchInput = document.querySelector('#search-navbar').value.trim();

     if (userSearchInput) {
         await fetch(`/search/${userSearchInput}`)
         .then(res => res.json())
         .then(data => {
            console.log(data);
         })
    }
};

searchButtonEl = document.getElementById('search-button');

searchButtonEl.addEventListener('click', () => {
    submitSearch();
});