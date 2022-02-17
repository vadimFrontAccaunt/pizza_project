import React, { useState } from "react";
import { useSelector } from "react-redux";
import {   getBasket, getCountOfPizza, getFinalPrice, getPromocode } from "../../../redux/main-selectors";
import Item from "./Item";
import s from './basket.module.css'
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import BuyWrapper from "./BuyWrapper";

type userSearchFormType = {
	promo: string
}

const Basket:React.FC = () => {
	const promocode = useSelector(getPromocode)
	const basket = useSelector(getBasket)
	const count = useSelector(getCountOfPizza)
	const finalPrice = useSelector(getFinalPrice)
	const [Promo, setPromo] = useState(0)
	const submit = (values: userSearchFormType,{ setSubmitting } : {setSubmitting: (setSubmitting: boolean) => void}) => {
		if(values.promo === promocode){
			setPromo(1)
		} else {
			alert("Не верный промокод глупышка:)")
		}
		setSubmitting(false)
   }

	if(!count){
		return <div className={s.wrapper}>
		<h2>Ваши заказы</h2>
			<div className={s.choose}>Вы ничего не выбрали. Выберите пожалуйста из нашего меню.</div>
			<div><img src="https://cdn-icons-png.flaticon.com/512/2223/2223608.png" alt="" /></div>
			<Link className={s.menuLink} to='/menu'>МЕНЮ</Link>
		</div>
	}
	return <div className={s.wrapper1}>
	<div className={s.wrapPromoCode}>
		<div className={s.promoName}>Введите промокод:</div>
		<Formik
			   initialValues={{promo:""}}
      		onSubmit={submit}
				className={s.formWrap}
			>
				{({ isSubmitting}) => (
         <Form>
			<Field className={s.field} type="text" name="promo" />
           <button  className={s.but} type="submit" disabled={isSubmitting}>
             Ввести
           </button>
         </Form>
       )}
			</Formik>
	</div>
	<h2>Ваши заказы</h2>
		{basket.map(b => <Item
			photo = {b.photo}
			name = {b.name}
			count = {b.count}
			price = {b.price}
			Promo = {Promo}
		/>)}
		<div className={s.wrapper_buyButton}>
			<BuyWrapper
			Promo = {Promo}
			finalPrice = {finalPrice}
			/>
		</div>
	</div>
}

export default Basket