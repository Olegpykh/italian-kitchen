import RecipeGrid from '@/components/common/recipe-grid';
import AddRecipeButton from '@/components/common/add-recipe-button';
import { getRecipes } from '@/actions/recipe';

export default async function Home() {
  const result = await getRecipes();
  const recipes = result.success ? result.recipes : [];

  return (
    <div className="relative flex flex-col items-center w-full min-h-[80vh] py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/60 via-white to-amber-50/40" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-200/20 blur-[120px] rounded-full -z-10" />

      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-orange-700 via-red-600 to-amber-600 bg-clip-text text-transparent">
        Recipes
      </h1>
      <p className="text-xl text-stone-500 mb-10 max-w-xl text-center">
        Discover and create authentic Italian recipes
      </p>

      <div className="mb-12">
        <AddRecipeButton />
      </div>

      {!result.success && (
        <p className="text-red-500 mb-6 text-sm font-medium">{result.error}</p>
      )}

      <div className="w-full max-w-6xl">
        <RecipeGrid initialRecipes={recipes} />
      </div>
    </div>
  );
}
