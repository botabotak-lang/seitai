'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Staff = () => {
  return (
    <section id="staff" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-primary rounded-3xl z-0" />
              <img
                src="/img/prof.webp"
                alt="藤枝AI整体院 院長"
                className="relative z-10 w-full rounded-3xl shadow-2xl h-auto block"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <span className="text-brand-primary font-bold mb-2 block">Greeting</span>
            <h2 className="text-3xl font-bold mb-1">院長紹介</h2>
            <p className="text-lg font-bold text-gray-500 mb-6">Owner / 整体師</p>
            
            <div className="bg-orange-50 p-6 rounded-2xl mb-8 border-l-4 border-brand-primary">
              <p className="text-xl font-bold text-gray-800 leading-relaxed">
                「薬や湿布に頼らない身体を作りましょう。<br />私が最後まで伴走します。」
              </p>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                はじめまして、藤枝AI整体院です。私はこれまで多くの「慢性痛」に悩む方々と向き合ってきました。
              </p>
              <p>
                多くの方が「どこに行っても同じ」「もう年だから仕方ない」と諦めています。しかし、痛みの原因は必ずどこかにあります。
              </p>
              <p>
                当院ではAIによる客観的な分析と、長年の経験に基づいた手技を組み合わせ、あなたの身体が本来持っている力を引き出します。
              </p>
              <p>
                一過性のリラクゼーションではなく、本当の「改善」を一緒に目指しましょう。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

