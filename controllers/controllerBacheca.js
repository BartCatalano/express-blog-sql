// importo la lista dati

const connection = require("../data/data");


// index
const index = (req, res) => {
    const sql = "SELECT * FROM `posts`";

    connection.query(sql, (err, res) => {
        if (err) return res.status(500).json({
            massage: "Errore Interno Del Server"
        })
        return req.status(200).json({
            status: "success",
            data: post,
        })
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