import { EmptyStateScreen } from '@/ui/components/EmptyStateScreen';

export function PeopleListScreen() {
  return (
    <EmptyStateScreen
      title="사람"
      description="주고받은 내역을 남길 사람을 추가하고 찾아보세요."
    />
  );
}
