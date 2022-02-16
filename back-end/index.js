const express = require('express');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasksRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/', tasksRouter);

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
