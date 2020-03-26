import {
  combineReducers,
} from 'redux';

import {
  RootState,
} from './types';
import layout from './layout/reducer';
import user from './user/reducer';
import isFetching from './isFetching/reducer';
import post from './post/reducer';
import locale from './locale/reducer';

const rootReducer = combineReducers<RootState>({
  layout,
  user,
  isFetching,
  post,
  locale,
});

export default rootReducer;
