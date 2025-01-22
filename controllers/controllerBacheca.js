// importo la lista dati
const bachecaList = require("../data/data.js");


// index
const index = (req, res) => {
    res.json({
        data: bachecaList,
        count: bachecaList.length
    });
};

// show
const show = (req, res) => {
    let food = null;
    
    for (let i = 0; i < bachecaList.length; i++) {
        const curElem = bachecaList[i];
        if (curElem.id === parseInt(req.params.id)) {
            res.json(curElem);
        }
    }
};

    // create
    
        const create = (req, res) => {
            console.log(req.body);
            // cerco l'ultimo item dell array
            const lastItemIndex = bachecaList.length -1; 
            const lastItem = bachecaList[lastItemIndex];
            // vado a prendere id dell'ultimo item
            const lastItemId = lastItem.id;
            // creo il nuovo id 
            const newItemId = lastItemId + 1;
            // creo new food con i dati ricevuti dal client
            const newFood = (req.body);
            // gli assegno l'id preso prima
            newFood.id = newItemId;
            // pusho nell' array
            bachecaList.push(newFood);
            res.statusCode = (201);
            res.json(newFood);
        };

    // update
    const update = (req, res) => {
        // recupero id del post da modificare
        const postId = parseInt(req.params.id);
        // prendo l'object
        const updateFood = req.body;
        // assegno id del piatto da modificare
        updateFood.id = postId;

//   uso metodo find per cercare indice da modificare
   const postToUpdate = bachecaList.findIndex((curPost) => curPost.id === postId); {
    if (postToUpdate === -1) {
        res.status(404);
        res.json({error:"not found"
        })
    } else{  
        // sostituisco elemento 
        bachecaList [postToUpdate] = updateFood;
        res.json(updateFood);
    }}};

    // modify
    const modify = (req, res) => {
        const curId = req.params.id;
        res.json('modifichiamo gli specifici dati uno specifico elemento' + curId);
    }

    // Destroy
    const destroy = (req, res) => {
        const curId = parseInt(req.params.id);
        // trovo index corrente
        const curIndex = bachecaList.findIndex((curFood) => curFood.id === curId);
        if (curIndex === -1) {
            res.statusCode = 404;
            res.json({
                error: true,
                message: "Piatto non trovato"
                
            })
         }else {
            bachecaList.splice(curIndex, 1);
            res.json('eliminiamo un elemento' + curId);
         }
        
    }

    module.exports = {
        index,
        show,
        create,
        update,
        modify,
        destroy
    }