const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const addFoodIcon = require('../modules/addFoodIcons');
const addExpDate = require('../modules/addExpDate');

// GET all food items from database for a particular user based on their unique user_id
router.get('/', (req, res) => {
    // Check if user is authenticated (registered and logged in)
    if(req.isAuthenticated()){
        // If authenticated, make request to PostgresQL DB
        const queryText = 'SELECT * FROM food_items WHERE user_id = $1;';
        pool.query(queryText, [req.user.id]).then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
        // If not authenticated, send a forbidden status and deny GET route
    }   else {
            res.sendStatus(403);
    };
});

// POST a new user-submitted food item to DB/that particular user's "Kitchen"
router.post('/', (req, res) => {
     // Check if user is authenticated (registered and logged in)
    if (req.isAuthenticated()) {
        // Alias req.body as 'food' for easier code comprehension, form query text based on input date from client
        const food = req.body;
        console.log(food);
        const image = addFoodIcon(food);
        const expDate = addExpDate(food);
        const queryText = `INSERT INTO food_items (user_id, name, quantity, category, location, exp_date, notes, image_url) 
                         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
        pool.query(queryText, [req.user.id, food.name, food.quantity, food.category, food.location, expDate, food.notes, image])
        .then((result) => {
            res.sendStatus(201);
        }).catch((err) => {
            res.sendStatus(500);
        });
    // If not authenticated, send a forbidden status and deny POST route
    } else {
        res.sendStatus(403);
    };   
});

// DELETE a specific food item from the DB/particular user's "Kitchen" based on the food item's unique id
router.delete('/:id', (req, res) => {
    // Check if user is authenticated (registered and logged in)
    if (req.isAuthenticated()) {
        const queryText = `DELETE FROM food_items WHERE id = $1`;
        pool.query(queryText, [req.params.id]).then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            res.sendStatus(500);
        });
    } else {
    // If not authenticated, send a forbidden status and deny DELETE route
        res.sendStatus(403);
    };   
    
});

// UPDATE/PUT a specific food item from the DB/particular user's "Kitchen" based on user-submitted changes and the food item's unique id
router.put('/:id', (req, res) => {
    // Check if user is authenticated (registered and logged in)
    if (req.isAuthenticated()) {
        // Alias req.body as 'updatedFood' for easier code comprehension, form query text based on input date from client
        const updatedFood = req.body;
        const image = addFoodIcon(updatedFood);
        const expDate = addExpDate(updatedFood);
        const queryText = `UPDATE food_items SET name = $1, quantity = $2, category = $3, location = $4, exp_date = $5,
                            notes = $6, image_url = $7 WHERE id = $8`;
        pool.query(queryText, [updatedFood.name, updatedFood.quantity, updatedFood.category, updatedFood.location, 
                                expDate, updatedFood.notes, image, req.params.id])
        .then((result) => {
            res.sendStatus(201);
        }).catch((err) => {
            res.sendStatus(500);
        });
    // If not authenticated, send a forbidden status and deny PUT route
    } else {
        res.sendStatus(403);
    };   
})

//export router for user by server.js
module.exports = router;