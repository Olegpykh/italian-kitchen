'use client';

import { Button } from '@heroui/react';
import NextLink from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] w-full px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/60 via-white to-amber-50/40" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-200/25 blur-[120px] rounded-full -z-10" />

      <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter bg-gradient-to-r from-orange-700 via-red-600 to-amber-600 bg-clip-text text-transparent mb-4">
        404
      </h1>

      <p className="text-xl md:text-2xl text-stone-500 mb-10">Page not found</p>

      <Button
        as={NextLink}
        href="/"
        color="warning"
        variant="shadow"
        size="lg"
        className="font-semibold px-8"
      >
        Back to Home
      </Button>
    </div>
  );
}
