'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { siteConfig } from '@/config/site.config';
import { Button } from '@heroui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { layoutConfig } from '@/config/layout.config';
import RegistrationModal from '@/components/UI/modals/registration.modal';
import LoginModal from '@/components/UI/modals/login.modal';
import { signOutUser } from '@/actions/sign-out';

export const Logo = () => (
  <Image
    src="/logo_italy_kitchen.png"
    alt={siteConfig.title}
    width={26}
    height={26}
    sizes="(max-width: 768px) 20px, 26px"
    priority
  />
);

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignOut = async () => {
    await signOutUser();
    window.location.reload();
  };

  return (
    <header className="w-full border-b" style={{ height: '80px' }}>
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo */}
        <NextLink href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-bold text-lg">{siteConfig.title}</span>
        </NextLink>

        {/* Nav */}
        <nav className="flex gap-6">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NextLink
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-blue-500 ${
                  isActive ? 'text-blue-500 font-semibold' : 'text-gray-500'
                }`}
              >
                {item.label}
              </NextLink>
            );
          })}
        </nav>

        {/* Auth */}
        <div className="flex items-center gap-3">
          {session ? (
            <>
              <span className="text-sm text-gray-500">
                Hello, {session.user?.email}
              </span>
              <Button
                size="sm"
                color="secondary"
                variant="flat"
                onPress={handleSignOut}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                size="sm"
                variant="flat"
                color="secondary"
                onPress={() => setIsLoginOpen(true)}
              >
                Login
              </Button>
              <Button
                size="sm"
                color="primary"
                variant="flat"
                onPress={() => setIsRegistrationOpen(true)}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
}
