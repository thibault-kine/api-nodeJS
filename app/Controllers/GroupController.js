const { db } = require('../database');

class Group {

    /**
     * @public
     * Récupère tous les groupes
     */
    static getAll(req, res) {
        // res.send('Récupère tous les groupes');
        const sql = 'SELECT * FROM groups';
        db.query(sql, (error, result) => {
            if(error) {
                res.send(error);
            }
            res.send(result);
        })
    }

    /**
     * @public
     * Récupère un seul groupe
     */
    static get(req, res) {
        let { id } = req.params;
        const sql = `SELECT * FROM groups WHERE id='${id}'`;
        db.query(sql, (error, result) => {
            if(error) {
                res.send(error);
            }
            res.send(result);
        })
    }

    /**
     * @public
     * Récupère les infos d'un groupe
     */
    static getDetails(req, res) {
        let { id } = req.params;
        const sql = `SELECT * FROM groups WHERE id='${id}'`;
        db.query(sql, (error, result) => {
            if(error) {
                res.send(error);
            }
            res.send(result);
        })
    }

    /**
     * @admin
     * Supprime un seul groupe
     */
    static delete(req, res) {
        let { id } = req.params;
        const sql = `DELETE * FROM groups WHERE id='${id}'`;
        db.query(sql, (error, result) => {
            if(error) {
                res.send(error);
            }
            res.send(`Le groupe avec l'ID ${id} a été supprimé !`);
        })
    }

    /**
     * @admin
     * Modifie un seul groupe
     */
    static put(req, res) {
        let { id } = req.params;
        let { name } = req.body;
        const sql = `UPDATE groups SET name='${name}' WHERE id='${id}'`;
        db.query(sql, (error, result) => {
            if(error) {
                res.send(error);
            }
            res.send(`Le groupe avec l'ID ${id} a été modifié !`);
        })
    }

    /**
     * @admin
     * Créé un nouveau groupe
     */
    static add(req, res) {
        let { name } = req.body;
        const sql = `INSERT INTO groups (name) VALUES ('${name}')`;
        db.query(sql, (error, result) => {
            if(error) {
                res.send(error);
            }
            res.send(`Le groupe "${name}" a été créé !`);
        })
    }
}

module.exports = Group;