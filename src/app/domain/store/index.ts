import { AppState } from './app/app.state';
import { AppReducers } from './app/app.reducers';
import { AppEffects } from './app/app.effects';
import { Chapter1State } from './chapter-1/chapter-1.state';
import { Chapter2State } from './chapter-2/chapter-2.state';
import { Chapter3State } from './chapter-3/chapter-3.state';
import { Chapter4State } from './chapter-4/chapter-4.state';
import { Chapter5State } from './chapter-5/chapter-5.state';
import { MapState } from './map/map.state';
import { StartState } from './start/start.state';
import { Chapter1Reducers } from './chapter-1/chapter-1.reducers';
import { Chapter2Reducers } from './chapter-2/chapter-2.reducers';
import { Chapter3Reducers } from './chapter-3/chapter-3.reducers';
import { Chapter4Reducers } from './chapter-4/chapter-4.reducers';
import { Chapter5Reducers } from './chapter-5/chapter-5.reducers';
import { MapReducers } from './map/map.reducers';
import { StartReducers } from './start/start.reducers';
import { Chapter2Effects } from './chapter-2/chapter-2.effects';
import { Chapter1Effects } from './chapter-1/chapter-1.effects';
import { Chapter3Effects } from './chapter-3/chapter-3.effects';
import { Chapter4Effects } from './chapter-4/chapter-4.effects';
import { Chapter5Effects } from './chapter-5/chapter-5.effects';
import { MapEffects } from './map/map.effects';
import { StartEffects } from './start/start.effects';

export interface RootState {
  app: AppState;
  chapter1: Chapter1State;
  chapter2: Chapter2State;
  chapter3: Chapter3State;
  chapter4: Chapter4State;
  chapter5: Chapter5State;
  map: MapState;
  start: StartState;
}

export const appReducers = {
  app: AppReducers,
  chapter1: Chapter1Reducers,
  chapter2: Chapter2Reducers,
  chapter3: Chapter3Reducers,
  chapter4: Chapter4Reducers,
  chapter5: Chapter5Reducers,
  map: MapReducers,
  start: StartReducers,
};

export const appEffects = [
  AppEffects,
  Chapter1Effects,
  Chapter2Effects,
  Chapter3Effects,
  Chapter4Effects,
  Chapter5Effects,
  MapEffects,
  StartEffects,
];
