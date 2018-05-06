let moment = require('moment');
let vegExpDate = require('./vegExpDate')
let fruitExpDate = require('./fruitExpDate')
let meatExpDate = require('./meatExpDate')
let grainExpDate = require('./grainExpDate')
let dairyExpDate = require('./dairyExpDate')


function addExpDate(food) {
    let date = moment();
    switch(food.category) {
        case 'Vegetables':
            return vegExpDate(food);
            break;
        case 'Fruits':
            return fruitExpDate(food);
            break;
        case 'Meat/Seafood':
            return meatExpDate(food);
            break;
        case 'Grains':
            return grainExpDate(food);
            break;
        case 'Dairy':
        return dairyExpDate(food);
            break;
        case 'Sugars':
            return moment(date, "MM-DD-YYYY").add(365, 'days');
            break;
        default: 
            return moment(date, "MM-DD-YYYY").add(30, 'days')
    }
}

module.exports = addExpDate;

