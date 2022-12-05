const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET group');
})

router.post('/', (req, res) => {
    res.send('POST group');
})

router.put('/', (req, res) => {
    res.send('PUT group');
})

router.delete('/', (req, res) => {
    res.send('DELETE group');
})


module.exports = router;