const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const express = require('express');
const app = express();

const mysql = require('mysql');
const db = mysql.createConnection({
    host: HOSTNAME,
    user: 'root',
    password: '',
    database: 'annuaire-api'
})
db.connect((err) => {
    if(err) throw err;
    console.log('MySQL Connected!');
})


const routes = {
    user: require('./Routes/user'),
    group: require('./Routes/group'),
}


app.use(express.json());
app.use('/users', routes.user);
app.use('/groups', routes.group);


app.listen(PORT, HOSTNAME, () => {
    console.log(`Connected to http://${HOSTNAME}:${PORT}/`);
});
