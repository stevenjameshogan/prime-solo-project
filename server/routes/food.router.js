const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('user', req.user, 'authed?', req.isAuthenticated());
    if(req.isAuthenticated()){
        let queryText = 'SELECT * FROM food_items WHERE user_id = $1;';
        pool.query(queryText, [req.user.id]).then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
    }   else{
            res.sendStatus(403);
        }
    });


// router.post('/', (req, res) => {
//     console.log(req.user)
//     console.log(req.isAuthenticated());
//     console.log(req.body)
//         if(req.isAuthenticated()) {
//             const queryText = `INSERT INTO food_items (description, image_url, person_id) VALUES ($1, $2, $3)`;
//         pool.query(queryText, [req.body.description, req.body.image_url, req.user.id]).then((result) => {
//             res.sendStatus(201);
//         }).catch((err) => {
//             res.sendStatus(500)
//         })
//         }else {
//             res.sendStatus(403);
//         }
// });

module.exports = router;