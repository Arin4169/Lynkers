import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '소상공인 무인매장',
  description: '소상공인 상품을 오프라인 무대에서 판매하기 위한 무인매장 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-primary">소상공인 무인매장</h1>
                </div>
                <nav className="ml-6 flex space-x-8">
                  <a href="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-primary text-sm font-medium">
                    홈
                  </a>
                  <a href="/products" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    상품목록
                  </a>
                  <a href="/upload" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    상품등록
                  </a>
                  <a href="/mypage" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    마이페이지
                  </a>
                </nav>
              </div>
              <div className="flex items-center">
                <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium">
                  로그인
                </button>
                <button className="ml-4 bg-white hover:bg-gray-50 text-primary px-4 py-2 rounded-md text-sm font-medium border border-primary">
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">소상공인 무인매장</h3>
                <p className="text-gray-300">소상공인 상품을 오프라인 무대에서<br />판매하기 위한 무인매장 플랫폼</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">메뉴</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-white">홈</a></li>
                  <li><a href="/products" className="text-gray-300 hover:text-white">상품목록</a></li>
                  <li><a href="/upload" className="text-gray-300 hover:text-white">상품등록</a></li>
                  <li><a href="/mypage" className="text-gray-300 hover:text-white">마이페이지</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">고객지원</h3>
                <ul className="space-y-2">
                  <li><a href="/faq" className="text-gray-300 hover:text-white">자주 묻는 질문</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white">문의하기</a></li>
                  <li><a href="/terms" className="text-gray-300 hover:text-white">이용약관</a></li>
                  <li><a href="/privacy" className="text-gray-300 hover:text-white">개인정보처리방침</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© 2023 소상공인 무인매장. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 