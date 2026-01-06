'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "40代 男性（藤枝市）",
    title: "1回で腰が軽くなった",
    content: "長年悩んでいた腰痛が、たった1回の施術で驚くほど軽くなりました。AIの分析で自分の姿勢の歪みがはっきり分かったのも良かったです。",
    rating: 5,
    image: "/img/customer1.jpg"
  },
  {
    name: "50代 女性（焼津市）",
    title: "姿勢が良くなったと言われます",
    content: "肩こりと猫背が気になって通い始めました。施術だけでなく、家でのストレッチ方法も教えてくれるので、自分でも意識が変わりました。",
    rating: 5,
    image: "/img/cuttoer2.jpg"
  },
  {
    name: "30代 女性（藤枝市）",
    title: "もっと早く来ればよかった",
    content: "色々な整骨院に行きましたが、ここは全然違います。痛みの原因をしっかり説明してくれるので、安心して任せられます。",
    rating: 5,
    image: "/img/custmor3.jpg"
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">お客様の声</h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-orange-50 p-8 rounded-3xl relative"
            >
              <div className="flex gap-1 mb-4 text-orange-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                「{review.title}」
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                {review.content}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={review.image} 
                    alt="user" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-800">{review.name}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

