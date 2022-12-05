const express = require('express');
const app = express();

const routes = {
    user: require('./routes/user'),
    group: require('./routes/group'),
}


// app.use('/', (req, res) => {
//     res.send('Hello world');
// })

app.use('/user', routes.user);

app.use('/group', routes.group);


app.listen(3000);