let pluralize = require('pluralize')

function addFoodIcon(food) {
    switch(pluralize.singular(food.name.toLowerCase())) {
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
        case 'banana':
            return 'banana.png';
            break;
        case 'bean':
            return 'beans.png';
            break;
        case 'biscuit':
            return 'biscuit.png';
            break;
        case 'blueberry':
            return 'blueberries.png';
            break;
        case 'bread':
            return 'bread-1.png';
            break;
        case 'broccoli':
            return 'broccoli.png';
            break;
        case 'cabbage':
            return 'cabbage.png';
            break;
        case 'cake':
            return 'cake.png';
            break;
        case 'candy':
            return 'candy.png';
            break;
        case 'carrot':
            return 'carrot.png';
            break;
        case 'cauliflower':
            return 'cauliflower.png';
            break;
        case 'cereal':
            return 'cereals.png';
            break;
        case 'cheese':
            return 'cheese.png';
            break;
        case 'cherry':
            return 'cherries.png';
            break;
        case 'chili':
            return 'chili.png';
            break;
        case 'chips':
            return 'chips.png';
            break;
        case 'chives':
            return 'chives.png';
            break;
        case 'green onion':
            return 'chives.png';
            break;
        case 'chocolate':
            return 'chocolate.png';
            break;
        case 'coconut':
            return 'coconut.png';
            break;
        case 'coffee':
            return 'coffee-2.png';
            break;
        case 'cookie':
            return 'cookies.png';
            break;
        case 'corn':
            return 'corn.png';
            break;
        case 'cucumber':
            return 'cucumber.png';
            break;
        case 'egg':
            return 'egg.png';
            break;
        case 'fish':
            return 'fish.png';
            break;
        case 'flour':
            return 'flour.png';
            break;
        case 'fry':
            return 'fries.png';
            break;
        case 'garlic':
            return 'garlic.png';
            break;
        case 'egg':
            return 'egg.png';
            break;
        case 'grape':
            return 'grapes.png';
            break;
        case 'ham':
            return 'ham.png';
            break;
        case 'honey':
            return 'honey.png';
            break;
        case 'ice cream':
            return 'ice-cream-12.png';
            break;
        case 'jam':
            return 'jam-1.png';
            break;
        case 'jelly':
            return 'jam-1.png';
            break;
        case 'lemon':
            return 'lemon-1.png';
            break;
        case 'lime':
            return 'lime.png';
            break;
        case 'milk':
            return 'milk-1.png';
            break;
        case 'mushroom':
            return 'mushroom-1.png';
            break;
        case 'mustard':
            return 'mustard.png';
            break;
        case 'noodles':
            return 'noodles.png';
            break;
        case 'oat':
            return 'oat.png';
            break;
        case 'olive oil':
            return 'oil.png';
            break;
        case 'vegetable oil':
            return 'oil.png';
            break;
        case 'oil':
            return 'oil.png';
            break;
        case 'olive':
            return 'olive.png';
            break;
        case 'orange':
            return 'orange.png';
            break;
        case 'pancake':
            return 'pancakes-1.png';
            break;
        case 'pasta':
            return 'spaguetti.png';
            break;
        case 'peach':
            return 'peach.png';
            break;
        case 'pear':
            return 'pear.png';
            break;
        case 'pea':
            return 'peas.png';
            break;
        case 'pepper':
            return 'pepper.png';
            break;
        case 'pickle':
            return 'pickles.png';
            break;
        case 'pie':
            return 'pie.png';
            break;
        case 'pineapple':
            return 'pineapple.png';
            break;
        case 'beer':
            return 'pint.png';
            break;
        case 'pistachio':
            return 'pistachio.png';
            break;
        case 'pizza':
            return 'pizza.png';
            break;
        case 'pomegranate':
            return 'pomegranate.png';
            break;
        case 'potato':
            return 'potatoes-2.png';
            break;
        case 'pretzel':
            return 'pretzel.png';
            break;
        case 'pumpkin':
            return 'pumpkin.png';
            break;
        case 'radish':
            return 'radish.png';
            break;
        case 'raspberry':
            return 'raspberry.png';
            break;
        case 'rice':
            return 'rice.png';
            break;
        case 'brown rice':
            return 'rice.png';
            break;
        case 'white rice':
            return 'rice.png';
            break;
        case 'salad':
            return 'salad.png';
            break;
        case 'lettuce':
            return 'salad-1.png';
            break;
        case 'spinach':
            return 'salad-1.png';
            break;
        case 'kale':
            return 'salad-1.png';
            break;
        case 'salami':
            return 'salami.png';
            break;
        case 'salmon':
            return 'salmon.png';
            break;
        case 'sandwich':
            return 'sandwich.png';
            break;
        case 'sausage':
            return 'sausage.png';
            break;
        case 'italian sausage':
            return 'sausage.png';
            break;
        case 'breakfast sausage':
            return 'sausage.png';
            break;
        case 'steak':
            return 'steak.png';
            break;
        case 'strawberry':
            return 'strawberry.png';
            break;
        case 'sushi':
            return 'sushi-1.png';
            break;
        case 'taco':
            return 'taco.png';
            break;
        case 'toast':
            return 'toast.png';
            break;
        case 'tomato':
            return 'tomato.png';
            break;
        case 'turkey':
            return 'turkey.png';
            break;
        case 'watermelon':
            return 'watermelon.png';
            break;
        case 'wrap':
            return 'wrap.png';
            break;
        case 'chicken':
            return 'meat.png';
            break;
        case 'chicken breast':
            return 'meat.png';
            break;
        case 'ketchup':
            return 'mustard-2.png';
            break;
        default: 
            return 'food.png'
    }
}

module.exports = addFoodIcon;

