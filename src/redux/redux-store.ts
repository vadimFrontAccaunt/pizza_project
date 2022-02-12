import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import headerReducer from "./header-reducer";
import mainPageReducer from "./mainPage-reducer";


let rootReducer = combineReducers({
	mainPage: mainPageReducer,
	header: headerReducer 
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.__store__ = store

export default store