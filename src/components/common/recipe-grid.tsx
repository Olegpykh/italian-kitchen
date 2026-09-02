'use client';

import { useEffect } from 'react';
import RecipeCard from '@/components/common/recipe-card';
import { useRecipeStore } from '@/store/recipe.store';
import { IRecipe } from '@/types/recipe';

interface RecipeGridProps {
  initialRecipes: IRecipe[];
}

const RecipeGrid = ({ initialRecipes }: RecipeGridProps) => {
  const recipes = useRecipeStore((state) => state.recipes);
  const hydrated = useRecipeStore((state) => state.hydrated);
  const hydrate = useRecipeStore((state) => state.hydrate);

  useEffect(() => {
    hydrate(initialRecipes);
  }, [hydrate, initialRecipes]);

  const displayRecipes = hydrated ? recipes : initialRecipes;

  if (displayRecipes.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-20">
        <span className="text-6xl">🍝</span>
        <p className="text-xl font-semibold text-gray-600">No recipes yet</p>
        <p className="text-gray-400">Add your first Italian recipe!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {displayRecipes.map((recipe, index) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          priority={index < 3}
        />
      ))}
    </div>
  );
};

export default RecipeGrid;
