'use client';

import { IRecipe } from '@/types/recipe';
import { Card, CardBody, CardHeader, Button } from '@heroui/react';
import { useRecipeStore } from '@/store/recipe.store';
import Link from 'next/link';
import { useTransition } from 'react';
import Image from 'next/image';
import { UNIT_ABBREVIATIONS } from '@/constants/select-options';
import { useAuthStore } from '@/store/auth.store';

interface RecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { removeRecipe } = useRecipeStore();
  const { isAuth } = useAuthStore();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await removeRecipe(recipe.id);
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    });
  };

  const getUnitLabel = (unit: string) => {
    const unitOption = UNIT_ABBREVIATIONS.find(
      (option) => option.value === unit
    );
    return unitOption ? unitOption.label : unit.toLowerCase();
  };

  return (
    <Card className="w-full max-w-md flex flex-col rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden rounded-t-2xl">
        {recipe.imageUrl ? (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={recipe.imageUrl}
              alt={recipe.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-4xl">🍝</span>
          </div>
        )}
      </div>

      <CardHeader className="flex justify-between items-center text-black px-4 pt-4 pb-0">
        <h2 className="text-xl font-bold tracking-tight">{recipe.name}</h2>
      </CardHeader>

      <CardBody className="flex-1 text-black px-4 py-3">
        <p className="text-gray-500 text-sm line-clamp-2 mb-3">
          {recipe.description || 'No description'}
        </p>
        <h3 className="font-semibold text-sm mb-2">Ingredients:</h3>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 line-clamp-3">
          {recipe.ingredients.map((ing) => (
            <li key={ing.id}>
              {ing.ingredient.name}: {ing.quantity}{' '}
              {getUnitLabel(ing.ingredient.unit ?? '')}
            </li>
          ))}
        </ul>
      </CardBody>

      {isAuth && (
        <div className="flex justify-end gap-2 p-4 pt-0">
          <Link href={`/recipes/${recipe.id}`}>
            <Button color="primary" variant="light" size="sm">
              Edit
            </Button>
          </Link>
          <Button
            color="danger"
            variant="light"
            size="sm"
            onPress={handleDelete}
            isLoading={isPending}
          >
            Delete
          </Button>
        </div>
      )}
    </Card>
  );
};

export default RecipeCard;
