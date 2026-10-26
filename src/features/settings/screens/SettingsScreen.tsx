import { EmptyStateScreen } from '@/ui/components/EmptyStateScreen';

export function SettingsScreen() {
  return (
    <EmptyStateScreen
      title="설정"
      description="알림 권한과 날짜 미정 기록의 기본 재알림 간격을 관리할 수 있어요."
    />
  );
}
