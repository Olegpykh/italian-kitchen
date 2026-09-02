import RecipeForm from '@/forms/recipe.form';

export default function NewRecipePage() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[80vh] py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/60 via-white to-amber-50/40" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-200/20 blur-[110px] rounded-full -z-10" />

      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-orange-700 via-red-600 to-amber-600 bg-clip-text text-transparent">
        Create New Recipe
      </h1>

      <div className="w-full max-w-2xl rounded-3xl bg-white/70 backdrop-blur-sm border border-orange-100/80 shadow-sm p-6 md:p-8">
        <RecipeForm />
      </div>
    </div>
  );
}
