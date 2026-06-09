export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-20 px-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight mb-6">
        Italian Kitchen
      </h1>
      <p className="text-xl text-gray-500 max-w-2xl mb-4">
        A place where we collect and share the best Italian recipes.
      </p>
      <p className="text-lg text-gray-400 max-w-xl mb-12">
        Our mission is to bring authentic Italian flavors to your home kitchen —
        simple, beautiful, and delicious.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full mt-8">
        <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100">
          <span className="text-4xl">🍝</span>
          <h3 className="font-semibold text-lg">Authentic Recipes</h3>
          <p className="text-gray-400 text-sm text-center">
            Traditional Italian dishes passed down through generations.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100">
          <span className="text-4xl">🧄</span>
          <h3 className="font-semibold text-lg">Fresh Ingredients</h3>
          <p className="text-gray-400 text-sm text-center">
            Every recipe uses only the finest and freshest ingredients.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100">
          <span className="text-4xl">👨‍🍳</span>
          <h3 className="font-semibold text-lg">Easy to Follow</h3>
          <p className="text-gray-400 text-sm text-center">
            Step-by-step instructions for cooks of all skill levels.
          </p>
        </div>
      </div>
    </div>
  );
}
