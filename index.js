const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, console.log("listening on http://localhost:3000"));