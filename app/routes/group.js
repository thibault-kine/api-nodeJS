/**
 * ROUTEUR GROUP
 */

const express = require('express');
const router = express.Router();
const group = require('../Controllers/GroupController');

// PUBLIC
// Récupère tous les groupes
router.get('/', group.getAll(req, res))

// PUBLIC
// Récupère un seul groupe
router.get('/:id', group.get(req, res))

// PUBLIC
// Récupère les infos d'un groupe
router.get('/details/:id', group.getDetails(req, res))

// ADMIN
// Supprime un seul groupe
router.delete('/:id', group.delete(req, res))

// ADMIN 
// Modifie un seul groupe
router.put('/:id', group.put(req, res))

// ADMIN
// Créé un nouveau groupe
router.post('/add', group.add(req, res))


module.exports = router;