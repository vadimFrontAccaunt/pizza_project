import { AppStateType } from "./redux-store";

export const getMainPhoto = (state:AppStateType) => {
	return state.mainPage.photoPizza
}
export const getSliderPhoto = (state:AppStateType) => {
	return state.mainPage.smallPhotoPizza
}
export const getNew = (state:AppStateType) => {
	return state.mainPage.news
}
export const getRewiew = (state:AppStateType) => {
	return state.mainPage.rewiews
}
export const getMenu = (state:AppStateType) => {
	return state.menu.pizzas
} 
export const getCountOfPizza = (state:AppStateType) => {
	return state.header.countOfPizza
}
export const getPromocode = (state:AppStateType) => {
	return state.header.promocode
}
export const getBasket = (state:AppStateType) => {
	return state.header.basket
}
export const getFinalPrice = (state:AppStateType) => {
	return state.header.finalPrice
}


