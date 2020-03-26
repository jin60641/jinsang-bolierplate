import {
  combineEpics,
} from 'redux-observable';

import userEpic from './user/epics';
import postEpic from './post/epics';

const epics = [
  userEpic,
  postEpic,
];

const rootEpic = combineEpics(...epics);

export default rootEpic;
