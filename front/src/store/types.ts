import {
  ActionType,
} from 'typesafe-actions';

import {
  Epic as RxEpic,
} from 'redux-observable';

import {
  UserState,
} from './user/types';
import {
  LayoutState,
} from './layout/types';
import {
  IsFetchingState,
} from './isFetching/types';
import {
  PostState,
} from './post/types';
import {
  LocaleState,
} from './locale/types';

import userActions from './user/actions';
import layoutActions from './layout/actions';
import postActions from './post/actions';
import localeActions from './locale/actions';

export interface RootState {
  user: UserState,
  layout: LayoutState,
  isFetching: IsFetchingState,
  post: PostState,
  locale: LocaleState,
}

export type RootAction =
  ActionType<typeof userActions> |
  ActionType<typeof layoutActions> |
  ActionType<typeof postActions> |
  ActionType<typeof localeActions>;

export type Epic = RxEpic<
RootAction,
RootAction,
RootState
>;
