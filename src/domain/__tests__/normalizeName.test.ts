import { normalizeName } from '@/domain/normalizeName';

describe('normalizeName', () => {
  it('앞뒤 공백과 연속 공백을 정리한다', () => {
    expect(normalizeName('  김   마코  ')).toBe('김 마코');
  });
});
