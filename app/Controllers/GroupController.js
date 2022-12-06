class Group {

    static getAll(req, res) {

    }

    static get(req, res) {

    }

    static getDetails(req, res) {

    }

    static delete(req, res) {

    }

    static put(req, res) {

    }

    static add(req, res) {
        const { name } = req.body;

        if(!name) res.status(418).send({ message: "No name" })

        res.send({
            group: `Groupe nommé ${name}`
        })
    }
}

module.exports = Group;