const bachecaList = require("../data/data.js");

const checkFoodExist = (req, res, next) => {

    // prendo id da req e lo trsformo in un numero
    const foodId = parseInt(req.params.id);

    // cerco in array l'oggettto che corrisponde ad id
    const food = bachecaList.find((curFood) => curFood.id === foodId );
//    creo costrutto if per vedere se trovo l'oggetto
   if(food !== undefined) {
    next();
   } else {
    res.statusCode = 404;
    res.json({
        error: true,
        message: "cibo non presente nel menu"
    });
   }
}

  module.exports = checkFoodExist;