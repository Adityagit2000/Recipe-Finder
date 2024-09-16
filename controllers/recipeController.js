import axios from 'axios';

export const getRecipesByIngredients = async (req, res, next) => {
  const { ingredients } = req.query;
  const apiKey = process.env.SPOONACULAR_API_KEY;

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    next(error);
  }
};
