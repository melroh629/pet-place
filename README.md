# Pet Places

반려견과 함께 방문할 수 있는 공간을 카드 형태로 큐레이션하는 모바일 퍼스트 Next.js 프로젝트입니다. Google Sheet에 정리한 데이터를 가져와 필터링, 검색, 상세 조회 경험을 제공합니다.

## 1. 프로젝트 목표
- 1차: 직접 방문해 검증한 장소만 수기로 등록해 카드로 보기 좋게 노출
- 2차: Google Form을 통해 친구/사용자 추천 장소를 수집하고 검증 플로우 구축
- 3차: 이미지, 지도, 태그 등의 확장 기능으로 탐색 경험 향상

## 2. 서비스 구성
### 메인 리스트
- 모바일 우선 카드 레이아웃(썸네일 + 텍스트)
- 표시 정보: 장소명, 지역/카테고리 뱃지, 한 줄 메모, 네이버 링크
- 정렬: 최신 확인일 순, 필터: 지역·카테고리

### 상세 드로어
- 하단 슬라이드 업 형태
- 장소명, 지역/카테고리, 주소, 전화번호, 네이버/인스타 바로가기 노출
- 이미지가 없을 경우 카테고리 아이콘 이모지 표시

## 3. 데이터 구조 (Google Sheet)
| 컬럼 | 설명 |
| --- | --- |
| `id` | 고유 식별자(문자열) |
| `name` | 장소 이름 |
| `region` | 시·도 구분(서울, 경기, 부산 … 제주) |
| `category` | 공원, 카페, 식당, 식물원, 숙소, 기타 |
| `address` | 주소 |
| `address_type` | 도로명/지번 등 구분값(옵션) |
| `phone` | 연락처 |
| `naver_url` | 네이버 플레이스/지도 링크 |
| `insta` | 인스타그램 링크 |
| `verified_at` | 방문 및 확인일 |
| `source` | 직접 방문 / 전화 확인 / 추천 등 출처 |
| `memo` | 한 줄 코멘트 |
| `photo_url` | 이미지 링크(없으면 기본 썸네일) |
| `approved` | 검증 완료 여부(웹 노출 기준) |

데이터 입력 흐름은 Sheet → 검증 → CSV 공개 → 웹 반영 순서로 구성하며, `approved=true` 항목만 프런트에 노출합니다.

## 4. 기술 스택
| 영역 | 선택 |
| --- | --- |
| 프레임워크 | Next.js App Router (v15) |
| UI | styled-components |
| 데이터 로드 | Google Sheets CSV 공개 + 클라이언트 fetch |
| 검증 | zod |
| 유틸 | papaparse |
| 배포 | Vercel (권장) |
| 협업 품질 | ESLint + Prettier |

## 5. 환경 변수
시트를 웹에 공개(CSV)한 뒤 URL을 `.env.local`에 추가합니다.

```
NEXT_PUBLIC_PLACES_URL="https://docs.google.com/spreadsheets/.../export?format=csv&..."
NEXT_PUBLIC_SITE_URL="https://your-domain.example"   # 배포 시 절대경로용
```

- `NEXT_PUBLIC_` prefix 덕분에 클라이언트에서 직접 `fetch`합니다.
- 시트는 “보기 전용” 공유로 두면 수정은 막을 수 있습니다.
- 데이터 컬럼 이름은 README의 테이블과 동일하게 맞추는 것을 권장합니다.

## 6. 로드맵 아이디어
1. 지도 보기 및 위치 기반 정렬
2. Google Form → Sheet → Drive 연계 이미지 자동화
3. 장소별 태그(대형견 가능, 실내 좌석 등)
4. 즐겨찾기/공유 기능
5. 인스타그램용 카드 이미지 자동 생성

## 7. 개발 가이드
```bash
npm install
npm run dev
```

- 개발 서버: http://localhost:3000
- 주요 화면: `src/app/page.tsx`
- 데이터 파서: `src/lib/places.ts`
- 스타일: styled-components 기반, 전역 스타일은 `src/app/globals.css`

Google Sheet를 업데이트하면 공개된 CSV를 통해 자동으로 UI가 갱신됩니다. 필요 시 `fetch`의 캐시 전략을 조정해 성능을 다듬으세요.
