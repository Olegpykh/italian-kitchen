'use client';

import Link from 'next/link';
import { Button } from '@heroui/react';

const AddRecipeButton = () => {
  return (
    <Link href="/recipes/new" className="mb-12">
      <Button color="primary" size="lg">
        + Add Recipe
      </Button>
    </Link>
  );
};

export default AddRecipeButton;
