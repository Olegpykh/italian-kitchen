'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/site.config';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from '@heroui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { layoutConfig } from '@/config/layout.config';
import RegistrationModal from '../modals/registration.modal';
import LoginModal from '../modals/login.modal';

export const Logo = () => {
  return (
    <Image
      src="/logo_italy_kitchen.png"
      alt={siteConfig.title}
      width={26}
      height={26}
      sizes="(max-width: 768px) 20px, 26px"
      priority
    />
  );
};

export default function Header() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const pathname = usePathname();

  const getNavItems = () => {
    return siteConfig.navItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <NavbarItem key={item.href}>
          <Link
            color="foreground"
            href={item.href}
            className={`px-3 py-1
              ${isActive ? 'text-blue-500' : 'text-foreground'}
              hover:text-blue-300 hover:border
              hover:border-blue-300 hover:rounded-md
              transition-colors duration-200`}
          >
            {item.label}
          </Link>
        </NavbarItem>
      );
    });
  };

  return (
    <Navbar
      className="dark bg-gray-600"
      style={{ height: layoutConfig.headerHeight }}
    >
      <NavbarBrand>
        <NextLink href="/" className="flex gap-2">
          <Logo />
          <p className="font-bold text-inherit">{siteConfig.title}</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" onPress={() => setIsLoginOpen(true)}>
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            variant="flat"
            onPress={() => setIsRegistrationOpen(true)}
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Navbar>
  );
}
