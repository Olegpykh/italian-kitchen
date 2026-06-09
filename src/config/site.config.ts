export const siteConfig = {
  title: 'Italian Kitchen',
  description: 'Italian Kitchen. Recipes',
  navItems: [
    { href: '/', label: 'Recipes' },
    { href: '/ingredients', label: 'Ingredients' },
    { href: '/about', label: 'About' },
  ],
  pagesContent: {
    '/about': {
      title: 'About Italian Kitchen',
      content:
        '<p>Welcome to <strong>Italian Kitchen</strong> — a place where we collect and share the best Italian recipes.</p><p>Our mission is to bring authentic Italian flavors to your home kitchen.</p>',
    },
  },
};
