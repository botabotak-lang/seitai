import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-orange-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-brand-primary">
            藤枝AI整体院
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="#problems" className="hover:text-brand-primary transition-colors">お悩み</Link>
            <Link href="#features" className="hover:text-brand-primary transition-colors">選ばれる理由</Link>
            <Link href="#menu" className="hover:text-brand-primary transition-colors">料金</Link>
            <Link href="#access" className="hover:text-brand-primary transition-colors">アクセス</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

