let pluralize = require('pluralize')

function addFoodIcon(food) {
    switch(pluralize.singular(food.name.toLowerCase())) {
        case 'bacon':
            return 'bacon.png';
            break;
        case 'apple':
            return 'apple-1.png';
            break;
        case 'asparagus':
            return 'asparagus.png';
            break;
        case 'avocado':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        case 'bacon':
            return 'bacon.png';
            break;
        default: 
            return 'food.png'
    }
}

module.exports = addFoodIcon;

