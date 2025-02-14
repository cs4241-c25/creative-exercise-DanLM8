const express = require('express');

const app = express();

app.use(express.static('public'));


// process.env.PORT references the port that Glitch uses
// the following line will either use the Glitch port or one that we provided
app.listen(process.env.PORT || 3000);

