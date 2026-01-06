import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-brand-primary mb-6">藤枝AI整体院</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              静岡県藤枝市の慢性腰痛・肩こり特化型整体院。AI姿勢分析とオーダーメイド手技で、あなたの根本改善をサポートします。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">リンク</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#problems" className="hover:text-brand-primary transition-colors">お悩み</Link></li>
              <li><Link href="#features" className="hover:text-brand-primary transition-colors">選ばれる理由</Link></li>
              <li><Link href="#menu" className="hover:text-brand-primary transition-colors">料金案内</Link></li>
              <li><Link href="#staff" className="hover:text-brand-primary transition-colors">院長紹介</Link></li>
              <li><Link href="#access" className="hover:text-brand-primary transition-colors">アクセス</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">店舗情報</h4>
            <p className="text-gray-400 mb-4">
              〒426-0034 静岡県藤枝市駅前X-X-X
            </p>
            <p className="text-gray-400 mb-4">
              TEL: 054-XXX-XXXX
            </p>
            <p className="text-gray-400">
              営業時間: 9:00 〜 20:00<br />
              定休日: 日曜・祝日
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 藤枝AI整体院 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

