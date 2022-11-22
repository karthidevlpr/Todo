
import { createSelector } from '@ngrx/store';
 
export interface FeatureState {
  count: number;
}
 
// export interface AppState {
//   feature: FeatureState;
// }
 
export const selectFeature = (state: FeatureState) => state;
 
export const selectFeatureCount = createSelector(
  selectFeature,
  (state) => state.count
);