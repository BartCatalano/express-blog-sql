// importo la lista dati

const connection = require("../data/data");


// index
const index = (req, res) => {

    const sql = "SELECT * FROM `posts`";

    connection.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({
                message: "Errore Interno Del Server1111"
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


};

module.exports = {
    index,
    show,
    // create,
    // update,
    // modify,
    destroy
};