const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

/* Middle wares */
app.use(cors());
app.use(express.json());
/* middle wares */

/* Database Info */


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xv9x1yp.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

/* Database Info */

app.get('/', (req, res) => {
    res.send("genius car server is running")

})

app.listen(port, () => {
    console.log(`Genius Car Server is running on ${port}`);
})