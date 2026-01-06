'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const StickyFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white/80 to-transparent md:hidden">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-brand-accent text-white py-4 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2"
        onClick={() => {
          window.open('https://line.me', '_blank');
        }}
      >
        <MessageCircle size={24} />
        ご予約・お問い合わせ（初回割引あり）
      </motion.button>
    </div>
  );
};

