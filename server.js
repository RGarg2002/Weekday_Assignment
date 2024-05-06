const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000

app.use(cors());
app.get('/data', async (req, res) => {
    const {role, exp, location, salary} = req.query;
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

    res.send(data?.jdList?.filter((jd) => (((role === "all") ? true : jd.jobRole === role) && ((location === "all") ? true : jd.location === location) && jd.minExp  >= exp && jd.minJdSalary >= salary)));
});

// app.get('/filters', async(req, res) => {
//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   const body = JSON.stringify({
//     "limit": 947,
//     "offset": 0
//   });
  
//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body
//   };

//   const data = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
//     .then((response) => response.json())
//     .then((result) => result)
//     .catch((error) => console.error(error));

//   const distinctRoles = [...new Set(data.jdList.map(job => job.jobRole))]
//   const distinctLocations = [...new Set(data.jdList.map(job => job.location))]
//   const distinctMinExp = [...new Set(data.jdList.map(job => job.minExp))]
//   const distinctMinJdSalary = [...new Set(data.jdList.map(job => job.minJdSalary))]
//   console.log("distinctRoles", distinctRoles);
//   console.log("distinctLocations", distinctLocations);
//   console.log("distinctMinExp", distinctMinExp);
//   console.log("distinctMinJdSalary", distinctMinJdSalary);

//   res.sendStatus(200);
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})