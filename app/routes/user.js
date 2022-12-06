/**
 * ROUTEUR USER
 */

const express = require('express');
const router = express.Router();
const user = require('../Controllers/UserController');

// PUBLIC
// Se connecter
router.post('/login', user.login(req, res))

// PUBLIC
// S'inscrire
router.post('/register', user.register(req, res))

// PUBLIC
// Récupérer tous les users
router.get('/', user.getAll(req, res))

// PUBLIC
// Récupérer un seul user
router.get('/:id', user.get(req, res))

// AUTH
// Récupérer ses informations
router.get('/me', user.getMe(req, res))

// AUTH
// Modifier ses informations
router.put('/me', user.putMe(req, res))

// ADMIN
// Supprimer un user précis
router.delete('/:id', user.delete(req, res))

// ADMIN
// Modifier un user précis
router.put('/:id', user.put(req, res))


module.exports = router;