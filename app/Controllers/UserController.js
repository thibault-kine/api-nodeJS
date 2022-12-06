class User {

    /**
     * @public
     * Se connecter
     */
    static login(req, res) {
        res.send('Se connecter');
    }

    /**
     * @public
     * S'inscrire
     */
    static register(req, res) {
        res.send('S\'inscrire');
    }

    /**
     * @public
     * Récupérer un seul user
     */
    static get(req, res) {
        let { id } = req.params;
        res.send(`Récupérer l'user avec l'ID ${id}`);
    }

    /**
     * @public
     * Récupérer tous les users
     */
    static getAll(req, res) {
        res.send('Récupérer tous les users');
    }

    /**
     * @auth
     * Récupérer ses informations
     */
    static getMe(req, res) {
        res.send('Récupérer ses informations persos');
    }

    /**
     * @auth
     * Modifier ses informations
     */
    static putMe(req, res) {
        res.send('Modifier ses informations persos');
    }

    /**
     * @admin
     * Supprimer un user précis
     */
    static delete(req, res) {
        let { id } = req.params;
        res.send(`Supprimer l'user avec l'ID ${id}`);
    }

    /**
     * @admin
     * Modifier un user précis
     */
    static put(req, res) {
        let { id } = req.params;
        res.send(`Modifier l'user avec l'ID ${id}`);
    }
}

module.exports = User;