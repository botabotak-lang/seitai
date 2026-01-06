'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-16 overflow-hidden bg-white">
      {/* 
        画像全体を表示するため、absoluteではなく通常の配置に変更。
        w-fullで横幅いっぱい、h-autoで縦横比を維持します。
      */}
      <div className="w-full relative">
        <img
          src="/img/FV.jpg"
          alt="藤枝AI整体院 ファーストビュー"
          className="w-full h-auto block"
        />
        
        {/* 
          デスクトップ用の予約ボタンを画像の上に重ねる場合のみ、
          以下のコンテナを使用します。
        */}
        <div className="absolute inset-0 flex items-center justify-start pointer-events-none">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="hidden md:block pointer-events-auto">
                {/* 必要に応じてここにボタンなどを配置 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

