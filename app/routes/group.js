/**
 * ROUTEUR GROUP
 */

const express = require('express');
const router = express.Router();
const group = require('../Controllers/GroupController');

// PUBLIC
// Récupère tous les groupes
router.get('/', group.getAll)

// PUBLIC
// Récupère un seul groupe
router.get('/:id', group.get)

// PUBLIC
// Récupère les infos d'un groupe
router.get('/details/:id', group.getDetails)

// ADMIN
// Supprime un seul groupe
router.delete('/:id', group.delete)

// ADMIN 
// Modifie un seul groupe
router.put('/:id', group.put)

// ADMIN
// Créé un nouveau groupe
router.post('/add', group.add)


module.exports = router;