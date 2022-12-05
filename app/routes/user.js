const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET user');
})

router.post('/', (req, res) => {
    res.send('POST user');
})

router.put('/', (req, res) => {
    res.send('PUT user');
})

router.delete('/', (req, res) => {
    res.send('DELETE user');
})


module.exports = router;