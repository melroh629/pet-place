# Pet Places

반려견과 함께 방문할 수 있는 공간을 카드 형태로 큐레이션하는 모바일 퍼스트 Next.js 프로젝트입니다. Supabase를 통해 데이터를 관리하고 필터링, 검색, 상세 조회 경험을 제공합니다.

## 프로젝트 목표

- 1차: 직접 방문해 검증한 장소만 수기로 등록해 카드로 보기 좋게 노출
- 2차: Google Form을 통해 친구/사용자 추천 장소를 수집하고 검증 플로우 구축
- 3차: 이미지, 지도, 태그 등의 확장 기능으로 탐색 경험 향상

## 주요 기능

- **장소 목록 조회**: 반려견 동반 가능 장소를 카드 형태로 표시
- **필터링**: 지역별, 카테고리별(식당, 카페, 공원, 숙소, 운동장 등) 필터링
- **상세 정보**: 주소, 전화번호, 주차 정보, 반려견 출입 규정 등
- **외부 링크**: 네이버 플레이스, 인스타그램 연동
- **반응형 디자인**: 모바일 퍼스트 UI/UX

## 기술 스택

### Core
- **Next.js** 15.5.5 (Turbopack)
- **React** 19.1.0
- **TypeScript** 5

### Styling
- **Styled Components** 6.1.19
- **Ant Design** 5.22.3
- **Lucide React** (아이콘)

### Data & Backend
- **Supabase** 2.76.1
- **Zod** 4.1.12 (스키마 검증)
- **PapaParse** 5.5.3 (CSV 파싱)

### Analytics & Tools
- **Vercel Analytics** 1.5.0
- **ESLint** (코드 품질)

## 시작하기

### 필수 요구사항
- Node.js 20 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (Turbopack)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 실행
npm run lint
```

개발 서버는 `http://localhost:3000`에서 실행됩니다.

### 환경 변수

`.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 디렉토리 구조

```
src/
├── app/                      # Next.js 13+ App Router
│   ├── api/                 # API 라우트
│   │   └── places/         # 장소 관련 API
│   ├── places/             # 장소 관련 페이지
│   │   └── [slug]/         # 장소 상세 페이지 (동적 라우팅)
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 홈 페이지
│
├── components/              # React 컴포넌트
│   ├── filters/            # 필터 관련 컴포넌트
│   ├── hero/               # 히어로 섹션
│   ├── icons/              # 커스텀 아이콘
│   ├── layout/             # 레이아웃 컴포넌트
│   ├── places/             # 장소 관련 컴포넌트 (카드, 리스트, 드로어 등)
│   ├── providers/          # Context Provider
│   └── ui/                 # 공통 UI 컴포넌트
│
├── hooks/                   # Custom React Hooks
├── lib/                     # 유틸리티 및 헬퍼 함수
├── styles/                  # 글로벌 스타일 및 테마
└── types/                   # TypeScript 타입 정의
```

## 데이터 모델

주요 장소(Place) 데이터 구조:
- 기본 정보: 이름, 지역, 카테고리, 주소, 전화번호
- 반려견 정보: 출입 규정, 무게 제한, 견종 제한, 필수 용품
- 편의 정보: 주차 가능 여부
- 외부 링크: 네이버 플레이스, 인스타그램
- 메타 정보: 검증 일자, 출처, 메모

## 개발 가이드

### 컴포넌트 구조
- Client Components: `"use client"` 디렉티브 사용
- Styled Components를 통한 컴포넌트 스타일링
- 타입 안정성을 위한 TypeScript 적극 활용

### 상태 관리
- React Hooks (useState, useMemo, useEffect)
- Custom Hooks (usePlaces)

### 코드 스타일
- ESLint 규칙 준수
- 타입 안정성 유지
- 컴포넌트 분리 및 재사용성 고려
