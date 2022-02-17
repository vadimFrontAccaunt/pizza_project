import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getMainPhoto, getNew, getRewiew, getSliderPhoto } from "../../redux/main-selectors";
import { NewsType, RewiesType } from "../../redux/mainPage-reducer";
import s from './mainPage.module.css'

const MainPage:React.FC = () => {
	let photo = useSelector(getMainPhoto)
	let arrOfSliderPhoto = useSelector(getSliderPhoto)
	let news = useSelector(getNew)
	let rewiew = useSelector(getRewiew)


	return<div className={s.wrapper}>
		<div className={s.photoDiv}><img src={photo} alt=""/></div>
		<PodLine/>
		<div className={s.wrapper__pizzas}>
			<h2>Наши произведения искусства</h2>
			<div className={s.slider}><img src={arrOfSliderPhoto[0]} alt="" /><div className={s.chees}>Прежде чем выбрать подходящее блюдо, рекомендуется почитать отзывы, какая пицца лучше. К примеру, любители многообразной сырной палитры предпочитают пиццу Четыре сыра, в числе которых мраморный, чеддер, дорблю и моцарелла. Пикантный вкус этому блюду обеспечивают грецкие орехи и нежнейший сливочный соус. А румяная хрустящая корочка никого не оставит равнодушным.</div></div>
			<div className={s.slider1}><div className={s.chees1}>Самая лучшая пицца для любителей феерии сладковатого вкуса в соединении с мясными деликатесами – Джек Дэниелс. Начинка этого блюда сочетает ароматные охотничьи колбаски, нежное куриное филе, томаты, свежий и маринованный лук, сыр моцарелла, традиционно используемый при приготовлении знаменитой американской пиццы, а также соус Джек Дэниелс.</div><img src={arrOfSliderPhoto[1]} alt="" /></div>
			<div className={s.slider}><img src={arrOfSliderPhoto[2]} alt="" /><div className={s.chees}>Для любителей поесть вкусно и плотно мы представляем пиццу Супер Мясо. На мягкую основу с пышными краешками мы выкладываем разнообразие мясных вкусов: охотничьи колбаски, пепперони, бекон, нежнейшая телятина и куриное филе. Свежую нотку вносят в блюдо томат и сыр моцарелла. Вкуснейшая мясная пицца способно утолить даже самый сильный голод.</div></div>
		</div>
		<PodLine/>
		<div className={s.news}>
			{news.map(n => <New 
				photo = {n.photo}
				news = {n.news}
				date = {n.date}
				link = {n.link}
			/>)}
		</div>
		<PodLine/>
		<div className={s.sale_wrap}>
			<div className={s.sale_inner}>
				<div className={s.sale_block}>
					<h3>30%<span>скидка по промокоду: "Вадик в IT"</span></h3>
				</div>
			</div>
		</div>
		<PodLine/>
			<h2>Отзывы</h2>
			<div className={s.rewiews__wrapper}>
			{rewiew.map(r => <Rewiews
				photo = {r.photo}
				rewie = {r.rewie}
				name = {r.name}
			/>)}
			</div>
	</div>
}

export default MainPage

export const PodLine:React.FC = () => {
	return <div className={s.podLine}><img src="https://thumbs.dreamstime.com/b/%D1%80%D0%B5%D1%82%D1%80%D0%BE-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D0%B5%D1%80%D0%B8%D0%B8-%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D1%8D%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-125450493.jpg'" alt="" /><img src="https://thumbs.dreamstime.com/b/%D1%80%D0%B5%D1%82%D1%80%D0%BE-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D0%B5%D1%80%D0%B8%D0%B8-%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D1%8D%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-125450493.jpg'" alt="" /><img src="https://thumbs.dreamstime.com/b/%D1%80%D0%B5%D1%82%D1%80%D0%BE-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D0%B5%D1%80%D0%B8%D0%B8-%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D1%8D%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-125450493.jpg'" alt="" /></div>
}

export const New:React.FC<NewsType> = (props) => {
	return<a href={props.link} target="_blank" className={s.new__wrapper}>
		<img className={s.imgPhoto} src="https://images.vectorhq.com/images/previews/204/polaroid-photo-frame-with-tape-psd-468016.png" alt="" />
		<img className={s.imgPicture} src={props.photo} alt="" />
		<div className={s.new}>{props.news}</div>
		<div className={s.date}>{props.date}</div>
	</a>
}

export const Rewiews:React.FC<RewiesType> = (props) => {
	return<div className={s.wrapper__rewiew}>
		<div className={s.rewiew__photo}><img src={props.photo} alt="" /></div>
		<div className={s.text__rewiew_wrapper}>
			<div className={s.rewName}>{props.name}</div>
			<div>{props.rewie}</div>
		</div>
	</div>
}