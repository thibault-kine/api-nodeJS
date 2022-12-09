const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const express = require('express');
const app = express();
const cors = require('cors');

const routes = {
    user: require('./Routes/user'),
    group: require('./Routes/group'),
}


app.use(cors());
app.use(express.json());
app.use('/users', routes.user);
app.use('/groups', routes.group);


app.listen(PORT, HOSTNAME, () => {
    console.log(`Connected to http://${HOSTNAME}:${PORT}/`);
});
