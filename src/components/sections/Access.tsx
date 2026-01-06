'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Car } from 'lucide-react';

export const Access = () => {
  return (
    <section id="access" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">アクセス</h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">住所</h3>
                  <p className="text-gray-600">
                    〒426-0034<br />
                    静岡県藤枝市駅前X-X-X<br />
                    （藤枝駅 徒歩5分）
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-brand-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">営業時間</h3>
                  <p className="text-gray-600">
                    9:00 〜 20:00<br />
                    （最終受付 19:00）<br />
                    定休日：日曜・祝日
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-brand-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">電話番号</h3>
                  <p className="text-gray-600">054-XXX-XXXX</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-brand-primary shrink-0">
                  <Car size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">駐車場</h3>
                  <p className="text-gray-600">
                    院横に3台完備<br />
                    お車でもお越しいただけます
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-accent/5 p-8 rounded-3xl border border-brand-accent/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-brand-accent rounded-full" />
                お車でお越しの方へ
              </h3>
              <p className="text-gray-700 leading-relaxed">
                藤枝駅北口より車で2分。旧国道沿いのオレンジ色の看板が目印です。駐車場は店舗のすぐ横にございます。
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              {/* Google Maps Placeholder */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-400 font-bold">Google Maps Placeholder</p>
                  <p className="text-gray-400 text-sm mt-2">実際の運用時はここにGoogleマップを埋め込みます</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

