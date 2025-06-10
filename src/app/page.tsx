import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-background">
      {/* 히어로 섹션 */}
      <section className="relative">
        <div className="bg-gradient-to-r from-primary to-secondary h-96 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl font-bold mb-4">소상공인 무인매장 플랫폼</h1>
            <p className="text-xl mb-8">소상공인 상품을 오프라인 무대에서 판매해보세요!</p>
            <div className="flex space-x-4">
              <Link href="/products" className="bg-white text-primary hover:bg-gray-100 font-medium px-6 py-3 rounded-md">
                상품 둘러보기
              </Link>
              <Link href="/upload" className="bg-transparent hover:bg-white/10 border border-white font-medium px-6 py-3 rounded-md">
                상품 등록하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">서비스 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">간편한 상품 등록</h3>
              <p className="text-gray-600">쉽고 빠르게 상품 사진과 설명을 업로드하여 오프라인 매장에 상품을 전시할 수 있습니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-secondary/10 p-4 rounded-full mb-4">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">무인 결제 시스템</h3>
              <p className="text-gray-600">무인 매장에서도 안전하고 편리한 결제 시스템을 통해 쉽게 상품을 판매할 수 있습니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">매출 통계 제공</h3>
              <p className="text-gray-600">실시간 매출 현황과 통계를 제공하여 소상공인의 비즈니스 성장을 돕습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 인기 상품 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">인기 상품</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400">상품 이미지</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">수공예 제품 {item}</h3>
                  <p className="text-gray-500 text-sm mb-2">소상공인 브랜드</p>
                  <p className="font-bold text-primary">₩25,000</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md">
              모든 상품 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 판매자 등록 안내 섹션 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-10 text-white">
                <h2 className="text-3xl font-bold mb-4">소상공인으로 등록하고 상품을 판매하세요</h2>
                <p className="mb-6">무인매장 플랫폼을 통해 오프라인 매장에서 당신의 상품을 판매할 수 있습니다. 지금 바로 시작해보세요!</p>
                <Link href="/register" className="inline-block bg-white text-primary hover:bg-gray-100 font-medium px-6 py-3 rounded-md">
                  판매자 등록하기
                </Link>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto bg-black/10">
                <div className="h-full flex items-center justify-center">
                  <span className="text-white/70">판매자 등록 이미지</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 