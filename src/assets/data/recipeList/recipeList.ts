import {Recipe} from '../../../shared/types';

import {avocado_toastImage} from '../images';
import {tunaImage} from '../images';
import {salsaImage} from '../images';
import {scallopImage} from '../images';
import {hotCocoaImage} from '../images';
import {pieImage} from '../images';

const recipe1: Recipe = {
  key: 0,
  name: 'Avocado Toast',
  prepTime: '15 mins',
  serves: 2,
  description: 'A quick and easy dish, yet full of flavor.',
  recipeImage: avocado_toastImage,
  ingredientsList: [
    '2 slices of sourdough bread',
    'half a large avocado',
    '1 large egg',
    'Lemon pepper seasoning',
  ],
  stepsList: [
    'Put the bread to toast',
    'while the bread is toasting, start to cook the egg to desired doneness and set aside',
    'next, make the avocado spread by smashing it with a fork in a bowl',
    'add lemon pepper seasoning to desired intensity',
    'once the bread is done toasting, spread the avocado on the toast and add the egg on top',
    'add any other toppings if prefered such as grape tomatoes',
  ],
};

const recipe2: Recipe = {
  key: 1,
  name: 'Tuna Tostadas',
  prepTime: '1/2 hour',
  serves: 5,
  description: 'Get a taste of summer with this awesome tuna tostada recipe.',
  recipeImage: tunaImage,
  ingredientsList: [
    '3 cans of tuna',
    '1 Red onion',
    'half a head of lettuce',
    '1 large tomato',
    '1 can of sliced jalapenos in vinegar',
    'mayonaise',
    'tostadas',
  ],
  stepsList: [
    'finely chop the red onion and tomato (make sure not to release too much tomato juice).',
    'finely chop the lettuce.',
    'strain all cans of tuna. Make sure to get most of the tuna water out.',
    'add ingredients to a large bowl, then add the jalapenos if desired.',
    'add tuna, then add the mayonaise (to taste. 2-3 spoonfulls recommended).',
    'mix well.',
    'spread tuna mix on a tostada and add toppings if desired (such as avocado, queso fresco, taptio, etc).',
    'Enjoy!',
  ],
};

const recipe3: Recipe = {
  key: 2,
  name: 'Chunky Tomato Salsa',
  prepTime: '25 mins',
  serves: 5,
  description: 'Are you brave enough to try out this salsa?',
  recipeImage: salsaImage,
  ingredientsList: [
    '1 can of diced tomatos (freshly diced if preferred)',
    '5 large grilled jalapenos',
    'chile seco de arbor (whole)',
    '1 bunch of cilantro',
    '1 tbsp garlic powder',
    '1 tbsp salt',
    '6 oz. of water',
  ],
  stepsList: [
    'Blend chile seco in blender for 10 seconds. Do not open blender immediately! let sit for 5 minutes.',
    'If jalapenos and/or tomatoes are frozen thaw in microwave.',
    'Add tomatoes and jalapenos to blender',
    'add garlic powder, salt, cilantro and water to blender, and blend with pulsating setting for a few seconds, making sure not to over blend',
    'taste and add more of the spices of needed.',
    'store in container for up to 2 weeks.',
  ],
};

const recipe4: Recipe = {
  key: 3,
  name: 'Seared Scallops',
  prepTime: '30 mins',
  serves: 4,
  description: 'A light and simple dish to impress anyone.',
  recipeImage: scallopImage,
  ingredientsList: [
    '6 large scallops',
    '1 bunch of spinach',
    '1/2 cup white wine',
    '1/4 cup parsley, chopped',
    '4 tbsp olive oil',
    '1 tbsp butter',
    'salt and pepper',
  ],
  stepsList: [
    'In a small pan heat the wine and let sit',
    'Heat large pan over medium-high heat with half of the oil.',
    'Season scallops with salt and pepper on both side and place in pan for 2-3 minutes to brown',
    'Flip scallops, add the butter',
    'Once butter browns, add the wine for 2-3 minutes.',
    'Meanwhile heat the other pan with remaining oil, add spinach, season with salt and pepper and toss to coat.',
    'When cooked remove, mix with the scallops and serve over pasta of choice',
  ],
};

const recipe5: Recipe = {
  key: 4,
  name: 'Loaded Hot Cocoa',
  prepTime: '10 mins',
  serves: 1,
  description: 'Hot cocoa with a holiday twist.',
  recipeImage: hotCocoaImage,
  ingredientsList: [
    '1 envelope of hot cocoa mix',
    'whipped cream',
    '2 tbsp mini semisweet chocolate chips',
    '1 tbsp rainbow sprinkles',
    '1 cup hot water or milk',
    '1 mini donut',
    'large marshmellow',
    'donut hole',
    'chocolate truffle',
  ],
  stepsList: [
    'Set 10 mini chips on a plate along with sprinkles and set aside.',
    'Microwave reamining mini chips unitl melted.',
    'Dip rim of mug in melted chocolate and then into sprinkles.',
    'Refrigerate until chocolate is set.',
    'Empty cocoa into mug.',
    'Pour in hot water or milk and stir until dissolved.',
    'Thread marshmellow, donut hole, and truffle onto a short skewer and place skewer in mug.',
    'Top with a whoosh of whipped cream.',
  ],
};

const recipe6: Recipe = {
  key: 5,
  name: 'Pecan Pie',
  prepTime: '1 hour',
  serves: 8,
  description:
    'You will enjoy making this traditional pecan pie as much as you will enjoy eating a slice.',
  recipeImage: pieImage,
  ingredientsList: [
    '1 (9 inch) unbaked pie crust',
    '3 eggs, beaten',
    '1 cup dark corn syrup',
    '1 cup white sugar',
    '1/4 cup melted butter',
    '1 tsp vanilla extract',
    '1 cup pecan halves',
  ],
  stepsList: [
    'Preheat oven to 350 degrees F (175 degrees C).',
    'Beat together the eggs, corn syrup, sugar, butter, and vanilla.',
    'Arrange pecans in bottom of pie crust and pour mixture over.',
    'Bake for 1 hour or until knife inserted 1 inch from edge comes out clean. Allow to cool before slicing.',
  ],
};

const recipeList: Recipe[] = [
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
];

export default recipeList;
