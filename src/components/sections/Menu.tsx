'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-brand-base">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">料金案内</h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            当院は完全自費診療です。健康保険は使えません。<br />
            その分、一人ひとりに寄り添い、質の高い施術を提供することをお約束します。
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-accent relative"
          >
            <div className="bg-brand-accent text-white py-3 text-center">
              <span className="font-bold tracking-widest">1日3名様限定 特別オファー</span>
            </div>

            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold mb-8">根本改善オーダーメイド整体</h3>
              
              <div className="flex flex-col items-center justify-center mb-8">
                <div className="text-gray-400 line-through text-xl mb-2">通常料金 8,800円（税込）</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-600 font-bold">初回限定</span>
                  <span className="text-5xl md:text-7xl font-black text-brand-accent">1,980</span>
                  <span className="text-2xl font-bold text-brand-accent">円</span>
                  <span className="text-gray-600 font-bold ml-1">（税込）</span>
                </div>
              </div>

              <ul className="text-left space-y-4 max-w-md mx-auto mb-10 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0">✓</div>
                  <span>AI姿勢分析（通常3,300円）込み</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0">✓</div>
                  <span>徹底したカウンセリング・検査</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0">✓</div>
                  <span>オーダーメイド手技施術</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0">✓</div>
                  <span>セルフケア・再発防止指導</span>
                </li>
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-brand-accent text-white py-6 rounded-2xl font-bold text-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                このオファーで予約する
              </motion.button>
              
              <p className="mt-6 text-sm text-gray-500">
                ※当院は国家資格（柔道整復師等）による保険診療は行っておりません。<br />
                ※お支払いは現金のほか、各種クレジットカードがご利用いただけます。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

