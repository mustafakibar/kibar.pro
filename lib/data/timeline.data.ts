import type { TimelineEntry } from '@/components/timeline/Timeline';

export const EDUCATION_TIMELINE: readonly TimelineEntry[] = [
  {
    period: 'Present',
    title: 'Computer Programming',
    detail: 'Istanbul University',
  },
  {
    period: '2018–2020',
    title: 'Public Administration',
    detail: 'Eskisehir University',
  },
  { period: '2011–2013', title: 'Rustu Unsal P.M.Y.O', detail: 'Buca / Izmir' },
  {
    period: '2005–2009',
    title: 'T.O.K.I Anatolian High School',
    detail: 'Eryaman / Ankara',
  },
  {
    period: '1998–2005',
    title: 'Meliksah Primary School',
    detail: 'Sincan / Ankara',
  },
  { period: '1991', title: 'Born', detail: 'Yenimahalle / Ankara' },
] as const;
