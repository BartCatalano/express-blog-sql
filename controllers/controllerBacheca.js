// importo la lista dati

const connection = require("../data/data");


// index
const index = (req, res) => {

    const sql = "SELECT * FROM `posts`";

    connection.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({
                message: "Errore Interno Del Server"
            });
        } else {
            return res.status(200).json({
                posts: results
            });
        }
    });
}


// show
const show = (req, res) => {
    // prendo id
    const id = req.params.id;
    // preparo sql con sicurezza "?"
    const sql = "SELECT * FROM `posts` WHERE id = ?";

    connection.query(sql, [id], (error, results) => {
        if (error) {
            return res.status(500).json({
                message: "Errore Interno Del Server"
            });
        } else if (results.length === 0) {
            return res.status(404).json({
                message: "Nessun risultato dalla ricerca"
            })
        } else {
            return res.status(200).json({
                status: "success",
                posts: results[0],
            })
        }

    })
};

// create

// const create = (req, res) => {

// };

// // update
// const update = (req, res) => {

// };

// // modify
// const modify = (req, res) => {
// }

// Destroy
const destroy = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM `posts` WHERE id = ?";
    connection.query(sql, [id],(error) => {
    if (error) {
        return res.status(500).json({
            message: "errore interno del server",
        });
    } else {
        return res.sendStatus(204);
    }
});


};

module.exports = {
    index,
    show,
    // create,
    // update,
    // modify,
    destroy
};