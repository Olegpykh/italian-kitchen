'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { siteConfig } from '@/config/site.config';
import { Button } from '@heroui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import RegistrationModal from '@/components/UI/modals/registration.modal';
import LoginModal from '@/components/UI/modals/login.modal';
import { signOutUser } from '@/actions/sign-out';
import { useAuthStore } from '@/store/auth.store';

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
  const { data: session, status } = useSession();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    useAuthStore.getState().setAuthState(status, session);
  }, [status, session]);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  const handleSignOut = async () => {
    await signOutUser();
    window.location.reload();
  };

  return (
    <header className="w-full border-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center gap-3">
        <NextLink href="/" className="flex items-center gap-2 shrink-0">
          <Logo />
          <span className="font-bold text-base sm:text-lg whitespace-nowrap">
            {siteConfig.title}
          </span>
        </NextLink>

        <nav className="hidden md:flex gap-6">
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

        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <>
              <span className="text-sm text-gray-500 truncate max-w-[220px]">
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

        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="md:hidden p-2 -mr-2 text-gray-600"
        >
          {isMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
          <nav className="flex flex-col px-4 py-3">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className={`py-2.5 text-sm ${
                    isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </NextLink>
              );
            })}
          </nav>

          <div className="px-4 py-3 border-t flex flex-col gap-2">
            {session ? (
              <>
                <span className="text-sm text-gray-500 break-all">
                  Hello, {session.user?.email}
                </span>
                <Button
                  size="sm"
                  color="secondary"
                  variant="flat"
                  className="w-full"
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
                  className="w-full"
                  onPress={() => setIsLoginOpen(true)}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  className="w-full"
                  onPress={() => setIsRegistrationOpen(true)}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
}
