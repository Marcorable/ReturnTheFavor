# ReturnTheFavor

사람별로 주고받은 선물·경조사비를 기록해 받은 마음을 잊지 않고 보답하게 돕는 iOS·Android 앱.

- React Native + Expo + TypeScript를 기본 기술로 사용한다.
- MVP 데이터는 `expo-sqlite`를 통해 기기에 저장하고 서버와 로그인은 두지 않는다.
- 향후 Supabase를 추가할 수 있도록 도메인과 로컬 저장소의 경계를 분리하고, 모든 주요 데이터는 클라이언트에서 생성한 UUID를 사용한다.
- `.claude/rules/marcorable-swift/`의 Swift 전용 규칙은 이 프로젝트에 적용하지 않는다.

## Code Review Rules

- 리뷰는 한국어로 쓴다
- 사람·주고받은 기록의 추가·수정·삭제에서 데이터가 유실되거나 관계가 끊기는 경로를 우선해서 본다
- SQLite 외래 키, 트랜잭션, 마이그레이션과 알림 예약 상태가 일관되게 유지되는지 본다
- iOS와 Android에서 동작이 달라지는 권한·알림·날짜 처리를 확인한다
- Expo API로 해결할 수 있는 기능에 불필요한 플랫폼별 네이티브 구현을 추가하지 않는다
