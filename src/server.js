import yelp from 'yelp-fusion';

const apiKey = 111;

let client = yelp.client(apiKey);

client.search({
    term: 'Four Barrel Coffee',
    location: 'san francisco, ca',
  }).then(response => {
    console.log(response.jsonBody.businesses[0]);
  }).catch(e => {
    console.log(e);
  });
