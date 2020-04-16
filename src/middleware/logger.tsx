import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux";
import { RootState, AppDispatch } from "../app/store";
import {CombinedState} from "redux";

export const Logger: Middleware =
    (store: MiddlewareAPI<CombinedState<AppDispatch>, RootState>) =>
        (next: Dispatch<Action>) =>
            <T extends Action>(action: T): T => {
    // Do stuff
    const {counter}  = store.getState();
    console.log("Before", counter.action, counter.value);
    return next(action);
};

export default Logger;
