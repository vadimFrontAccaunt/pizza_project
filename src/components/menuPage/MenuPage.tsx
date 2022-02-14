import React from "react";
import { useSelector } from "react-redux";
import { getMenu } from "../../redux/main-selectors";
import { pizzaType } from "../../redux/menu-reducer";
import s from './menu.module.css'

const MenuPage:React.FC = () => {
	let pizza = useSelector(getMenu)
	return<div className={s.wrapper}>
		{pizza.map(p => <MenuElem
			name={p.name}
			photo={p.photo}
			likes={p.likes}
			products={p.products}
			price={p.price}
		/>)}
	</div>
}

export default MenuPage


const MenuElem:React.FC<pizzaType> = (props) => {
	return<div className={s.wrapper_piz}>
		<div className={s.name}>{props.name}</div>
		<div><img src={props.photo} alt="" /></div>
		<div className={s.products}>{props.products}</div>
		<div className={s.wrapper__pl}>
			<div className={s.price}>Цена:{props.price} грн.</div>
			<div className={s.likes}>Понравилось: {props.likes}</div>
		</div>
	</div>
}