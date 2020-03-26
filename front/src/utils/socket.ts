import {
  Store,
} from 'redux';

let store: Store;

const connectStore = (initedStore: Store) => {
  store = initedStore;
};

const init = (token: string) => {
  // const socket = new WebSocket(`${process.env.REACT_APP_SOCKET_HOST as string}?token=${token}`);
  const socket = new WebSocket(`${process.env.REACT_APP_SOCKET_HOST as string}?token=${token}`);
  socket.onmessage = ({
    data: action,
  }) => {
    if (store) {
      store.dispatch(JSON.parse(action));
    }
  };
  return socket;
};

export default {
  init,
  connectStore,
};
