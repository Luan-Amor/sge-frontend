import { Reducers } from './reducers';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persisteConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persisteConfig, Reducers)

const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor };
