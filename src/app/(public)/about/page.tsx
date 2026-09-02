export default function About() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[80vh] py-24 px-6 overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/60 via-white to-amber-50/40" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-200/20 blur-[120px] rounded-full -z-10" />

      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-5 bg-gradient-to-r from-orange-700 via-red-600 to-amber-600 bg-clip-text text-transparent">
        Italian Kitchen
      </h1>

      <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mb-3 font-medium leading-relaxed">
        A place where we collect and share the best Italian recipes.
      </p>

      <p className="text-base md:text-lg text-stone-400 max-w-xl mb-16 leading-relaxed">
        Our mission is to bring authentic Italian flavors to your home kitchen —
        simple, beautiful, and delicious.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Card 1 */}
        <div className="group relative flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-orange-100/80 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 text-4xl shadow-inner group-hover:scale-110 transition-transform duration-300">
            🍝
          </div>
          <h3 className="font-bold text-lg text-stone-800 tracking-tight">
            Authentic Recipes
          </h3>
          <p className="text-stone-500 text-sm text-center leading-relaxed">
            Traditional Italian dishes passed down through generations.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group relative flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-orange-100/80 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 text-4xl shadow-inner group-hover:scale-110 transition-transform duration-300">
            🧄
          </div>
          <h3 className="font-bold text-lg text-stone-800 tracking-tight">
            Fresh Ingredients
          </h3>
          <p className="text-stone-500 text-sm text-center leading-relaxed">
            Every recipe uses only the finest and freshest ingredients.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group relative flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-orange-100/80 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 text-4xl shadow-inner group-hover:scale-110 transition-transform duration-300">
            👨‍🍳
          </div>
          <h3 className="font-bold text-lg text-stone-800 tracking-tight">
            Easy to Follow
          </h3>
          <p className="text-stone-500 text-sm text-center leading-relaxed">
            Step-by-step instructions for cooks of all skill levels.
          </p>
        </div>
      </div>
    </div>
  );
}
