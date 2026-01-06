'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const problems = [
  "病院で検査しても『異常なし』と言われた",
  "電気治療とマッサージだけでは良くならない",
  "この痛みとは一生付き合うしかないと思っている",
];

export const Problems = () => {
  return (
    <section id="problems" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            こんなお悩みで<br className="md:hidden" />諦めていませんか？
          </h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-orange-50 p-6 rounded-2xl border border-orange-100 shadow-sm"
              >
                <CheckCircle2 className="text-brand-accent shrink-0" size={28} />
                <p className="text-lg md:text-xl font-bold text-gray-800">
                  {problem}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xl md:text-2xl font-bold text-brand-primary italic">
              「もうダメだ」と諦める前に、当院へご相談ください。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

