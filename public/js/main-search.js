//put the logic for the search bar here. upon submission, loads handlebars.search view in main layout and displays results.\
//take in value from search bar provided by user, assign to a variable, pass to search route

    
 async function submitSearch() {
    const userSearchInput = document.querySelector('#search-navbar').value.trim();

    if (userSearchInput == "") {
        alert("Search must be filled out");
        return false;
    };

    window.location.replace('/search/' + userSearchInput);
};

searchButtonEl = document.getElementById('search-button');

searchButtonEl.addEventListener('click', () => {
    submitSearch();
});