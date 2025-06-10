# 소상공인 무인매장 플랫폼

소상공인 상품을 오프라인 무대에서 판매하기 위한 무인매장 플랫폼입니다. 소상공인이 상품 사진과 설명 등을 쉽게 업로드하고 관리할 수 있는 웹 인터페이스를 제공합니다.

## 주요 기능

- 소상공인 회원가입 및 로그인
- 상품 등록 및 관리
- 상품 카테고리별 분류
- 상품 목록 및 상세 페이지
- 매출 통계 확인

## 기술 스택

- **Frontend**: Next.js, TypeScript, Tailwind CSS, React
- **Styling**: Tailwind CSS
- **Version Control**: Git

## 설치 및 실행 방법

### 필수 요구 사항

- Node.js 16.x 이상
- npm 또는 yarn

### 설치 과정

1. 저장소 클론:
   ```bash
   git clone https://github.com/yourusername/unmanned-store.git
   cd unmanned-store
   ```

2. 의존성 설치:
   ```bash
   npm install
   # 또는
   yarn install
   ```

3. 개발 서버 실행:
   ```bash
   npm run dev
   # 또는
   yarn dev
   ```

4. 브라우저에서 `http://localhost:3000`으로 접속하여 애플리케이션 확인

## 프로젝트 구조

```
unmanned-store/
├── public/                 # 정적 파일 (이미지, 아이콘 등)
├── src/
│   ├── app/                # 페이지 컴포넌트
│   │   ├── layout.tsx      # 공통 레이아웃
│   │   ├── page.tsx        # 홈페이지
│   │   ├── products/       # 상품 목록 페이지
│   │   └── upload/         # 상품 업로드 페이지
│   ├── components/         # 재사용 가능한 컴포넌트
│   └── styles/             # 글로벌 스타일
├── .gitignore              # Git 무시 파일 목록
├── next.config.js          # Next.js 설정
├── package.json            # 프로젝트 의존성 및 스크립트
├── postcss.config.js       # PostCSS 설정
├── tailwind.config.js      # Tailwind CSS 설정
└── tsconfig.json           # TypeScript 설정
```

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`).
3. 변경 사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`).
5. Pull Request를 생성합니다.

## 라이센스

이 프로젝트는 MIT 라이센스로 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 연락처

프로젝트 관리자 - [@yourusername](https://github.com/yourusername) - email@example.com

프로젝트 링크: [https://github.com/yourusername/unmanned-store](https://github.com/yourusername/unmanned-store) 