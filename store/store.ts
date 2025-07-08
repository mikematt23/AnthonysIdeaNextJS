import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import userReducer from "./slices/usersSlice"

const rootReducer = combineReducers({
  //combined redcucers 
  user: userReducer
})

const noopStorage = {
  getItem: (_key: string) => Promise.resolve(null),
  setItem: (_key: string, value: string) => Promise.resolve(),
  removeItem: (_key: string) => Promise.resolve(),
}

const presistConfig = {
    key:'root',
    storage : typeof window !== 'undefined' ? storage : noopStorage,
    whitelist:["user"]//put slice in here you want to save on reloads or rerenders
}

const peresistedReducer = persistReducer(presistConfig,rootReducer)

export const store = configureStore({
    reducer: peresistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch