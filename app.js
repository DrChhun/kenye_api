const { response } = require('express');
const express = require('express');
const app = express();
const https = require("https");
const port = 3000;

app.get('/', (req,res) => {

    const url = "https://api.kanye.rest";

    https.get(url, function (response) {
        console.log(response);

        response.on("data", function(data) {
            const quoteRes = JSON.parse(data)
            // console.log(quoteRes);
            const quote = quoteRes.quote;
            console.log(quote);
            res.send("<h1>He said : " + quote + '.</h1>');
        })
    });


})

app.listen(port, ()=> {
    console.log("This is running on port 3000");
})