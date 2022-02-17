const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tasksRouter = require('./src/routes/tasksRoutes');
const errorMiddleware = require('./src/middlewares/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(cors());

app.use('/', tasksRouter);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
