'use client';

import { useAuthStore } from '@/store/auth.store';
import { useIngredientStore } from '@/store/ingredient.store';
import { useRecipeStore } from '@/store/recipe.store';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

interface IProps {
  children: React.ReactNode;
}

const AppLoader = ({ children }: IProps) => {
  const { data: session, status } = useSession();
  const { isAuth, setAuthState } = useAuthStore();

  useEffect(() => {
    setAuthState(status, session);
  }, [status, session]);

  useEffect(() => {
    if (isAuth) {
      useIngredientStore.getState().loadIngredients();
      useRecipeStore.getState().loadRecipes();
    }
  }, [isAuth]);

  return <>{children}</>;
};

export default AppLoader;
