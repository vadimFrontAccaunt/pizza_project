import { BaseThunkType, InferActionsTypes } from "./redux-store"

export type NewsType = {
	photo: string
	news: string
	date: string
}

export type RewiesType = {
	photo: string
	rewie: string
	name: string
}

let InititalState = {
	photoPizza: 'https://kartinkin.net/uploads/posts/2021-07/1626838262_33-kartinkin-com-p-ogromnaya-pitstsa-yeda-krasivo-foto-52.jpg' as string,
	smallPhotoPizza: ["https://storge.pic2.me/upload/504/553e2bca9368d.jpg", "http://s1.1zoom.ru/big3/974/390721-sepik.jpg", "http://s1.1zoom.ru/big3/661/370053-sepik.jpg"] as Array<string>,
	news:[
		{
			photo:"https://barcook.ru/wp-content/uploads/2021/04/moutai.jpg",
			news: "МАОТАЙ (MOUTAI) КИТАЙСКАЯ ВОДКА",
			date: "31-ДЕКАБРЯ"
		},
		{
			photo:"https://www.rbc.ua/static/img/_/n/_novyy_god_7_650x410_1_650x410.jpg",
			news: "Что делать чтоб не отравиться прошлогодним оливье?",
			date: "01-ЯНВАРЯ"
		},
		{
			photo:"https://ichi.pro/assets/images/max/724/0*nxebID2rsyBNYzoU",
			news: "Пицца и React. В чем они похожи?",
			date: "02-ЯНВАРЯ"
		},
	] as Array<NewsType>,
	rewiews:[
		{
			photo: "https://terramare.vn.ua/wp-content/uploads/2016/12/user1.jpg",
			rewie: "Любимый, родной ресторан. Удобная служба доставки в Виннице, терпеливые официанты и кухня – пальчики оближешь. Спасибо Вам за приятную атмосферу, обходчивый и любезный персонал, вкусную кухню и большие порции.",
			name: "АНАСТАСИЯ РОМАНЕЦ"
		},
				{
			photo: "https://terramare.vn.ua/wp-content/uploads/2016/12/photo-for-otzivi-terramare-e1536707398150.jpg",
			rewie: "Люблю React. Независимо от того, в какое именно заведение вы попадете, вы обязательно получите вкусные блюда и обслуживание на высоком уровне. Мы заказали суши сет и это был один из лучших сетов в моей жизни.",
			name: "АННА ЗАВАРУХИНА"
		},
				{
			photo: "https://terramare.vn.ua/wp-content/uploads/2016/12/otzivi-viktoria-polyak-terramare-min-e1536708270813.jpg",
			rewie: "React – одно из любимых заведений, все свежее, вкусное и внимательное отношение к клиенту! Уже много лет посещаю это заведение. Даже тяжело выделить какое-то блюдо, все ну очень вкусненькое, мне все нравится!",
			name: "ВИКТОРИЯ ПОЛИК"
		},
	] as Array<RewiesType>
}

const mainPageReducer = (state = InititalState, action: ActionsTypes) : InitialState => {
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




export default mainPageReducer



export type InitialState = typeof InititalState
type ActionsTypes = InferActionsTypes<typeof actions>

