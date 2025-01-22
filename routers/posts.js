const express = require("express");
const router = express.Router();
// importo dati da lista dati
const controllerBacheca = require("../controllers/controllerBacheca");
const checkFoodExis = require("../middleware/checkFoodExists");
// index
router.get(`/`, controllerBacheca.index);

// show
router.get("/:id", checkFoodExis, controllerBacheca.show);
// // create
// router.post("/", controllerBacheca.create);
// // update
// router.put("/:id",checkFoodExis, controllerBacheca.update);

// // modify 
// router.patch("/:id",checkFoodExis, controllerBacheca.modify);

// destry
router.delete("/:id",checkFoodExis, controllerBacheca.destroy);

module.exports = router;