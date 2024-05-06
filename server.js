const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000

app.use(cors());
app.get('/data', async (req, res) => {
    console.log("req", req.query);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "limit": 9,
      "offset": 0
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    const data = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.error(error));

    res.send(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})