import { InferActionsTypes } from "./redux-store"

export type pizzaType = {
	name: string
	photo: string
	likes: number
	products: string
	price: number
}

let InititalState = {
	pizzas:[
		{
			name:'Барбекю',
			photo:'https://presto.zp.ua/image/cache/catalog/pizza/barbekju-1340x890.jpg',
			likes:213,
			products: 'помидорный соус, моцарелла, шампиньоны, копченое куриное филе, балык,охотничьи колбаски, красный лук',
			price:150.00,
		},
				{
			name:'Венецианская',
			photo:'https://presto.zp.ua/image/cache/catalog/pizza/venecianskaja-1340x890.jpg',
			likes:123,
			products: 'помидорный соус, моцарелла,балык,шампеньены жареные',
			price:124.00,
		},
				{
			name:'Деревенская',
			photo:'https://presto.zp.ua/image/cache/catalog/pizza/derevenskaja-1340x890.jpg',
			likes:436,
			products: 'помидорный соус, моцарелла, бекон копченый,лук красный,охотничьи колбаски,огурец соленый',
			price:150.99,
		},
				{
			name:'ДИ КОЛОРЕ',
			photo:'https://presto.zp.ua/image/cache/catalog/pizza/dikolore-1340x890.jpg',
			likes:213,
			products: 'помидорный соус, моцарелла, сладкий перец, шампиньоны жареные, лук, кукуруза, ',
			price:120.55,
		},
				{
			name:'ДИ МАРЕ',
			photo:'https://presto.zp.ua/image/cache/catalog/pizza/dimare-1340x890.jpg',
			likes:54,
			products: 'помидорный соус, Моцарелла, тунец консервированный, лук репчатый',
			price:160.53,
		},
				{
			name:'ДИ ПОЛО',
			photo:'https://presto.zp.ua/image/cache/catalog/pizza/dipolo-1340x890.jpg',
			likes:251,
			products: 'помидорный соус, моцарелла, Куриное филе',
			price:150.00,
		},
				{
			name:'ДИ ПРАНЗО',
			photo:'https://presto.zp.ua/image/cache/catalog/pizza/dipranzo-1340x890.jpg',
			likes:254,
			products: 'сметана, моцарелла, свинина, балык, шампиньоны, лук',
			price:731,
		},
				{
			name:'ДИ ФАТОРИЯ',
			photo:'https://presto.zp.ua/image/cache/catalog/pizza/difatorija-1340x890.jpg',
			likes:2134,
			products: 'свинина, куриное филе, бекон, помидоры, чеснок, петрушка',
			price:140.00,
		},
				{
			name:'КУАЛЬЯ',
			photo:'https://presto.zp.ua/image/cache/catalog/pizza/kualja-1340x890.jpg',
			likes:231,
			products: 'помидорный соус, моцарелла, бплык,салями,перепелиные яйца,зеленый лук',
			price:140.55,
		},
				{
			name:'АЛЬ РЭАКТО',
			photo:'https://presto.zp.ua/image/cache/catalog/pizza/dikolore-1340x890.jpg',
			likes:999,
			products: 'немножечко ума и любви',
			price:900.99,
		},
	] as Array<pizzaType>
}

const menuReducer = (state = InititalState, action: ActionsTypes) : InitialState => {
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


export default menuReducer



export type InitialState = typeof InititalState
type ActionsTypes = InferActionsTypes<typeof actions>

