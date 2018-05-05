
function addFoodIcon(food) {
    switch(food.name) {
        case 'bacon':
            return 'bacon.png';
            break;
        default: 
            return 'food.png'
    }
}

module.exports = addFoodIcon;

