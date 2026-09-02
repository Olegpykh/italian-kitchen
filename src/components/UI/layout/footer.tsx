import { siteConfig } from '@/config/site.config';

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-16 border-t border-orange-100/60 bg-gradient-to-r from-orange-50/50 via-white to-amber-50/50">
      <p className="text-sm text-stone-400 tracking-wide">
        {siteConfig.description}
      </p>
    </footer>
  );
}
