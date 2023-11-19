import { ILastChapterFinished } from '@app/core/models/finished-chapter.model';

export interface AppState {
  turtleName: string | null;
  modalShow: boolean;
  chapterOneFinished: boolean;
  chapterTwoFinished: boolean;
  chapterThreeFinished: boolean;
  chapterFourFinished: boolean;
  chapterFiveFinished: boolean;
  lastChapterFinished: ILastChapterFinished;
  isSubtitles: boolean;
  isSound: boolean;
  isLoadingOrientation: boolean;
  isPortrait: boolean;
  isLandscape: boolean;
}
