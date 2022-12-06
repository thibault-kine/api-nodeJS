class Group {

    /**
     * @public
     * Récupère tous les groupes
     */
    static getAll(req, res) {
        res.send('Récupère tous les groupes');
    }

    /**
     * @public
     * Récupère un seul groupe
     */
    static get(req, res) {
        let { id } = req.params;
        res.send(`Récupère le groupe avec l'ID ${id}`);
    }

    /**
     * @public
     * Récupère les infos d'un groupe
     */
    static getDetails(req, res) {
        let { id } = req.params;
        res.send(`Récupère les infos du groupe avec l'ID ${id}`);
    }

    /**
     * @admin
     * Supprime un seul groupe
     */
    static delete(req, res) {
        let { id } = req.params;
        res.send(`Supprime le groupe avec l'ID ${id}`);
    }

    /**
     * @admin
     * Modifie un seul groupe
     */
    static put(req, res) {
        let { id } = req.params;
        res.send(`Modifie le groupe avec l'ID ${id}`);
    }

    /**
     * @admin
     * Créé un nouveau groupe
     */
    static add(req, res) {
        res.send('Création d\'un nouveau groupe');
    }
}

module.exports = Group;