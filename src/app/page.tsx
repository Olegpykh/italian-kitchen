'use client';
import RecipeCard from '@/components/common/recipe-card';
import { useRecipeStore } from '@/store/recipe.store';
import { Button } from '@heroui/react';
import Link from 'next/link';

export default function Home() {
  const { recipes, isLoading, error } = useRecipeStore();

  return (
    <div className="flex flex-col items-center w-full py-16 px-6">
      <h1 className="text-5xl font-bold tracking-tight mb-3">Recipes</h1>
      <p className="text-xl text-gray-500 mb-10">
        Discover and create authentic Italian recipes
      </p>

      <Link href="/recipes/new" className="mb-12">
        <Button color="primary" size="lg">
          + Add Recipe
        </Button>
      </Link>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {isLoading && <p className="text-gray-400">Loading...</p>}

      {!isLoading && recipes.length === 0 && (
        <div className="flex flex-col items-center gap-3 py-20">
          <span className="text-6xl">🍝</span>
          <p className="text-xl font-semibold text-gray-600">No recipes yet</p>
          <p className="text-gray-400">Add your first Italian recipe!</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
