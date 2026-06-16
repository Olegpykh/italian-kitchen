'use client';

import { CATEGORY_OPTIONS, UNIT_OPTIONS } from '@/constants/select-options';
import { useAuthStore } from '@/store/auth.store';
import { useIngredientStore } from '@/store/ingredient.store';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';

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

  return (
    <Table aria-label="Ingredients list">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Category</TableColumn>
        <TableColumn>Unit</TableColumn>
        <TableColumn>Price per unit</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {ingredients.map((ingredient) => (
          <TableRow key={ingredient.id}>
            <TableCell>{ingredient.name}</TableCell>
            <TableCell>{getCategoryLabel(ingredient.category ?? '')}</TableCell>
            <TableCell>{getUnitLabel(ingredient.unit ?? '')}</TableCell>
            <TableCell>
              {ingredient.pricePerUnit !== null
                ? `${ingredient.pricePerUnit} €`
                : '-'}
            </TableCell>
            <TableCell>{ingredient.description || '-'}</TableCell>
            <TableCell>
              <Button
                color="danger"
                size="sm"
                onPress={() => handleDelete(ingredient.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default IngredientsTable;
