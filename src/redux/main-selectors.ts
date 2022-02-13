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