'use client';

import Link from 'next/link';
import { Button } from '@heroui/react';

interface EditRecipeButtonProps {
  recipeId: string;
}

const EditRecipeButton = ({ recipeId }: EditRecipeButtonProps) => {
  return (
    <Link href={`/recipes/${recipeId}/edit`}>
      <Button color="primary" variant="flat" size="sm">
        Edit
      </Button>
    </Link>
  );
};

export default EditRecipeButton;
