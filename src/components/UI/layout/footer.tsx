import { siteConfig } from '@/config/site.config';

export default function Footer() {
  return (
    <footer className="flex justify-center items-center py-4 border-t">
      <p className="text-sm text-gray-500">{siteConfig.description}</p>
    </footer>
  );
}
