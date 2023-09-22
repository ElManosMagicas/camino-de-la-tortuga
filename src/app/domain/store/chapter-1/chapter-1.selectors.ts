import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Chapter1State } from './chapter-1.state';

export const getChapter1FeatureState = createFeatureSelector('chapter-1');
