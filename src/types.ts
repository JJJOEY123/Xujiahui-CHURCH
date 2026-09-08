export type Language = 'zh' | 'en';

export interface ArchitecturalHighlight {
  id: string;
  titleZh: string;
  titleEn: string;
  subtitleZh: string;
  subtitleEn: string;
  categoryZh: string;
  categoryEn: string;
  year: string;
  dimension: string;
  descriptionZh: string;
  descriptionEn: string;
  image: string;
  detailsZh: string[];
  detailsEn: string[];
  audioTrackId?: string;
}

export interface TourStation {
  id: string;
  titleZh: string;
  titleEn: string;
  duration: string;
  viewpoint: 'facade' | 'nave' | 'altar' | 'rose_window';
  descriptionZh: string;
  descriptionEn: string;
  hotspots: {
    x: number; // percentage
    y: number; // percentage
    labelZh: string;
    labelEn: string;
    infoZh: string;
    infoEn: string;
  }[];
}

export interface MassScheduleItem {
  time: string;
  nameZh: string;
  nameEn: string;
  languageZh: string;
  languageEn: string;
  locationZh: string;
  locationEn: string;
  noteZh?: string;
  noteEn?: string;
  highlight?: boolean;
}
