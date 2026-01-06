'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Hand, HeartPulse } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Scan className="text-white" size={32} />,
    title: "AI姿勢分析による「原因特定」",
    description: "最新のAI技術を用いて、痛みの本当の原因を科学的に分析。目に見えない身体の歪みを可視化します。",
    badge: "科学的アプローチ",
    image: "/img/ai.jpg?v=2"
  },
  {
    icon: <Hand className="text-white" size={32} />,
    title: "歴10年以上の院長による「オーダーメイド手技」",
    description: "マニュアル通りの施術ではなく、一人ひとりの状態に合わせた、あなただけの最適な施術を提供します。",
    badge: "職人技",
    image: "/img/ordermade.jpg"
  },
  {
    icon: <HeartPulse className="text-white" size={32} />,
    title: "再発を防ぐ「生活習慣・セルフケア指導」",
    description: "施術して終わりではありません。自宅でできる簡単なストレッチや、正しい姿勢の作り方を丁寧にアドバイスします。",
    badge: "根本改善",
    image: "/img/self.jpg"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-brand-base">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-bold tracking-wider uppercase mb-2 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            藤枝AI整体院が<br className="md:hidden" />選ばれる3つの理由
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            当院は完全自費診療だからこそ、制限のない質の高い施術を提供し、あなたの「根本改善」にコミットします。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group h-full"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {feature.icon}
              </div>
              
              <div className="bg-brand-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
                {feature.icon}
              </div>
              
              <span className="inline-block bg-orange-100 text-brand-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                {feature.badge}
              </span>
              
              <h3 className="text-xl font-bold mb-4 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* 画像実装の修正: 特徴1の場合のみテキスト直下に配置 */}
              {feature.image && (
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden mt-6 shadow-inner border border-gray-100">
                  <Image
                    src={feature.image}
                    alt="AI姿勢分析によるカウンセリングの様子"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


