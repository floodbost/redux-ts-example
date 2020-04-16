import {configureStore, ThunkAction, Action, getDefaultMiddleware} from '@reduxjs/toolkit';
import loggerMiddleware from "../middleware/loggerMiddleware";
import {rootReducer} from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), loggerMiddleware]
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
