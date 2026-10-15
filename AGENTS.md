# ReturnTheFavor

사람별로 주고받은 선물·경조사비를 기록해 받은 은혜를 잊지 않고 갚게 돕는 iOS 앱. SwiftUI + SwiftData 로 기기에만 저장하고 서버는 없다.

코드 규칙은 `.claude/rules/marcorable-swift/` 에 있다.

## Code Review Rules

- 리뷰는 한국어로 쓴다
- SwiftData 모델(사람·주고받은 기록)의 추가·수정·삭제에서 기록이 유실되거나 사람과의 관계가 끊기는 경로를 우선해서 본다
- 새 화면이 Screen 패턴(`.claude/rules/marcorable-swift/architecture/screen-pattern.md`)을 따르는지 본다
