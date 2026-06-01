'use client';
import { Button } from '@heroui/react';
import NextLink from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-gray-500">Page not found</p>
      <Button as={NextLink} href="/" color="primary" variant="flat">
        Back to Home
      </Button>
    </div>
  );
}
