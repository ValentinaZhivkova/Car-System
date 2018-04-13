import {
  createStore,
  applyMiddleware,
  compose,
  GenericStoreEnhancer
} from 'redux';

import deepFreeze from './deepFreeze';
import { reducer } from './reducer';
import {IAppState } from './app.state';

declare var window: any;
const davToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
? window.devToolsExtension() : (f) => f;

export const store = createStore<IAppState>(
  reducer,
  compose(applyMiddleware(deepFreeze), davToolsExtension) as GenericStoreEnhancer
);
