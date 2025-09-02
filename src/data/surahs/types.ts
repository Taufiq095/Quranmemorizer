// src/data/surahs/types.ts
import type { Collection, ContentItem } from '../shared';

export type Ayah = {
  number: number;
  arabic: string;
  transliteration?: string;
  translation?: string;
};

export type Surah = {
  number: number;           // 95, 96, ...
  name: string;             // short Arabic name
  englishName: string;
  ayaCount: number;
  revelationPlace: 'Meccan' | 'Madinan' | 'Meccan' | 'Madinan'; // pick the two you use
  ayat: Ayah[];
};

export type SurahCollection = Collection & {
  ayahCount: number;
  // items: ContentItem[] is inherited from Collection
};