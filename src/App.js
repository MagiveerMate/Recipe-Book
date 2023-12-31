import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';
import './App.css'


const recipesData = [
  {
      id: 1,
      title: 'Pasta Carbonara',
      description: 'Classic Italian pasta dish with eggs, cheese, and pancetta.',
      ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'],
      preparation: [
        'Boil the spaghetti until al dente.',
        'Fry the pancetta until crispy.',
        'Whisk eggs and cheese in a bowl.',
        'Combine everything and mix well.',
        'Serve with black pepper on top.'
      ],
      image: 'https://www.177milkstreet.com/assets/site/_large/Roman-Spaghetti-Carbonara-h.jpg'
    },
    {
      id: 2,
      title: 'Chicken Curry',
      description: 'Delicious Indian chicken curry with aromatic spices.',
      ingredients: ['Chicken', 'Onion', 'Tomatoes', 'Ginger', 'Garlic', 'Turmeric', 'Chili Powder', 'Garam Masala', 'Oil', 'Salt'],
      preparation: [
        'Marinate the chicken in spices for 30 minutes.',
        'Saute onions, ginger, and garlic in oil.',
        'Add tomatoes and cook until soft.',
        'Add marinated chicken and cook until tender.',
        'Sprinkle garam masala on top before serving.'
      ],
      image: '	https://www.eazypeazymealz.com/wp-content/uploads/2017/08/Mixed-Vegetable-Chicken-Curry_2.jpg'
    },
    {
      id: 3,
      title: 'Chocolate Chip Cookies',
      description: 'Classic chocolate chip cookies for a sweet treat.',
      ingredients: ['Butter', 'Sugar', 'Brown Sugar', 'Egg', 'Vanilla Extract', 'All-Purpose Flour', 'Baking Soda', 'Salt', 'Chocolate Chips'],
      preparation: [
        'Cream butter and sugars together.',
        'Add egg and vanilla extract.',
        'Mix dry ingredients separately and add to the wet mixture.',
        'Fold in chocolate chips.',
        'Bake in preheated oven at 350°F for 10-12 minutes.'
      ],
      image: 'https://www.snixykitchen.com/wp-content/uploads/2020/02/Gluten-Free-Chocolate-Cookies-9-720x405.jpg'
    },
    {
      id: 4,
      title: 'Mango Lassi',
      description: 'Refreshing Indian drink made with ripe mangoes and yogurt.',
      ingredients: ['Ripe Mangoes', 'Yogurt', 'Sugar', 'Cardamom Powder', 'Ice Cubes'],
      preparation: [
        'Peel and chop the ripe mangoes.',
        'In a blender, combine mangoes, yogurt, sugar, and cardamom powder.',
        'Blend until smooth and creamy.',
        'Add ice cubes and blend again.',
        'Serve chilled.'
      ],
      image: '	https://www.ruchiskitchen.com/wp-content/uploads/2015/05/mango-lassi-recipe-6-500x500.jpg'
    },
    // Add more recipes here
];

const RecipesList = () => {
  return (
    <div className='container'>
      <h1>Recipes List</h1>
      <ul>
        {recipesData.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipesList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
