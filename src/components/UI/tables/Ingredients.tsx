'use client';

import { CATEGORY_OPTIONS, UNIT_OPTIONS } from '@/constants/select-options';
import { useAuthStore } from '@/store/auth.store';
import { useIngredientStore } from '@/store/ingredient.store';
import { Button } from '@heroui/react';

const IngredientsTable = () => {
  const { ingredients, removeIngredient, isLoading } = useIngredientStore();
  const { isAuth } = useAuthStore();

  const handleDelete = async (id: string) => {
    await removeIngredient(id);
  };

  const getCategoryLabel = (value: string) => {
    const option = CATEGORY_OPTIONS.find((opt) => opt.value === value);
    return option ? option.label : value;
  };

  const getUnitLabel = (value: string) => {
    const option = UNIT_OPTIONS.find((opt) => opt.value === value);
    return option ? option.label : value;
  };

  if (!isAuth) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3">
        <span className="text-4xl">🔒</span>
        <p className="text-lg font-semibold text-gray-600">Access Restricted</p>
        <p className="text-sm text-gray-400">
          Please sign in to view ingredients
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <p className="mt-4 text-gray-400">Loading...</p>;
  }

  if (ingredients.length === 0) {
    return <p className="mt-4 text-gray-400">No ingredients yet.</p>;
  }

  return (
    <div className="w-full min-w-0">
      <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
      <ul className="space-y-2">
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.id}
            className="flex items-start justify-between gap-3 text-gray-700"
          >
            <span className="min-w-0">
              <span className="text-black">{ingredient.name}</span>
              {' — '}
              {getCategoryLabel(ingredient.category ?? '')},{' '}
              {getUnitLabel(ingredient.unit ?? '')}
              {ingredient.pricePerUnit !== null && (
                <> · {ingredient.pricePerUnit} €</>
              )}
              {ingredient.description && (
                <span className="block text-sm text-gray-400">
                  {ingredient.description}
                </span>
              )}
            </span>
            <Button
              color="danger"
              variant="light"
              size="sm"
              onPress={() => handleDelete(ingredient.id)}
              className="shrink-0"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsTable;
