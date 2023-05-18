const apiKey = '3c07cefc365e49cfbe21b085aeda278d';
// const url = `https://api.rawg.io/api/stores?key=${apiKey}`;
let gameName = '';

// DO NOT TOUCH THIS I NEED IT FOR WHEN WE GET THE SEARCH BAR WORKING!!!!!!!!!!!!!
// const searchInput = document.getElementById('searchInput');

// searchInput.addEventListener('input', (event) => {
//     gameName = event.target.value;
// });

const url = `https://api.rawg.io/api/stores?key=${apiKey}&search=${encodeURIComponent(gameName)}`;

fetch(url)
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.results.length; i++) {
        const store = data.results[i];
        console.log(store.name);
        console.log(store.games);
    }
})
.catch(error => {
    console.error('Error', error);
});





    // process.env.apiKey

    // insomnia url: https://api.rawg.io/api/stores?key=3c07cefc365e49cfbe21b085aeda278d
