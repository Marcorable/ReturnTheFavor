import { EmptyStateScreen } from '@/ui/components/EmptyStateScreen';

export function ReturnListScreen() {
  return (
    <EmptyStateScreen
      title="보답할 일"
      description="기한이 지났거나 다가오는 보답을 여기에서 확인할 수 있어요."
    />
  );
}
