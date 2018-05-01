const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    if(req.isAuthenticated()){
        const queryText = 'SELECT * FROM food_items WHERE user_id = $1;';
        pool.query(queryText, [req.user.id]).then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
    }   else {
            res.sendStatus(403);
    };
});

router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        const food = req.body;
        const queryText = `INSERT INTO food_items (user_id, name, quantity, category, location, notes, image_url) 
                         VALUES ($1, $2, $3, $4, $5, $6, $7)`
        pool.query(queryText, [req.user.id, food.name, food.quantity, food.category, food.location, food.notes, food.image_url])
        .then((result) => {
            res.sendStatus(201);
        }).catch((err) => {
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    };   
});

router.delete('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `DELETE FROM food_items WHERE id = $1`;
        pool.query(queryText, [req.params.id]).then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            res.sendStatus(500);
        });
    };
});

router.put('/:id', (req, res) => {
    const updatedFood = req.body;
    if (req.isAuthenticated()) {
        const queryText = `UPDATE food_items SET name = $1, quantity = $2, category = $3, location = $4, notes = $5 WHERE id = $6`;
        pool.query(queryText, [updatedFood.name, updatedFood.quantity, updatedFood.category, updatedFood.location, updatedFood.notes, req.params.id])
        .then((result) => {
            res.sendStatus(201);
        }).catch((err) => {
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    };   
})

module.exports = router;