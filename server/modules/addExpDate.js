let moment = require('moment');
let vegExpDate = require('./vegExpDates')


function addExpDate(food) {
    switch(food.category) {
        case 'Vegetables':
            return vegExpDate(food);
            break;
        case 'Fruits':
            return moment(date, "MM-DD-YYYY").add(10, 'days');
            break;
        case 'Meat':
            return moment(date, "MM-DD-YYYY").add(10, 'days');
            break;
        case 'Grains':
            return moment(date, "MM-DD-YYYY").add(10, 'days');
            break;
        case 'Dairy':
            return moment(date, "MM-DD-YYYY").add(10, 'days');
            break;
        case 'Sugars':
            return moment(date, "MM-DD-YYYY").add(10, 'days');
            break;
        default: 
            return moment(date, "MM-DD-YYYY").add(4, 'days')
    }
}

module.exports = addExpDate;

