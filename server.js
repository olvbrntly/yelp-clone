import yelp from 'yelp-fusion';
import express from 'express';
import mongoose from 'mongoose';



const app = express();

app.listen(5173,() => console.log('server is running'));

mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const requestSchema = new mongoose.Schema({
  name:String,
  review_count:Number,
  rating:Number
})


let client = yelp.client(apiKey);
//i8ArtAeqdTydZ3zN un:olvbrntly
let searchTerm = {
  term: 'trader joes',
  location: 'torrance, ca',
}

client.search(searchTerm)
    .then(response => {
    console.log(response.jsonBody.businesses[0]);
  }).catch(e => {
    console.log(e);
  });
