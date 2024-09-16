import express from 'express';
import { getRecipesByIngredients } from '../controllers/recipeController.js';

const router = express.Router();

router.get('/search', getRecipesByIngredients);

export default router;
