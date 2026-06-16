'use client';

import RecipeForm from '@/forms/recipe.form';
import { useIngredientStore } from '@/store/ingredient.store';
import { useEffect } from 'react';

export default function NewRecipePage() {
  useEffect(() => {
    useIngredientStore.getState().loadIngredients();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Recipe</h1>
      <RecipeForm />
    </div>
  );
}
