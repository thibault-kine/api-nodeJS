/**
 * ROUTEUR USER
 */

const express = require('express');
const router = express.Router();
const user = require('../Controllers/UserController');

// PUBLIC
// Se connecter
router.post('/login', user.login)

// PUBLIC
// S'inscrire
router.post('/register', user.register)

// PUBLIC
// Récupérer tous les users
router.get('/', user.getAll)

// PUBLIC
// Récupérer un seul user
router.get('/:id', user.get)

// AUTH
// Récupérer ses informations
router.get('/me', user.getMe)

// AUTH
// Modifier ses informations
router.put('/me', user.putMe)

// ADMIN
// Supprimer un user précis
router.delete('/:id', user.delete)

// ADMIN
// Modifier un user précis
router.put('/:id', user.put)


module.exports = router;