import {configureStore, ThunkAction, Action, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import Logger from "../middleware/logger";
import {combineReducers} from "@reduxjs/toolkit";



export const rootReducer = combineReducers({
  counter: counterReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware<RootState>(), Logger]
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
//export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
