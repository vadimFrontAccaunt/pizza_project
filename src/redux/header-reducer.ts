import { BaseThunkType, InferActionsTypes } from "./redux-store"



let InititalState = {}

const headerReducer = (state = InititalState, action: ActionsTypes) : InitialState => {
	switch (action.type) {
		case 'GET-NEW-REDUCER':
			return{ ...state }
		default:
			return state
	}
}

export const actions = {
	newReducer: () => ({type: 'GET-NEW-REDUCER'} as const)
}


export default headerReducer



export type InitialState = typeof InititalState
type ActionsTypes = InferActionsTypes<typeof actions>

