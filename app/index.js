const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const express = require('express');
const helmet = require('helmet');

const app = express();

const routes = {
    user: require('./Routes/user'),
    group: require('./Routes/group'),
}


app.use('/users', routes.user);
app.use('/groups', routes.group);
app.use(helmet());


app.listen(PORT, HOSTNAME, () => {
    console.log(`Connected to htpp://${HOSTNAME}:${PORT}/`);
});