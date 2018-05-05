var moment = require('moment');
let pluralize = require('pluralize')

function meatExpDate(food) {
    let date = moment();
    switch(pluralize.singular(food.name.toLowerCase())) {
        case 'steak':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(4, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(45, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
            break;
        case 'ground beef':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(3, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(90, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'ground chicken':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(3, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(90, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'ground turkey':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(3, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(90, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'ground pork':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(3, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(90, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'deli meat':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(7, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(90, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
            break;
        case 'hotdog':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(11, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(45, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
            break;
        case 'bacon':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(7, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(30, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'pork sausage':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(3, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(45, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'chicken sausage':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(3, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(45, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'turkey sausage':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(3, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(45, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'italian sausage':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(3, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(45, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'breakfast sausage':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(3, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(45, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'salami':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(18, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(45, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'pepperoni':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(18, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(45, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'chicken':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(2, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(180, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
        case 'chicken breast':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(2, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(180, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
            break;
        case 'turkey':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(2, 'days');
            } else if (food.location === 'Freezer') {
                return moment(date, "MM-DD-YYYY").add(180, 'days');
            } else {
                return moment(date, "MM-DD-YYYY").add(0, 'days');
            };
            break;
        default:
            return moment(date, "MM-DD-YYYY").add(5, 'days');
    }
}



module.exports = meatExpDate;

