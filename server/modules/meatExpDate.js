var moment = require('moment');
let pluralize = require('pluralize')

function meatExpDate(food) {
    let date = moment();
    switch(pluralize.singular(food.name.toLowerCase())) {
        case 'apple':
        if (food.location === 'Fridge'){
            return moment(date, "MM-DD-YYYY").add(30, 'days');
        }
            return moment(date, "MM-DD-YYYY").add(30, 'days');
            break;
        case 'lemon':
        if (food.location === 'Fridge'){
            return moment(date, "MM-DD-YYYY").add(45, 'days');
        }
            return moment(date, "MM-DD-YYYY").add(14, 'days');
            break;
        case 'lime':
        if (food.location === 'Fridge'){
            return moment(date, "MM-DD-YYYY").add(45, 'days');
        }
            return moment(date, "MM-DD-YYYY").add(14, 'days');
            break;
        case 'grape':
        if (food.location === 'Fridge'){
            return moment(date, "MM-DD-YYYY").add(21, 'days');
        }
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        case 'melon':
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        case 'peach':
            return moment(date, "MM-DD-YYYY").add(14, 'days');
            break;
        case 'pear':
            return moment(date, "MM-DD-YYYY").add(30, 'days');
            break;
        case 'pineapple':
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        default:
            return moment(date, "MM-DD-YYYY").add(5, 'days');
    }
}



module.exports = meatExpDate;

