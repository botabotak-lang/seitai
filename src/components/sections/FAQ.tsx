'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "保険は使えますか？",
    answer: "当院は完全自費診療のため、健康保険は使えません。その分、保険診療の枠にとらわれない時間をかけた丁寧なカウンセリングと、最新のAI分析、高度なオーダーメイド手技を提供しております。"
  },
  {
    question: "施術は痛いですか？",
    answer: "当院の施術は「バキバキ」しないソフトな手技が中心です。お客様の状態に合わせて強さを調整しますので、リラックスして受けていただけます。"
  },
  {
    question: "何回くらいで良くなりますか？",
    answer: "症状や体の状態によりますが、1回で変化を実感される方も多いです。根本的な改善と再発防止のためには、初回から数回は間隔を詰めて通われることをおすすめしています。"
  },
  {
    question: "着替えは必要ですか？",
    answer: "動きやすい服装であればそのままで大丈夫です。スカートやタイトな服装の方には、お着替え（無料）もご用意しております。"
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-brand-base">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">よくある質問</h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-100">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-orange-50/50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-800">
                  <span className="text-brand-primary mr-4 text-xl">Q.</span>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-brand-primary shrink-0" />
                ) : (
                  <Plus className="text-brand-primary shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 border-t border-orange-50 text-gray-600 leading-relaxed">
                      <span className="text-brand-accent font-bold mr-4 text-xl">A.</span>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

