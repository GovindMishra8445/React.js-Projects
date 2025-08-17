import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Importing our to-do reducer
import darkReducer from './themeSlice'
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import AuthReducer from './AuthReducers'

const persistConfig = {
  key: 'auth',
  storage,
}

const persistedReducer = persistReducer(persistConfig, AuthReducer);

export const store = configureStore({
  reducer: {
    todos: todoReducer, // Adding our to-do slice to the store
    darkMode:darkReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: { ignoreActions: ['persist/PERSIST'] } })
});

export const persistor = persistStore(store);