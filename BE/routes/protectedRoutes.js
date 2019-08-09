const express = require('express');
const router = express.Router();

let data = [
  {
    name: 'Brisket',
    course: 'Main',
    technique: 'Sous-Vide',
    ingredients: [
      'Smoked Salt',
      'Prague Powder No. 1',
      'Liquid Aminos',
      'Chipotle Powder',
      'Molassas'
    ]
  },
  {
    name: 'Elaborate Potato Salad',
    course: 'Side',
    technique: 'Varied',
    ingredients: ['Fingerling potatoes', 'Shiitake Mushrooms', 'Pickled Okra', 'Country Ham']
  },
  {
    name: 'Collard Greens with Kimchi',
    course: 'Side',
    technique: 'Sauté',
    ingredients: ['Collard Greens', 'Bacon fat', 'Red Cabbage Kimchi', 'Apple Cider Vinegar']
  },
  {
    name: 'Jalapeño Mac and Cheese',
    course: 'Side',
    technique: 'Béchamel',
    ingredients: [
      'Brass pressed pasta',
      'Sharp Cheddar',
      'Emulsfying agent (American Cheese works fine)',
      'Pickled Jalapeños'
    ]
  },
  {
    name: 'Maque Choux',
    course: 'Side',
    technique: 'Deep Frying',
    ingredients: ['Corn', 'Fried Green Tomatoes', 'Andouille Sausage', 'Heavy Cream']
  },
  {
    name: 'Hush Puppies',
    couse: 'Side',
    technique: 'Deep Frying',
    ingredients: ['Corn Meal', 'Sugar', 'Jalapeños', 'Sorghum']
  },
  {
    name: 'Strawberry Soup',
    course: 'Dessert',
    technique: 'Maceration',
    ingredients: ['Strawberries', 'Rhubarb', 'White Chocolate', 'Puff Pastry']
  }
];

router.get('/data', function (req, res, next) {
  res.json(data);
});

module.exports = router;
