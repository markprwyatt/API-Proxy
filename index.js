const express = require("express");
const app = express();
const fetch =  require("node-fetch");
require("dotenv").config()


app.listen(3000, () => console.log('listening on 3000'))
app.use(express.static('public'))

app.get('/getAllPages', async (request, response) => {

    const token = process.env.TOKEN
    const url = `https://114-oua-973.mktorest.com/rest/asset/v1/landingPages.json?access_token=${token}&folder={"id":2165,"type":"Program"}&maxReturn=200`;
    const  fetchResponse = await fetch(url);
    const json = await fetchResponse.json();
    response.json(json)


});