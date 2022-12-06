/**
 * ROUTEUR USER
 */

const express = require('express');
const router = express.Router();
const user = require('../Controllers/UserController');

// PUBLIC
// Se connecter
router.post('/login', (req, res) => user.login(req, res))

// PUBLIC
// S'inscrire
router.post('/register', (req, res) => user.register(req, res))

// PUBLIC
// Récupérer tous les users
router.get('/', (req, res) => user.getAll(req, res))

// PUBLIC
// Récupérer un seul user
router.get('/:id', (req, res) => user.get(req, res))

// AUTH
// Récupérer ses informations
router.get('/me', (req, res) => user.getMe(req, res))

// AUTH
// Modifier ses informations
router.put('/me', (req, res) => user.putMe(req, res))

// ADMIN
// Supprimer un user précis
router.delete('/:id', (req, res) => user.delete(req, res))

// ADMIN
// Modifier un user précis
router.put('/:id', (req, res) => user.put(req, res))


module.exports = router;