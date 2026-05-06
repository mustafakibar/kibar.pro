const DAY_MS = 86_400_000;

const buckets = (days: number): readonly [string, string] => {
  if (days < 1) return ['today', 'today'];
  if (days < 7) return [`${days}d`, `${days}d ago`];
  if (days < 30) {
    const w = Math.floor(days / 7);
    return [`${w}w`, `${w}w ago`];
  }
  if (days < 365) {
    const m = Math.floor(days / 30);
    return [`${m}mo`, `${m}mo ago`];
  }
  const y = Math.floor(days / 365);
  return [`${y}y`, `${y}y ago`];
};

const daysSince = (iso: string): number =>
  Math.floor((Date.now() - new Date(iso).getTime()) / DAY_MS);

const formatRelativeShort = (iso?: string | null): string => {
  if (!iso) return '';
  return buckets(daysSince(iso))[0];
};

const formatRelativeLong = (iso?: string | null): string => {
  if (!iso) return '';
  return buckets(daysSince(iso))[1];
};

export { formatRelativeLong, formatRelativeShort };
