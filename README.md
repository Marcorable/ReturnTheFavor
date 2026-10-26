# ReturnTheFavor

주고받은 선물과 경조사비를 사람별로 기록하고, 보답할 때를 놓치지 않게 돕는 iOS·Android 앱입니다.

## 기술 구성

- React Native + Expo SDK 58 + TypeScript
- Expo Router
- `expo-sqlite` (MVP 로컬 데이터 원본)
- `expo-notifications` (로컬 알림)
- Jest + `jest-expo`

SQLite 접근은 우선 raw `expo-sqlite`를 사용합니다. 세부 판단은 [ADR 0001](docs/adr/0001-sqlite-access.md)에 기록했습니다.

## 시작하기

필요 환경:

- Node.js 22 LTS
- npm 10 이상
- iOS: macOS, Xcode, iOS Simulator
- Android: Android Studio, Android Emulator

```bash
npm install
npm run start
```

Expo CLI가 실행되면 `i`로 iOS Simulator, `a`로 Android Emulator를 열 수 있습니다. 각 플랫폼을 바로 실행하려면 다음 명령을 사용합니다.

```bash
npm run ios
npm run android
```

## 검증

```bash
npm run typecheck
npm run lint
npm test
npm run format:check
```

## 폴더 경계

```text
src/
├── app/                    # Expo Router 라우트
├── features/               # 화면과 기능 단위 UI
├── domain/                 # 플랫폼·저장소와 무관한 규칙과 모델
├── data/repositories/      # 로컬·원격 저장소 경계
├── platform/notifications/ # Expo 알림 어댑터 경계
└── ui/                     # 공유 UI와 테마
```

MVP에는 서버·로그인·환경 변수가 필요하지 않습니다. 향후 공개 클라이언트 설정이 필요하면 `.env.example`에 `EXPO_PUBLIC_*` 키를 먼저 문서화합니다. 비밀 값은 앱 번들에 포함하지 않습니다.
