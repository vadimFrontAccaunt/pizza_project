import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../../../redux/header-reducer";
import { getFinalPrice } from "../../../redux/main-selectors";
import s from './basket.module.css'

type Props = {
			photo: string
			name: string
			count:number 
			price:number 
			Promo: number
}

const Item:React.FC<Props> = (props) => {
	function getPrice(one:any, two:any) {
		return one * two
	}

	const finalPrice = useSelector(getFinalPrice)

	const dispatch = useDispatch()
	useEffect(() => {
			dispatch(actions.getFinalPrice(getPrice(props.count, props.price)))
	}, [])

	if(props.photo === ""){
		return<></>
	}
	if(props.Promo){
		return <div className={s.wrapperItem}>
			<div className={s.photo}><img src={props.photo} alt="" /></div>
			<div className={s.wrapText}>
				<div className={s.name}>{props.name}</div>
				<div className={s.count}>Количество:{props.count}</div>
				<div className={s.price}>Цена:{props.price / 100 * 70}грн * {props.count}шт = {getPrice(props.count, props.price) /100 * 70}грн.</div>
				<div className={s.promo}>Скидка по промокоду: {getPrice(props.count, props.price) / 100 * 30}грн</div>
			</div>
		</div>
	}
	return <div className={s.wrapperItem}>
		<div className={s.photo}><img src={props.photo} alt="" /></div>
		<div className={s.wrapText}>
			<div className={s.name}>{props.name}</div>
			<div className={s.count}>Количество:{props.count}</div>
			<div className={s.price}>Цена:{props.price}грн * {props.count}шт = {getPrice(props.count, props.price)}грн.</div>
		</div>
	</div>
}

export default Item