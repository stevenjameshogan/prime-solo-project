var moment = require('moment');
let pluralize = require('pluralize')

function vegExpDate(food) {
    let date = moment();
    switch(pluralize.singular(food.name.toLowerCase())) {
        case 'asparagus':
            return moment(date, "MM-DD-YYYY").add(3, 'days');
            break;
        case 'broccoli':
            return moment(date, "MM-DD-YYYY").add(4, 'days');
            break;
        case 'brussels sprout':
            return moment(date, "MM-DD-YYYY").add(4, 'days');
            break;
        case 'green peas':
            return moment(date, "MM-DD-YYYY").add(4, 'days');
            break;
        case 'green onions':
            return moment(date, "MM-DD-YYYY").add(4, 'days');
            break;
        case 'spinach':
            return moment(date, "MM-DD-YYYY").add(4, 'days');
            break;
        case 'cabbage':
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        case 'cauliflower':
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        case 'celery':
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        case 'cucumber':
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        case 'lettuce':
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        case 'kale':
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        case 'spinach':
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        case 'pepper':
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        case 'tomato':
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        case 'carrot':
            return moment(date, "MM-DD-YYYY").add(14, 'days');
            break;
        case 'beet':
            return moment(date, "MM-DD-YYYY").add(14, 'days');
            break;
        case 'parsnip':
            return moment(date, "MM-DD-YYYY").add(14, 'days');
            break;
        case 'radish':
            return moment(date, "MM-DD-YYYY").add(14, 'days');
            break;
        case 'turnip':
            return moment(date, "MM-DD-YYYY").add(14, 'days');
            break;
        case 'corn':
            return moment(date, "MM-DD-YYYY").add(2, 'days');
            break;
        case 'potato':
            return moment(date, "MM-DD-YYYY").add(30, 'days');
            break;
        case 'sweet potato':
            return moment(date, "MM-DD-YYYY").add(30, 'days');
            break;
        case 'onion':
            return moment(date, "MM-DD-YYYY").add(30, 'days');
            break;
        case 'garlic':
            return moment(date, "MM-DD-YYYY").add(30, 'days');
            break;
        default:
            return moment(date, "MM-DD-YYYY").add(5, 'days');
    }
}


// if (food.location === 'Fridge'){
//     return moment(date, "MM-DD-YYYY").add(10, 'days');
// }

module.exports = vegExpDate;

