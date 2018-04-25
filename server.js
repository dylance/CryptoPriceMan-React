const express = require('express');
const app = express();
const port = 45566;

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));

app.use(express.static('build'));


app.listen(port, () => console.log(`Listening on port ${port}`));
