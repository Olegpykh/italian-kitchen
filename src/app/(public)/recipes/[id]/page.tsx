import { getRecipeById } from '@/actions/recipe';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import EditRecipeButton from '@/components/common/edit-recipe-button';
import { UNIT_ABBREVIATIONS } from '@/constants/select-options';

interface RecipeViewPageProps {
  params: Promise<{ id: string }>;
}

const getUnitLabel = (unit: string) => {
  const unitOption = UNIT_ABBREVIATIONS.find((option) => option.value === unit);
  return unitOption ? unitOption.label : unit.toLowerCase();
};

const RecipeViewPage = async ({ params }: RecipeViewPageProps) => {
  const { id } = await params;
  const result = await getRecipeById(id);

  if (!result.success || !result.recipe) {
    notFound();
  }

  const recipe = result.recipe;

  return (
    <div className="max-w-2xl mx-auto py-10 px-6">
      <Link
        href="/"
        className="text-sm text-gray-400 hover:text-blue-500 transition-colors mb-6 inline-block"
      >
        ← Back to Recipes
      </Link>

      {recipe.imageUrl && (
        <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-6">
          <Image
            src={recipe.imageUrl}
            alt={recipe.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-2">
        <h1 className="text-4xl font-bold tracking-tight">{recipe.name}</h1>
        <EditRecipeButton recipeId={id} />
      </div>

      {recipe.description && (
        <p className="text-gray-500 text-base leading-relaxed mb-8">
          {recipe.description}
        </p>
      )}

      <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {recipe.ingredients.map((ing: any) => (
          <li key={ing.id}>
            {ing.ingredient.name}: {ing.quantity}{' '}
            {getUnitLabel(ing.ingredient.unit ?? '')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeViewPage;
