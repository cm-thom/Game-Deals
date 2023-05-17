const apiKey = '3c07cefc365e49cfbe21b085aeda278d';
const url = `https://api.rawg.io/api/stores?key=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Handle the API response data here
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error', error);
    });



    // insomnia url: https://api.rawg.io/api/stores?key=3c07cefc365e49cfbe21b085aeda278d