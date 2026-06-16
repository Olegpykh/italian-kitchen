import IngredientsTable from '@/components/UI/tables/Ingredients';
import IngredientForm from '@/forms/ingredient.form';

const IngredientsPage = () => {
  return (
    <div className="flex flex-col items-center w-full py-10 px-6">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Ingredients</h1>
      <p className="text-gray-400 mb-8">Manage your ingredients collection</p>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <IngredientForm />
        <IngredientsTable />
      </div>
    </div>
  );
};

export default IngredientsPage;
