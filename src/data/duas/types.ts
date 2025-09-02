export type ContentItem = {
  id: string;
  collectionId: string;
  index: number; // 0-based
  type: 'dua';
  arabic: string;
  transliteration?: string;
  translation?: string;
  meta?: Record<string, unknown>;
};

export type DuaCollection = {
  id: string;           // e.g., 'dua-qunut'
  title: string;        // display name
  items: ContentItem[];
  note?: string;
};