import Link from 'next/link';

// 임시 상품 데이터 목록
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: '수공예 도자기 머그컵',
    seller: '도예공방 민들레',
    price: 25000,
    category: '수공예품',
    imageUrl: '/images/placeholder-1.jpg',
  },
  {
    id: 2,
    name: '천연 비누 선물 세트',
    seller: '클린라이프',
    price: 18000,
    category: '생활용품',
    imageUrl: '/images/placeholder-2.jpg',
  },
  {
    id: 3,
    name: '수제 마카롱 박스 (12구)',
    seller: '달콤베이커리',
    price: 22000,
    category: '식품',
    imageUrl: '/images/placeholder-3.jpg',
  },
  {
    id: 4,
    name: '핸드메이드 가죽 키링',
    seller: '가죽공방 바늘',
    price: 15000,
    category: '수공예품',
    imageUrl: '/images/placeholder-4.jpg',
  },
  {
    id: 5,
    name: '아로마 캔들 (오리지널)',
    seller: '향기나무',
    price: 16000,
    category: '생활용품',
    imageUrl: '/images/placeholder-5.jpg',
  },
  {
    id: 6,
    name: '천연 염색 손수건 세트',
    seller: '자연빛깔',
    price: 12000,
    category: '패션/의류',
    imageUrl: '/images/placeholder-6.jpg',
  },
  {
    id: 7,
    name: '수제 그래놀라 (600g)',
    seller: '건강한 아침',
    price: 13500,
    category: '식품',
    imageUrl: '/images/placeholder-7.jpg',
  },
  {
    id: 8,
    name: '천연 허브 비누',
    seller: '허브가든',
    price: 8000,
    category: '뷰티/화장품',
    imageUrl: '/images/placeholder-8.jpg',
  },
];

// 카테고리 목록
const CATEGORIES = [
  { id: 'all', name: '전체' },
  { id: '수공예품', name: '수공예품' },
  { id: '식품', name: '식품' },
  { id: '패션/의류', name: '패션/의류' },
  { id: '뷰티/화장품', name: '뷰티/화장품' },
  { id: '생활용품', name: '생활용품' },
  { id: '기타', name: '기타' },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">상품 목록</h1>
      
      {/* 카테고리 필터 */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category.id === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* 정렬 옵션 */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">총 {DUMMY_PRODUCTS.length}개의 상품</p>
        <div className="flex items-center">
          <label htmlFor="sort" className="text-sm text-gray-600 mr-2">정렬:</label>
          <select
            id="sort"
            className="bg-white border border-gray-300 rounded-md text-sm px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="latest">최신순</option>
            <option value="price_asc">가격 낮은순</option>
            <option value="price_desc">가격 높은순</option>
            <option value="popularity">인기순</option>
          </select>
        </div>
      </div>
      
      {/* 상품 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DUMMY_PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <Link href={`/products/${product.id}`}>
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">{product.name} 이미지</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.seller}</p>
                <p className="font-bold text-primary">₩{product.price.toLocaleString()}</p>
                <div className="mt-3">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {/* 페이지네이션 */}
      <div className="mt-10 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <button className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            이전
          </button>
          <button className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700">
            1
          </button>
          <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            다음
          </button>
        </nav>
      </div>
    </div>
  );
} 