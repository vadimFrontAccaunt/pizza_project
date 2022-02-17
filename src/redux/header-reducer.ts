import { BaseThunkType, InferActionsTypes } from "./redux-store"




let InititalState = {
	countOfPizza: 0 as number,
	promocode:"ВАДИК В IT" as string,
	basket:[
		{
			photo: "" as string,
			name: "" as string,
			count: 0 as number,
			price: 0 as number
		}
	],
	finalPrice: 0 as number
}

const headerReducer = (state = InititalState, action: ActionsTypes) : InitialState => {
	switch (action.type) {
		case 'GET-COUNT':
			return{ ...state, countOfPizza:action.count + state.countOfPizza }
		case 'GET-BASKET' :
			let newPiz = {
				photo: action.photo,
				name: action.name,
				count: action.count,
				price: action.price
			}
			return {
             ...state,
            basket: [...state.basket, newPiz],
         };
		case 'GET-FINAL-PRICE': 
			return {...state, finalPrice: state.finalPrice + action.Price}
		default:
			return state
	}
}


export const actions = {
	getCount: (count:number) => ({type: 'GET-COUNT', count} as const),
	getBasket: (photo:string, name: string, count: number, price:number) => ({type:'GET-BASKET', photo,name,count,price} as const),
	getFinalPrice : (Price:number) => ({type: 'GET-FINAL-PRICE', Price} as const)
}





export default headerReducer



export type InitialState = typeof InititalState
type ActionsTypes = InferActionsTypes<typeof actions>




