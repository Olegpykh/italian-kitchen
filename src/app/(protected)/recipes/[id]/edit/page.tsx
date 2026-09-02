import RecipeForm from '@/forms/recipe.form';
import { getRecipeById } from '@/actions/recipe';
import { notFound } from 'next/navigation';

interface EditRecipePageProps {
  params: Promise<{ id: string }>;
}

const EditRecipePage = async ({ params }: EditRecipePageProps) => {
  const { id } = await params;
  const result = await getRecipeById(id);

  if (!result.success || !result.recipe) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Редактировать рецепт: {result.recipe.name}
      </h1>
      <RecipeForm initialRecipe={result.recipe} />
    </div>
  );
};

export default EditRecipePage;
