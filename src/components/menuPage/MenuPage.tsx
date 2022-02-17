import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/header-reducer";
import { getMenu } from "../../redux/main-selectors";
import { pizzaType } from "../../redux/menu-reducer";
import s from './menu.module.css'
import * as Yup from 'yup'



const MenuPage:React.FC = () => {
	let pizza = useSelector(getMenu)
	return<div className={s.wrapper}>
		{pizza.map(p => <MenuElem
			id={p.id}
			name={p.name}
			photo={p.photo}
			likes={p.likes}
			products={p.products}
			price={p.price}
		/>)}
	</div>
}

export default MenuPage

const countShema = Yup.object().shape({
	count: Yup.number()
	.min(0, "Отнять пиццу в нашем заведении не получится)")
})

type userSearchFormType = {
	count: number
}

const MenuElem:React.FC<pizzaType> = (props) => {
	const [buyMode, setBuyMode] = useState(false)
	const dispatch = useDispatch()
	let pizza = useSelector(getMenu)
	const submit = (values: userSearchFormType,{ setSubmitting } : {setSubmitting: (setSubmitting: boolean) => void}) => {
		dispatch(actions.getCount(values.count))
		console.log(props.photo, props.name, values.count, props.price)
		dispatch(actions.getBasket(props.photo, props.name, values.count, props.price))
		setSubmitting(false)
   }

	const [likes, setLikes] = useState(props.likes)

	

	if(buyMode){
		return <div>
		 <div  className={s.wrapper_piz_on}>
		<div className={s.name}>{props.name}</div>
		<div><img src={props.photo} alt="" /></div>
		<div className={s.products}>{props.products}</div>
		<div className={s.wrapper__pl}>
			<div className={s.price}>Цена:{props.price} грн.</div>
			<div onClick = {() => setLikes(likes + 1)} className={s.likes}>Понравилось: {likes}</div>
		</div>
	</div>
	<div className={s.wrapper__buy}>
			<Formik
			   initialValues={{count:1}}
      		validationSchema={countShema}
      		onSubmit={submit}
				className={s.formWrap}
			>
				{({ isSubmitting, errors, touched }) => (
         <Form>
			<Field className={s.field} type="number" name="count" />
			{errors.count && touched.count ? ( <div className={s.error}>{errors.count}</div> ) : null}
           <button  className={s.but} type="submit" disabled={isSubmitting}>
             Купить
           </button>
         </Form>
       )}
			</Formik>
			<div className={s.close}  onClick = {() => setBuyMode(false)}>ЗАКРЫТЬ</div>
		</div>
	</div>
	}
	return<div onClick = {() => setBuyMode(true)} className={s.wrapper_piz}>
		<div className={s.name}>{props.name}</div>
		<div><img src={props.photo} alt="" /></div>
		<div className={s.products}>{props.products}</div>
		<div className={s.wrapper__pl}>
			<div className={s.price}>Цена:{props.price} грн.</div>
			<div onClick = {() => setLikes(likes + 1)} className={s.likes}>Понравилось: {likes}</div>
		</div>
	</div>
}