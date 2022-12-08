const { db } = require('../database');
const { generateAccessToken } = require('../Utils/TokenGenerator');
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
        let { email, roles, password, firstname, lastname } = req.body;
        let sql = 
        `INSERT INTO users (email, roles, password, firstname, lastname) 
         VALUES ('${email}', '${roles}', '${password}', '${firstname}', '${lastname}');`;
        db.query(sql, (error, result) => {
            if(error) {
                res.send(error);
            }
            res.send('Utilisateur enregistré !');
        })
    }

    /**
     * @public
     * Récupérer un seul user
     */
    static get(req, res) {
        let { id } = req.params;
        let sql = `SELECT * FROM users WHERE id = ${id}`;
        // res.send(`Récupérer l'user avec l'ID ${id}`);
        db.query(sql, (error, result) => {
            if(error) {
                res.send(error);
            }
            res.send(result);
        })
    }

    /**
     * @public
     * Récupérer tous les users
     */
    static getAll(req, res) {
        // res.send('Récupérer tous les users');
        const sql = 'SELECT * FROM users';
        db.query(sql, (error, result) => {
            if(error) {
                res.send(error);
            }
            res.send(result);
        })
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
        // res.send(`Supprimer l'user avec l'ID ${id}`);
        const sql = `DELETE * FROM users WHERE id = '${id}'`;
        db.query(sql, (error, result) => {
            if(error) {
                res.send(error);
            }
            res.send(`Utilisateur avec l'ID ${id} supprimé !`);
        })
    }

    /**
     * @admin
     * Modifier un user précis
     */
    static put(req, res) {
        let { id } = req.params;
        let { email, roles, password, firstname, lastname } = req.body;
        // res.send(`Modifier l'user avec l'ID ${id}`);
        const sql = 
        `UPDATE users SET email='${email}', roles='${roles}', password='${password}', firstname='${firstname}', lastname='${lastname}'
         WHERE id='${id}';`;
        db.query(sql, (error, result) => {
            if(error) {
                res.send(error);
            }
            res.send(`Utilisateur avec l'ID ${id} a bien été modifié !`);
        })
    }
}

module.exports = User;